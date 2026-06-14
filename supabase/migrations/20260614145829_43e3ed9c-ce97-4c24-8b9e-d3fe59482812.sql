CREATE TABLE public.promo_appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.promo_leads(id) ON DELETE SET NULL,
  slot_at TIMESTAMPTZ NOT NULL,
  duration_min INTEGER NOT NULL DEFAULT 15,
  prenom TEXT NOT NULL CHECK (char_length(prenom) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  telephone TEXT NOT NULL CHECK (char_length(telephone) BETWEEN 5 AND 30),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.promo_appointments TO anon, authenticated;
GRANT ALL ON public.promo_appointments TO service_role;

ALTER TABLE public.promo_appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create appointments"
ON public.promo_appointments
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE TRIGGER update_promo_appointments_updated_at
BEFORE UPDATE ON public.promo_appointments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_promo_appointments_slot ON public.promo_appointments(slot_at);