import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const OWNER_EMAIL = "contact@convertilab.com";

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildContactEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(data.name || "");
  const email = escapeHtml(data.email || "");
  const phone = escapeHtml(data.phone || "");
  const company = escapeHtml(data.company || "");
  const message = data.message ? escapeHtml(data.message) : "";
  const projectType = projectLabels[data.project] || escapeHtml(data.project || "");
  const timeline = timelineLabels[data.timeline] || escapeHtml(data.timeline || "Non spécifié");

  return {
    subject: `🔔 Nouvelle demande de ${name} — ${projectType}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}
.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}
.header{background:linear-gradient(135deg,#9333ea,#ec4899);color:#fff;padding:30px;text-align:center}
.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}
.content{padding:30px}
.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #9333ea}
.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}
.field-value{font-size:15px;color:#111827;font-weight:500}
.badge{display:inline-block;background:linear-gradient(135deg,#9333ea,#ec4899);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}
.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#9333ea;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}
.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}
</style></head><body><div class="container">
<div class="header"><h1>🔔 Nouvelle Demande</h1><p>Un prospect vient de remplir le formulaire</p></div>
<div class="content">
<div class="field"><div class="field-label">Nom</div><div class="field-value">${name}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${phone}">${phone}</a></div></div>
<div class="field"><div class="field-label">Entreprise</div><div class="field-value">${company}</div></div>
<div class="field"><div class="field-label">Type de projet</div><div class="field-value"><span class="badge">${projectType}</span></div></div>
<div class="field"><div class="field-label">Délai souhaité</div><div class="field-value">${timeline}</div></div>
${message ? `<div class="field"><div class="field-label">Message</div><div class="field-value">${message}</div></div>` : ""}
<div class="cta"><a href="mailto:${email}?subject=Re: Votre demande chez ConvertiLab">Répondre au prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildOfferEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(data.name || "");
  const email = escapeHtml(data.email || "");
  const phone = escapeHtml(data.phone || "");
  const company = escapeHtml(data.company || "Non spécifié");

  return {
    subject: `🎯 Nouvelle réservation Offre 300€ — ${name}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}
.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}
.header{background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:30px;text-align:center}
.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}
.content{padding:30px}
.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #f59e0b}
.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}
.field-value{font-size:15px;color:#111827;font-weight:500}
.badge{display:inline-block;background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}
.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#f59e0b;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}
.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}
</style></head><body><div class="container">
<div class="header"><h1>🎯 Réservation Offre 300€</h1><p>Un prospect a réservé une place !</p></div>
<div class="content">
<div class="field"><div class="field-label">Nom</div><div class="field-value">${name}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${phone}">${phone}</a></div></div>
<div class="field"><div class="field-label">Entreprise</div><div class="field-value">${company}</div></div>
<div class="field"><div class="field-label">Offre</div><div class="field-value"><span class="badge">Site Web Pro — 300€</span></div></div>
<div class="cta"><a href="mailto:${email}?subject=Re: Votre réservation Offre 300€ — ConvertiLab">Contacter le prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildNewsletterEmail(data: any): { subject: string; html: string } {
  const email = escapeHtml(data.email || "");

  return {
    subject: `📬 Nouvel abonné newsletter — ${email}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}
.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}
.header{background:linear-gradient(135deg,#06b6d4,#8b5cf6);color:#fff;padding:30px;text-align:center}
.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}
.content{padding:30px}
.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #06b6d4}
.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}
.field-value{font-size:15px;color:#111827;font-weight:500}
.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}
</style></head><body><div class="container">
<div class="header"><h1>📬 Nouvel Abonné</h1><p>Quelqu'un vient de s'inscrire à la newsletter</p></div>
<div class="content">
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json();
    const formType: string = data.type || "contact";

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let emailContent: { subject: string; html: string };

    switch (formType) {
      case "offer":
        if (!data.name || !data.phone) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildOfferEmail(data);
        break;

      case "newsletter":
        emailContent = buildNewsletterEmail(data);
        break;

      case "contact":
      default:
        if (!data.name || !data.company || !data.phone || !data.project) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildContactEmail(data);
        break;
    }

    const emailResponse = await resend.emails.send({
      from: "ConvertiLab <noreply@convertilab.com>",
      to: [OWNER_EMAIL],
      subject: emailContent.subject,
      html: emailContent.html,
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
