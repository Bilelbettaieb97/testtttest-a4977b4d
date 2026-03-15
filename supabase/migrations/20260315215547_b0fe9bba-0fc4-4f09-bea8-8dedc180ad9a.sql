CREATE POLICY "Allow authenticated submissions"
ON public.contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);