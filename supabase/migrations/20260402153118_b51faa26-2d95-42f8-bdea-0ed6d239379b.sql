
CREATE TABLE public.price_estimations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  site_type TEXT NOT NULL,
  options TEXT[] DEFAULT '{}',
  page_count TEXT,
  product_count TEXT,
  landing_objective TEXT,
  refonte_url TEXT,
  refonte_reasons TEXT[] DEFAULT '{}',
  refonte_improvements TEXT[] DEFAULT '{}',
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  description TEXT
);

ALTER TABLE public.price_estimations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert price estimations"
ON public.price_estimations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Only admins can view price estimations"
ON public.price_estimations
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
