CREATE POLICY "Allow authenticated newsletter subscriptions"
ON public.newsletter_subscriptions
FOR INSERT
TO authenticated
WITH CHECK (true);