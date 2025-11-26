-- Disable automatic confirmation email sending
DROP TRIGGER IF EXISTS send_confirmation_email_trigger ON public.newsletter_subscriptions;
DROP FUNCTION IF EXISTS public.trigger_confirmation_email();