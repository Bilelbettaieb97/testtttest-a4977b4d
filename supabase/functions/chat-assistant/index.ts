import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Tu es un assistant virtuel expert pour ConvertiLab, une agence web spécialisée dans la création de sites web sur-mesure.

INFORMATIONS CLÉS À CONNAÎTRE:
- Agence de création de sites web professionnels 100% sur-mesure
- Délai de livraison: 2-4 semaines
- Support 24/7 inclus pendant 3 mois
- +150 sites créés avec 98% de satisfaction client
- Tarif de base: 300€ pour un site vitrine complet

SERVICES PROPOSÉS:
- Design web créatif et personnalisé
- Développement expert avec technologies modernes
- Sites responsive adaptés à tous les appareils
- Optimisation SEO et performance
- Formation à l'utilisation du site
- Maintenance et support continu

PROCESSUS:
1. Consultation gratuite (30 min)
2. Design & Maquette (2-3 jours)
3. Développement (1-2 semaines)
4. Tests & Ajustements (2-3 jours)
5. Mise en ligne et formation (1 jour)

GARANTIES:
- Paiement sécurisé
- Garantie satisfait ou remboursé 30j
- SSL & RGPD conformes
- Réponse support < 2h

TON RÔLE:
- Répondre aux questions sur les services, tarifs, délais
- Expliquer le processus de création
- Rassurer sur la qualité et les garanties
- Encourager à demander un devis ou prendre rendez-vous
- Être chaleureux, professionnel et concis
- Utiliser des emojis avec modération (1-2 par message)

IMPORTANT:
- Si question technique complexe → suggérer un appel gratuit
- Si demande de prix précis → proposer l'estimateur en ligne ou devis personnalisé
- Toujours finir par une question ou proposition d'action`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes, veuillez réessayer dans un moment." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
