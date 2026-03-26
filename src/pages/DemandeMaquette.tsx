import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Palette, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const siteTypes = [
  'Landing Page',
  'Site Vitrine',
  'Site E-commerce',
  'Application Web',
  'Refonte de site',
  'Autre',
];

const sectors = [
  'Restaurant / Food',
  'Immobilier',
  'Santé / Bien-être',
  'E-commerce / Retail',
  'Services B2B',
  'Artisan / BTP',
  'Coaching / Formation',
  'Beauté / Mode',
  'Tech / SaaS',
  'Association / ONG',
  'Autre',
];

const DemandeMaquette = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    current_site_url: '',
    sector: '',
    site_type: '',
    description: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.sector || !form.site_type) {
      toast({ title: 'Champs requis', description: 'Veuillez remplir tous les champs obligatoires.', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('mockup_requests' as any).insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        current_site_url: form.current_site_url.trim() || null,
        sector: form.sector,
        site_type: form.site_type,
        description: form.description.trim() || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({ title: 'Demande envoyée ! ✨', description: 'Nous préparons votre maquette et vous recontactons sous 48h.' });
    } catch {
      toast({ title: 'Erreur', description: 'Une erreur est survenue. Réessayez ou contactez-nous directement.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO url="/demande-maquette" title="Demande envoyée | ConvertiLab" description="Votre demande de maquette a bien été envoyée." />
        <Navigation />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-lg mx-auto px-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Demande reçue ! 🎨</h1>
            <p className="text-muted-foreground mb-8">
              Merci pour votre confiance. Notre équipe prépare votre maquette personnalisée et vous recontacte sous <strong>48h</strong>.
            </p>
            <Button asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        url="/demande-maquette"
        title="Demande de Maquette Gratuite | ConvertiLab"
        description="Demandez une maquette gratuite pour votre futur site web. Remplissez le formulaire et recevez un design personnalisé sous 48h."
        keywords="maquette site web gratuite, design site internet, maquette gratuite Paris"
      />
      <Navigation />

      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Demande de maquette</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              100% Gratuit & sans engagement
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Recevez une{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                maquette gratuite
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Décrivez votre projet et recevez une maquette personnalisée sous 48h. 
              Aucun engagement, aucune carte bancaire requise.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Votre projet</h2>
                    <p className="text-sm text-muted-foreground">Remplissez ce formulaire pour recevoir votre maquette</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" placeholder="Jean Dupont" value={form.name} onChange={e => handleChange('name', e.target.value)} required maxLength={200} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="jean@exemple.com" value={form.email} onChange={e => handleChange('email', e.target.value)} required maxLength={255} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" value={form.phone} onChange={e => handleChange('phone', e.target.value)} required maxLength={50} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Type de site souhaité *</Label>
                      <Select value={form.site_type} onValueChange={v => handleChange('site_type', v)}>
                        <SelectTrigger><SelectValue placeholder="Choisir..." /></SelectTrigger>
                        <SelectContent>
                          {siteTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Secteur d'activité *</Label>
                      <Select value={form.sector} onValueChange={v => handleChange('sector', v)}>
                        <SelectTrigger><SelectValue placeholder="Choisir..." /></SelectTrigger>
                        <SelectContent>
                          {sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="url">URL de votre site actuel <span className="text-muted-foreground">(optionnel)</span></Label>
                    <Input id="url" type="url" placeholder="https://monsite.com" value={form.current_site_url} onChange={e => handleChange('current_site_url', e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Décrivez votre projet <span className="text-muted-foreground">(optionnel)</span></Label>
                    <Textarea id="description" placeholder="Décrivez brièvement ce que vous attendez de votre futur site : objectifs, fonctionnalités souhaitées, inspirations..." value={form.description} onChange={e => handleChange('description', e.target.value)} rows={4} maxLength={2000} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Envoi en cours...' : (
                      <>Demander ma maquette gratuite <ArrowRight className="w-5 h-5 ml-2" /></>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <Link to="/politique-de-confidentialite" className="underline hover:text-primary">politique de confidentialité</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DemandeMaquette;
