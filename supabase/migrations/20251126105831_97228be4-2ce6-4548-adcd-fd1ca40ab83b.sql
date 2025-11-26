-- Create a function to send confirmation email via edge function
CREATE OR REPLACE FUNCTION public.trigger_confirmation_email()
RETURNS TRIGGER AS $$
DECLARE
  function_url TEXT;
  request_id BIGINT;
BEGIN
  -- Get the Supabase URL from environment
  function_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/send-confirmation-email';
  
  -- Call the edge function asynchronously using pg_net
  SELECT net.http_post(
    url := 'https://hoaofayagbbhenktvchh.supabase.co/functions/v1/send-confirmation-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.supabase_anon_key', true)
    ),
    body := jsonb_build_object('email', NEW.email)
  ) INTO request_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to send email on new subscription
DROP TRIGGER IF EXISTS send_confirmation_email_trigger ON public.newsletter_subscriptions;
CREATE TRIGGER send_confirmation_email_trigger
  AFTER INSERT ON public.newsletter_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_confirmation_email();