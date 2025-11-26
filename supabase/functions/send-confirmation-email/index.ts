import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConfirmationEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: ConfirmationEmailRequest = await req.json();
    
    console.log("Sending confirmation email to:", email);

    const emailResponse = await resend.emails.send({
      from: "ConvertiLab <onboarding@resend.dev>",
      to: [email],
      subject: "Bienvenue dans notre communauté ! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .button {
                display: inline-block;
                background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 5px;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Merci de votre inscription ! 🎉</h1>
            </div>
            <div class="content">
              <p>Bonjour,</p>
              <p>Nous sommes ravis de vous compter parmi nos abonnés !</p>
              <p>Vous recevrez bientôt nos meilleurs conseils et astuces pour optimiser votre taux de conversion.</p>
              <p>En attendant, nos ressources gratuites seront bientôt disponibles.</p>
              <div style="text-align: center;">
                <a href="${Deno.env.get("SITE_URL") || "https://hoaofayagbbhenktvchh.lovable.app"}/newsletter-confirmation" class="button">
                  Voir mes ressources
                </a>
              </div>
              <p>À très bientôt,<br>L'équipe ConvertiLab</p>
            </div>
            <div class="footer">
              <p>Vous recevez cet email car vous vous êtes inscrit à notre newsletter.</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
