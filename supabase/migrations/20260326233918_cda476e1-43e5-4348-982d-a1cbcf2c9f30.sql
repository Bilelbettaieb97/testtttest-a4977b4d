CREATE TABLE public.mockup_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  current_site_url text,
  sector text NOT NULL,
  site_type text NOT NULL,
  description text,
  status text DEFAULT 'new',
  CONSTRAINT chk_mockup_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  CONSTRAINT chk_mockup_email_length CHECK (length(email) <= 255),
  CONSTRAINT chk_mockup_name_length CHECK (length(name) <= 200),
  CONSTRAINT chk_mockup_phone_length CHECK (length(phone) <= 50)
);

ALTER TABLE public.mockup_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous mockup requests" ON public.mockup_requests FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow authenticated mockup requests" ON public.mockup_requests FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admins can view mockup requests" ON public.mockup_requests FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));