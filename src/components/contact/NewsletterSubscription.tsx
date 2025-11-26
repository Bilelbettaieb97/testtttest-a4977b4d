
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: newsletterEmail }]);

      if (error) throw error;

      toast({
        title: "Inscription réussie !",
        description: "Vous êtes maintenant abonné à notre newsletter.",
      });

      setNewsletterEmail("");
    } catch (error) {
      console.log("Newsletter error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription à la newsletter.",
        variant: "destructive",
      });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200 shadow-lg">
      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Newsletter</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 text-center">
          Recevez nos conseils en conversion directement dans votre boîte mail
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="votre@email.com"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
            className="text-sm"
          />
          <Button 
            type="submit" 
            disabled={isNewsletterSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-sm"
          >
            {isNewsletterSubmitting ? "Inscription..." : "S'abonner"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSubscription;
