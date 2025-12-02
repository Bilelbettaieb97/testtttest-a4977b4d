-- Create table for offer reservations
CREATE TABLE public.offer_reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.offer_reservations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can reserve)
CREATE POLICY "Anyone can reserve a spot"
ON public.offer_reservations
FOR INSERT
WITH CHECK (true);

-- Allow public read for counting spots
CREATE POLICY "Anyone can view reservations count"
ON public.offer_reservations
FOR SELECT
USING (true);

-- Enable realtime for live counter updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.offer_reservations;