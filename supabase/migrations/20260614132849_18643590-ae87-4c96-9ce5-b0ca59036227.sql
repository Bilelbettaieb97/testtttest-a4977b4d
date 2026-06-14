CREATE TABLE public.promo_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  objectif TEXT NOT NULL,
  situation TEXT NOT NULL,
  urgence TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT NOT NULL,
  entreprise TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT promo_leads_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT promo_leads_prenom_len CHECK (char_length(prenom) BETWEEN 1 AND 100),
  CONSTRAINT promo_leads_tel_len CHECK (char_length(telephone) BETWEEN 5 AND 30)
);

GRANT INSERT ON public.promo_leads TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.promo_leads TO authenticated;
GRANT ALL ON public.promo_leads TO service_role;

ALTER TABLE public.promo_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert promo leads"
  ON public.promo_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view promo leads"
  ON public.promo_leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_promo_leads_updated_at
  BEFORE UPDATE ON public.promo_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();