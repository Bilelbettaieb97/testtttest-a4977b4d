import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ConfirmationEmailRequest {
  email: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authorization
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);

    // Allow service_role tokens (from pg_net triggers) and authenticated users
    const isServiceRole = claimsData?.claims?.role === "service_role";
    const isAuthenticated = claimsData?.claims?.sub && !claimsError;

    if (!isServiceRole && !isAuthenticated) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email }: ConfirmationEmailRequest = await req.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the email exists in newsletter_subscriptions to prevent arbitrary sending
    const adminClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: subscription, error: subError } = await adminClient
      .from("newsletter_subscriptions")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (subError || !subscription) {
      return new Response(
        JSON.stringify({ error: "Email not found in subscriptions" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Sending confirmation email to:", email);

    const siteUrl = Deno.env.get("SITE_URL") || "https://testtttest.lovable.app";

    const emailResponse = await resend.emails.send({
      from: "ConvertiLab <noreply@convertilab.com>",
      to: [email],
      subject: "Bienvenue chez ConvertiLab ! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; line-height: 1.6; color: #1f2937; background-color: #f3f4f6; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
              .header { background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white; padding: 40px 30px; text-align: center; }
              .logo { font-size: 48px; margin-bottom: 10px; }
              .header h1 { font-size: 28px; font-weight: 700; margin: 10px 0; letter-spacing: -0.5px; }
              .header p { font-size: 16px; opacity: 0.95; margin-top: 8px; }
              .content { padding: 40px 30px; }
              .content h2 { color: #9333ea; font-size: 22px; margin-bottom: 20px; font-weight: 600; }
              .content p { margin-bottom: 16px; color: #4b5563; font-size: 15px; }
              .benefits { background: linear-gradient(135deg, #faf5ff 0%, #fce7f3 100%); border-radius: 12px; padding: 24px; margin: 24px 0; }
              .benefit-item { display: flex; align-items: start; margin-bottom: 12px; }
              .benefit-item:last-child { margin-bottom: 0; }
              .benefit-icon { font-size: 20px; margin-right: 12px; flex-shrink: 0; }
              .benefit-text { color: #6b21a8; font-size: 15px; font-weight: 500; }
              .cta-section { text-align: center; margin: 32px 0; }
              .button { display: inline-block; background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); color: white !important; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3); }
              .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
              .footer p { color: #6b7280; font-size: 13px; line-height: 1.8; margin-bottom: 8px; }
              .social-links { margin-top: 20px; }
              .social-links a { color: #9333ea; text-decoration: none; margin: 0 10px; font-size: 14px; font-weight: 500; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">🚀</div>
                <h1>Bienvenue chez ConvertiLab !</h1>
                <p>Votre voyage vers l'optimisation commence ici</p>
              </div>
              <div class="content">
                <h2>Merci pour votre confiance ! 🎉</h2>
                <p>Nous sommes ravis de vous compter parmi notre communauté d'experts en conversion.</p>
                <p>En vous abonnant à notre newsletter, vous allez recevoir :</p>
                <div class="benefits">
                  <div class="benefit-item"><span class="benefit-icon">📈</span><span class="benefit-text">Des stratégies éprouvées pour augmenter vos conversions</span></div>
                  <div class="benefit-item"><span class="benefit-icon">💡</span><span class="benefit-text">Des études de cas réels et inspirants</span></div>
                  <div class="benefit-item"><span class="benefit-icon">🎯</span><span class="benefit-text">Des conseils d'experts en UX et conversion</span></div>
                  <div class="benefit-item"><span class="benefit-icon">🎁</span><span class="benefit-text">Des ressources exclusives (bientôt disponibles)</span></div>
                </div>
                <p>Vos ressources gratuites seront bientôt accessibles. En attendant, découvrez ce qui vous attend !</p>
                <div class="cta-section">
                  <a href="${siteUrl}/newsletter-confirmation" class="button">Découvrir mes ressources</a>
                </div>
                <p style="margin-top: 32px; color: #6b7280; font-size: 14px;">Une question ? N'hésitez pas à nous contacter.</p>
                <p style="font-weight: 600; color: #9333ea; margin-top: 24px;">À très bientôt,<br>L'équipe ConvertiLab</p>
              </div>
              <div class="footer">
                <p><strong>ConvertiLab</strong> - Experts en Optimisation de Conversion</p>
                <p>Vous recevez cet email car vous vous êtes inscrit à notre newsletter.</p>
                <div class="social-links"><a href="${siteUrl}">Visiter notre site</a></div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: "Service temporarily unavailable" }),
      { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
