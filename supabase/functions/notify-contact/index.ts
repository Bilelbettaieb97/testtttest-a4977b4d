import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const OWNER_EMAIL = "contact@convertilab.com";

interface ContactData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project: string;
  timeline: string;
  message: string;
  urgency: string;
  main_challenge: string;
}

const projectLabels: Record<string, string> = {
  vitrine: "Site vitrine",
  ecommerce: "E-commerce",
  landing: "Landing Page",
  audit: "Audit",
};

const timelineLabels: Record<string, string> = {
  urgent: "< 1 semaine",
  "1-2weeks": "1 à 2 semaines",
  "1month": "1 mois",
  flexible: "Flexible",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactData = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.phone || !data.project) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email) || data.email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const projectType = projectLabels[data.project] || data.project;
    const timeline = timelineLabels[data.timeline] || data.timeline || "Non spécifié";

    const emailResponse = await resend.emails.send({
      from: "ConvertiLab <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      subject: `🔔 Nouvelle demande de ${data.name} — ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f3f4f6; padding: 20px; margin: 0; color: #1f2937; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #9333ea, #ec4899); color: white; padding: 30px; text-align: center; }
            .header h1 { font-size: 22px; margin: 0 0 5px; }
            .header p { font-size: 14px; opacity: 0.9; margin: 0; }
            .content { padding: 30px; }
            .field { margin-bottom: 16px; padding: 12px 16px; background: #f9fafb; border-radius: 10px; border-left: 4px solid #9333ea; }
            .field-label { font-size: 11px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #111827; font-weight: 500; }
            .badge { display: inline-block; background: linear-gradient(135deg, #9333ea, #ec4899); color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; }
            .cta { text-align: center; margin-top: 24px; }
            .cta a { display: inline-block; background: #9333ea; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; }
            .footer { text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 Nouvelle Demande</h1>
              <p>Un prospect vient de remplir le formulaire</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nom</div>
                <div class="field-value">${data.name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Téléphone</div>
                <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Entreprise</div>
                <div class="field-value">${data.company}</div>
              </div>
              <div class="field">
                <div class="field-label">Type de projet</div>
                <div class="field-value"><span class="badge">${projectType}</span></div>
              </div>
              <div class="field">
                <div class="field-label">Délai souhaité</div>
                <div class="field-value">${timeline}</div>
              </div>
              ${data.message ? `
              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value">${data.message}</div>
              </div>` : ''}
              <div class="cta">
                <a href="mailto:${data.email}?subject=Re: Votre demande chez ConvertiLab">Répondre au prospect</a>
              </div>
            </div>
            <div class="footer">ConvertiLab — Notification automatique</div>
          </div>
        </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend send error:", emailResponse.error);
      return new Response(
        JSON.stringify({ success: false, error: emailResponse.error.message }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Notification email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
