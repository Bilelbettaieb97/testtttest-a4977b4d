import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Lock, Download, RefreshCw, Users, Mail, Gift, LogOut, Loader2 } from 'lucide-react';
import { User, Session } from '@supabase/supabase-js';

interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  company: string;
  project: string;
  budget: string | null;
  main_challenge: string;
  timeline: string | null;
  message: string | null;
  urgency: string | null;
}

interface NewsletterSubscription {
  id: string;
  created_at: string;
  email: string;
}

interface OfferReservation {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
}

interface AdminData {
  contacts: ContactSubmission[];
  newsletter: NewsletterSubscription[];
  offers: OfferReservation[];
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsCheckingAuth(false);
        
        // Fetch admin data when session is established
        if (session?.user) {
          setTimeout(() => {
            fetchAdminData();
          }, 0);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsCheckingAuth(false);
      
      if (session?.user) {
        fetchAdminData();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchAdminData = async () => {
    setIsLoading(true);
    setAuthError(null);
    
    try {
      const { data: responseData, error } = await supabase.functions.invoke('get-admin-data');

      if (error) {
        console.error('Edge function error:', error);
        if (error.message?.includes('403') || error.message?.includes('Accès refusé')) {
          setAuthError('Vous n\'avez pas les droits administrateur');
        } else if (error.message?.includes('401')) {
          setAuthError('Session expirée. Veuillez vous reconnecter.');
          await supabase.auth.signOut();
        } else {
          throw error;
        }
        return;
      }

      if (responseData?.error) {
        if (responseData.error.includes('administrateur') || responseData.error.includes('Accès refusé')) {
          setAuthError('Vous n\'avez pas les droits administrateur');
        } else {
          setAuthError(responseData.error);
        }
        return;
      }

      setData(responseData);
    } catch (error) {
      console.error('Fetch admin data error:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les données',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message === 'Invalid login credentials') {
          setAuthError('Email ou mot de passe incorrect');
        } else {
          setAuthError(error.message);
        }
        return;
      }

      if (data.user) {
        toast({
          title: 'Connecté',
          description: 'Vérification des droits administrateur...'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthError('Impossible de se connecter');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = async () => {
    await fetchAdminData();
    if (!authError) {
      toast({
        title: 'Données actualisées',
        description: 'Les données ont été rafraîchies'
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setData(null);
    setAuthError(null);
    setEmail('');
    setPassword('');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportToCSV = (type: 'contacts' | 'newsletter' | 'offers') => {
    if (!data) return;

    let csvContent = '';
    let filename = '';

    if (type === 'contacts') {
      csvContent = 'Date,Nom,Email,Téléphone,Entreprise,Projet,Budget,Défi Principal,Délai,Message\n';
      data.contacts.forEach(item => {
        csvContent += `"${formatDate(item.created_at)}","${item.name}","${item.email}","${item.phone || ''}","${item.company}","${item.project}","${item.budget || ''}","${item.main_challenge}","${item.timeline || ''}","${(item.message || '').replace(/"/g, '""')}"\n`;
      });
      filename = 'contacts.csv';
    } else if (type === 'newsletter') {
      csvContent = 'Date,Email\n';
      data.newsletter.forEach(item => {
        csvContent += `"${formatDate(item.created_at)}","${item.email}"\n`;
      });
      filename = 'newsletter.csv';
    } else if (type === 'offers') {
      csvContent = 'Date,Nom,Email,Téléphone,Entreprise\n';
      data.offers.forEach(item => {
        csvContent += `"${formatDate(item.created_at)}","${item.name}","${item.email}","${item.phone}","${item.company || ''}"\n`;
      });
      filename = 'offres-speciales.csv';
    }

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    toast({
      title: 'Export réussi',
      description: `${filename} téléchargé`
    });
  };

  // Loading state while checking auth
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          <span className="text-muted-foreground">Vérification de l'authentification...</span>
        </div>
      </div>
    );
  }

  // Not authenticated - show login form
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Administration</CardTitle>
            <p className="text-muted-foreground">Connectez-vous avec votre compte administrateur</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              {authError && (
                <p className="text-sm text-destructive">{authError}</p>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Connexion...
                  </>
                ) : (
                  'Se connecter'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authenticated but not admin
  if (authError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Accès refusé</CardTitle>
            <p className="text-muted-foreground">{authError}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Connecté en tant que: {user.email}
            </p>
            <Button variant="outline" className="w-full" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Loading data
  if (isLoading && !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          <span className="text-muted-foreground">Chargement des données...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Tableau de bord</h1>
            <p className="text-muted-foreground">Connecté: {user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={refreshData} disabled={isLoading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{data?.contacts.length || 0}</p>
                <p className="text-muted-foreground">Contacts</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">{data?.newsletter.length || 0}</p>
                <p className="text-muted-foreground">Newsletter</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">{data?.offers.length || 0}</p>
                <p className="text-muted-foreground">Offres spéciales</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contacts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="offers">Offres spéciales</TabsTrigger>
          </TabsList>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Demandes de contact</CardTitle>
                <Button variant="outline" size="sm" onClick={() => exportToCSV('contacts')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Entreprise</TableHead>
                        <TableHead>Projet</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Défi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.contacts.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="whitespace-nowrap">{formatDate(item.created_at)}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.company}</TableCell>
                          <TableCell>{item.project}</TableCell>
                          <TableCell>{item.budget || '-'}</TableCell>
                          <TableCell>{item.main_challenge}</TableCell>
                        </TableRow>
                      ))}
                      {data?.contacts.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                            Aucune demande de contact
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Newsletter Tab */}
          <TabsContent value="newsletter">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Abonnés newsletter</CardTitle>
                <Button variant="outline" size="sm" onClick={() => exportToCSV('newsletter')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.newsletter.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="whitespace-nowrap">{formatDate(item.created_at)}</TableCell>
                          <TableCell>{item.email}</TableCell>
                        </TableRow>
                      ))}
                      {data?.newsletter.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={2} className="text-center text-muted-foreground py-8">
                            Aucun abonné newsletter
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Offers Tab */}
          <TabsContent value="offers">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Réservations offres spéciales</CardTitle>
                <Button variant="outline" size="sm" onClick={() => exportToCSV('offers')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Téléphone</TableHead>
                        <TableHead>Entreprise</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.offers.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="whitespace-nowrap">{formatDate(item.created_at)}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                          <TableCell>{item.company || '-'}</TableCell>
                        </TableRow>
                      ))}
                      {data?.offers.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            Aucune réservation d'offre spéciale
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
