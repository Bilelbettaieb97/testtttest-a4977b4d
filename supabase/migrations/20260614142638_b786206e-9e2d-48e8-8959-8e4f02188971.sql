ALTER TABLE public.promo_leads ADD COLUMN IF NOT EXISTS secteur text;
ALTER TABLE public.promo_leads DROP CONSTRAINT IF EXISTS promo_leads_secteur_len;
ALTER TABLE public.promo_leads ADD CONSTRAINT promo_leads_secteur_len CHECK (secteur IS NULL OR char_length(secteur) <= 60);