import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const HomepageContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Veuillez remplir tous les champs", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: "",
        project: "contact-rapide",
        main_challenge: "non_specifie",
      });

      if (error) throw error;

      toast({ title: "Demande envoyée !", description: "On vous recontacte sous 24h." });
      setFormData({ name: "", phone: "", email: "" });
    } catch {
      toast({ title: "Erreur", description: "Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            Envoyez votre demande
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg py-6 font-semibold shadow-xl"
            >
              <Send className="mr-2 w-5 h-5" />
              {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageContactForm;
