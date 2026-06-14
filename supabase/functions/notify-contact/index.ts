import { Resend } from "npm:resend@2.0.0";
import { createClient } from "npm:@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const OWNER_EMAIL = "contact@convertilab.com";
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitize(val: unknown, maxLen = MAX_FIELD_LENGTH): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

// --- Email builders (kept compact) ---

const projectLabels: Record<string, string> = { vitrine: "Site vitrine", ecommerce: "E-commerce", landing: "Landing Page", audit: "Audit" };
const timelineLabels: Record<string, string> = { urgent: "< 1 semaine", "1-2weeks": "1 à 2 semaines", "1month": "1 mois", flexible: "Flexible" };

function buildContactEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(sanitize(data.name));
  const email = escapeHtml(sanitize(data.email, 255));
  const phone = escapeHtml(sanitize(data.phone, 50));
  const company = escapeHtml(sanitize(data.company, 200));
  const message = data.message ? escapeHtml(sanitize(data.message, MAX_MESSAGE_LENGTH)) : "";
  const projectType = projectLabels[data.project] || escapeHtml(sanitize(data.project, 100));
  const timeline = timelineLabels[data.timeline] || escapeHtml(sanitize(data.timeline, 50));

  return {
    subject: `🔔 Nouvelle demande de ${name} — ${projectType}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#9333ea,#ec4899);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #9333ea}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#9333ea,#ec4899);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#9333ea;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
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
  const name = escapeHtml(sanitize(data.name));
  const email = escapeHtml(sanitize(data.email, 255));
  const phone = escapeHtml(sanitize(data.phone, 50));
  const company = escapeHtml(sanitize(data.company, 200));

  return {
    subject: `🎯 Nouvelle réservation Offre 300€ — ${name}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #f59e0b}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#f59e0b;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
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
  const email = escapeHtml(sanitize(data.email, 255));

  return {
    subject: `📬 Nouvel abonné newsletter — ${email}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#06b6d4,#8b5cf6);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #06b6d4}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>📬 Nouvel Abonné</h1><p>Quelqu'un vient de s'inscrire à la newsletter</p></div>
<div class="content">
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildDevisEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(sanitize(data.name));
  const email = escapeHtml(sanitize(data.email, 255));
  const phone = escapeHtml(sanitize(data.phone, 50));
  const company = escapeHtml(sanitize(data.company, 200));
  const sector = escapeHtml(sanitize(data.sector, 200));
  const companyDescription = data.companyDescription ? escapeHtml(sanitize(data.companyDescription, MAX_MESSAGE_LENGTH)) : "";
  const offerName = escapeHtml(sanitize(data.offerName || data.offer, 100));
  const offerPrice = escapeHtml(sanitize(data.offerPrice || "", 20));
  const message = data.message ? escapeHtml(sanitize(data.message, MAX_MESSAGE_LENGTH)) : "";

  return {
    subject: `💼 Nouveau devis Offre Mensuelle — ${name} (${offerName})`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#8b5cf6,#ec4899);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #8b5cf6}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#8b5cf6,#ec4899);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#8b5cf6;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>💼 Nouveau Devis — Offre Mensuelle</h1><p>Un prospect souhaite souscrire à une offre !</p></div>
<div class="content">
<div class="field"><div class="field-label">Offre choisie</div><div class="field-value"><span class="badge">${offerName}${offerPrice ? ` — ${offerPrice}€/mois` : ""}</span></div></div>
<div class="field"><div class="field-label">Nom</div><div class="field-value">${name}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${phone}">${phone}</a></div></div>
<div class="field"><div class="field-label">Entreprise</div><div class="field-value">${company}</div></div>
<div class="field"><div class="field-label">Secteur d'activité</div><div class="field-value">${sector}</div></div>
${companyDescription ? `<div class="field"><div class="field-label">Description de l'activité</div><div class="field-value">${companyDescription}</div></div>` : ""}
${message ? `<div class="field"><div class="field-label">Message</div><div class="field-value">${message}</div></div>` : ""}
<div class="cta"><a href="mailto:${email}?subject=Re: Votre devis Offre ${offerName} — ConvertiLab">Contacter le prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildEstimationEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(sanitize(data.name));
  const email = escapeHtml(sanitize(data.email, 255));
  const phone = escapeHtml(sanitize(data.phone, 50));
  const company = data.company ? escapeHtml(sanitize(data.company, 200)) : "";
  const siteType = escapeHtml(sanitize(data.site_type, 100));
  const options = data.options ? escapeHtml(sanitize(data.options, 1000)) : "";
  const pageCount = data.page_count ? escapeHtml(sanitize(data.page_count, 50)) : "";
  const productCount = data.product_count ? escapeHtml(sanitize(data.product_count, 50)) : "";
  const landingObjective = data.landing_objective ? escapeHtml(sanitize(data.landing_objective, 100)) : "";
  const refonteUrl = data.refonte_url ? escapeHtml(sanitize(data.refonte_url, 500)) : "";
  const refonteReasons = data.refonte_reasons ? escapeHtml(sanitize(data.refonte_reasons, 500)) : "";
  const refonteImprovements = data.refonte_improvements ? escapeHtml(sanitize(data.refonte_improvements, 500)) : "";
  const description = data.description ? escapeHtml(sanitize(data.description, MAX_MESSAGE_LENGTH)) : "";

  const typeLabels: Record<string, string> = { vitrine: "Site vitrine", ecommerce: "Site e-commerce", landing: "Landing page", refonte: "Refonte de site" };

  return {
    subject: `📊 Nouvelle estimation de prix — ${name} (${typeLabels[data.site_type] || siteType})`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #6366f1}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#6366f1,#ec4899);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#6366f1;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>📊 Estimation de Prix</h1><p>Un prospect veut estimer le prix de son site web</p></div>
<div class="content">
<div class="field"><div class="field-label">Type de site</div><div class="field-value"><span class="badge">${typeLabels[data.site_type] || siteType}</span></div></div>
<div class="field"><div class="field-label">Nom</div><div class="field-value">${name}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${phone}">${phone}</a></div></div>
${company ? `<div class="field"><div class="field-label">Entreprise</div><div class="field-value">${company}</div></div>` : ""}
${options ? `<div class="field"><div class="field-label">Options choisies</div><div class="field-value">${options}</div></div>` : ""}
${pageCount ? `<div class="field"><div class="field-label">Nombre de pages</div><div class="field-value">${pageCount}</div></div>` : ""}
${productCount ? `<div class="field"><div class="field-label">Nombre de produits</div><div class="field-value">${productCount}</div></div>` : ""}
${landingObjective ? `<div class="field"><div class="field-label">Objectif landing page</div><div class="field-value">${landingObjective}</div></div>` : ""}
${refonteUrl ? `<div class="field"><div class="field-label">Site actuel</div><div class="field-value"><a href="${refonteUrl}">${refonteUrl}</a></div></div>` : ""}
${refonteReasons ? `<div class="field"><div class="field-label">Raisons de la refonte</div><div class="field-value">${refonteReasons}</div></div>` : ""}
${refonteImprovements ? `<div class="field"><div class="field-label">Améliorations souhaitées</div><div class="field-value">${refonteImprovements}</div></div>` : ""}
${description ? `<div class="field"><div class="field-label">Description du projet</div><div class="field-value">${description}</div></div>` : ""}
<div class="cta"><a href="mailto:${email}?subject=Re: Votre estimation de prix — ConvertiLab">Répondre au prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildMockupEmail(data: any): { subject: string; html: string } {
  const name = escapeHtml(sanitize(data.name));
  const email = escapeHtml(sanitize(data.email, 255));
  const phone = escapeHtml(sanitize(data.phone, 50));
  const siteType = escapeHtml(sanitize(data.site_type, 100));
  const sector = escapeHtml(sanitize(data.sector, 100));
  const designStyle = data.design_style ? escapeHtml(sanitize(data.design_style, 100)) : "Non spécifié";
  const currentUrl = data.current_site_url ? escapeHtml(sanitize(data.current_site_url, 500)) : "";
  const description = data.description ? escapeHtml(sanitize(data.description, MAX_MESSAGE_LENGTH)) : "";

  return {
    subject: `🎨 Nouvelle demande de maquette — ${name}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #7c3aed}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#7c3aed;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>🎨 Demande de Maquette</h1><p>Un prospect souhaite recevoir une maquette gratuite</p></div>
<div class="content">
<div class="field"><div class="field-label">Nom</div><div class="field-value">${name}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${phone}">${phone}</a></div></div>
<div class="field"><div class="field-label">Type de site</div><div class="field-value"><span class="badge">${siteType}</span></div></div>
<div class="field"><div class="field-label">Secteur</div><div class="field-value">${sector}</div></div>
<div class="field"><div class="field-label">Style visuel</div><div class="field-value">${designStyle}</div></div>
${currentUrl ? `<div class="field"><div class="field-label">Site actuel</div><div class="field-value"><a href="${currentUrl}">${currentUrl}</a></div></div>` : ""}
${description ? `<div class="field"><div class="field-label">Description</div><div class="field-value">${description}</div></div>` : ""}
<div class="cta"><a href="mailto:${email}?subject=Re: Votre demande de maquette — ConvertiLab">Répondre au prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique</div></div></body></html>`,
  };
}

function buildPromoLeadEmail(data: any): { subject: string; html: string } {
  const prenom = escapeHtml(sanitize(data.prenom, 100));
  const email = escapeHtml(sanitize(data.email, 255));
  const telephone = escapeHtml(sanitize(data.telephone, 50));
  const entreprise = data.entreprise ? escapeHtml(sanitize(data.entreprise, 200)) : "";
  const objectif = escapeHtml(sanitize(data.objectif, 100));
  const situation = escapeHtml(sanitize(data.situation, 100));
  const urgence = escapeHtml(sanitize(data.urgence, 50));

  return {
    subject: `🚀 Nouveau lead PUB Offre 300€ — ${prenom} (${urgence})`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;padding:30px;text-align:center}.header h1{font-size:22px;margin:0 0 5px}.header p{font-size:14px;opacity:.9;margin:0}.content{padding:30px}.field{margin-bottom:16px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #a78bfa}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.field-value{font-size:15px;color:#111827;font-weight:500}.badge{display:inline-block;background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600}.cta{text-align:center;margin-top:24px}.cta a{display:inline-block;background:#a78bfa;color:#fff;padding:12px 30px;border-radius:8px;text-decoration:none;font-weight:600}.footer{text-align:center;padding:20px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>🚀 Lead Publicité Offre 300€</h1><p>Un prospect vient de remplir le formulaire pub</p></div>
<div class="content">
<div class="field"><div class="field-label">Urgence</div><div class="field-value"><span class="badge">${urgence}</span></div></div>
<div class="field"><div class="field-label">Prénom</div><div class="field-value">${prenom}</div></div>
<div class="field"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div class="field-value"><a href="tel:${telephone}">${telephone}</a></div></div>
${entreprise ? `<div class="field"><div class="field-label">Entreprise / Activité</div><div class="field-value">${entreprise}</div></div>` : ""}
<div class="field"><div class="field-label">Objectif du site</div><div class="field-value">${objectif}</div></div>
<div class="field"><div class="field-label">Situation actuelle</div><div class="field-value">${situation}</div></div>
<div class="cta"><a href="mailto:${email}?subject=Re: Votre demande site web 300€ — ConvertiLab">Contacter le prospect</a></div>
</div><div class="footer">ConvertiLab — Notification automatique (campagne PUB)</div></div></body></html>`,
  };
}

function buildPromoLeadUpdateEmail(data: any): { subject: string; html: string } {
  const prenom = escapeHtml(sanitize(data.prenom, 100));
  const email = escapeHtml(sanitize(data.email, 255));
  const infos = escapeHtml(sanitize(data.infos_supp, 2000)).replace(/\n/g, "<br>");
  return {
    subject: `📝 Complément d'infos — ${prenom}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;padding:24px;text-align:center}.header h1{font-size:20px;margin:0}.content{padding:24px}.field{padding:14px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #a78bfa;white-space:pre-wrap;line-height:1.5}.meta{font-size:13px;color:#6b7280;margin-bottom:16px}.footer{text-align:center;padding:16px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>📝 Complément d'informations</h1></div>
<div class="content">
<p class="meta"><strong>${prenom}</strong> (${email}) a ajouté plus de détails sur son projet :</p>
<div class="field">${infos}</div>
</div><div class="footer">ConvertiLab — Mise à jour fiche prospect</div></div></body></html>`,
  };
}

function buildPromoAppointmentEmail(data: any): { subject: string; html: string } {
  const prenom = escapeHtml(sanitize(data.prenom, 100));
  const email = escapeHtml(sanitize(data.email, 255));
  const telephone = escapeHtml(sanitize(data.telephone, 50));
  const slotIso = sanitize(data.slot_at, 64);
  const duration = Number(data.duration_min) || 15;
  let slotLabel = slotIso;
  try {
    const d = new Date(slotIso);
    slotLabel = d.toLocaleString("fr-FR", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Paris" });
  } catch { /* ignore */ }
  slotLabel = escapeHtml(slotLabel);
  return {
    subject: `📅 Nouveau RDV — ${prenom} — ${slotLabel}`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>body{font-family:-apple-system,sans-serif;background:#f3f4f6;padding:20px;margin:0;color:#1f2937}.container{max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1)}.header{background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;padding:28px;text-align:center}.header h1{font-size:22px;margin:0}.content{padding:24px}.slot{background:linear-gradient(135deg,#a78bfa,#ec4899);color:#fff;padding:20px;border-radius:12px;text-align:center;font-size:18px;font-weight:700;margin-bottom:18px}.field{margin-bottom:12px;padding:12px 16px;background:#f9fafb;border-radius:10px;border-left:4px solid #a78bfa}.field-label{font-size:11px;text-transform:uppercase;color:#6b7280;font-weight:700;letter-spacing:.5px;margin-bottom:4px}.footer{text-align:center;padding:16px;color:#9ca3af;font-size:12px}</style></head><body><div class="container">
<div class="header"><h1>📅 Nouveau rendez-vous</h1></div>
<div class="content">
<div class="slot">${slotLabel}<br><span style="font-size:13px;opacity:.9;font-weight:500">Durée : ${duration} min</span></div>
<div class="field"><div class="field-label">Prénom</div><div>${prenom}</div></div>
<div class="field"><div class="field-label">Email</div><div><a href="mailto:${email}">${email}</a></div></div>
<div class="field"><div class="field-label">Téléphone</div><div><a href="tel:${telephone}">${telephone}</a></div></div>
</div><div class="footer">ConvertiLab — Prise de RDV automatique</div></div></body></html>`,
  };
}



Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // --- Persistent DB-backed rate limiting ---
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") || "unknown";

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: allowed, error: rlError } = await supabaseAdmin.rpc("check_rate_limit", {
      p_ip: clientIp,
      p_endpoint: "notify-contact",
      p_max_requests: 5,
      p_window_minutes: 10,
    });

    if (rlError || !allowed) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await req.json();
    const formType: string = data.type || "contact";

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = sanitize(data.email, 255);
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let emailContent: { subject: string; html: string };

    switch (formType) {
      case "devis":
        if (!sanitize(data.name) || !sanitize(data.phone, 50) || !sanitize(data.sector, 200)) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildDevisEmail(data);
        break;

      case "estimation":
        if (!sanitize(data.name) || !sanitize(data.phone, 50) || !sanitize(data.site_type, 100)) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildEstimationEmail(data);
        break;

      case "mockup":
        if (!sanitize(data.name) || !sanitize(data.phone, 50) || !sanitize(data.site_type, 100) || !sanitize(data.sector, 100)) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildMockupEmail(data);
        break;

      case "offer":
        if (!sanitize(data.name) || !sanitize(data.phone, 50)) {
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

      case "promo_lead":
        if (!sanitize(data.prenom, 100) || !sanitize(data.telephone, 50) || !sanitize(data.objectif, 100) || !sanitize(data.situation, 100) || !sanitize(data.urgence, 50)) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildPromoLeadEmail(data);
        break;

      case "promo_lead_update": {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const leadId = sanitize(data.id, 64);
        const infos = sanitize(data.infos_supp, 2000);
        if (!uuidRegex.test(leadId) || !infos) {
          return new Response(
            JSON.stringify({ error: "Missing or invalid fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const { error: updErr } = await supabaseAdmin
          .from("promo_leads")
          .update({ infos_supp: infos })
          .eq("id", leadId);
        if (updErr) {
          console.error("promo_lead update error:", updErr);
          return new Response(
            JSON.stringify({ error: "Update failed" }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildPromoLeadUpdateEmail(data);
        break;
      }

      case "promo_appointment": {
        const prenom = sanitize(data.prenom, 100);
        const telephone = sanitize(data.telephone, 50);
        const slotIso = sanitize(data.slot_at, 64);
        const duration = Number(data.duration_min) || 15;
        const leadId = sanitize(data.lead_id, 64);
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        const slotDate = new Date(slotIso);
        if (!prenom || !telephone || !slotIso || isNaN(slotDate.getTime()) || slotDate.getTime() < Date.now() - 60_000) {
          return new Response(
            JSON.stringify({ error: "Missing or invalid appointment fields" }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        const { error: insErr } = await supabaseAdmin
          .from("promo_appointments")
          .insert({
            lead_id: leadId && uuidRegex.test(leadId) ? leadId : null,
            slot_at: slotDate.toISOString(),
            duration_min: duration,
            prenom,
            email,
            telephone,
            status: "pending",
          });
        if (insErr) {
          console.error("promo_appointment insert error:", insErr);
          return new Response(
            JSON.stringify({ error: "Booking failed" }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
        emailContent = buildPromoAppointmentEmail({ ...data, slot_at: slotDate.toISOString() });
        break;
      }



      case "contact":
      default:
        if (!sanitize(data.name) || !sanitize(data.company, 200) || !sanitize(data.phone, 50) || !sanitize(data.project, 100)) {
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
        JSON.stringify({ success: false, error: "Service temporarily unavailable" }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: "Service temporarily unavailable" }),
      { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
