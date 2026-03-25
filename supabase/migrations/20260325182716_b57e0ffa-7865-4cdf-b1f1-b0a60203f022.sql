-- Add CHECK constraints for email format and field lengths

-- newsletter_subscriptions: email format + length
ALTER TABLE public.newsletter_subscriptions
  ADD CONSTRAINT chk_newsletter_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT chk_newsletter_email_length CHECK (length(email) <= 255);

-- contact_submissions: email format + field lengths
ALTER TABLE public.contact_submissions
  ADD CONSTRAINT chk_contact_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT chk_contact_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT chk_contact_name_length CHECK (length(name) <= 200),
  ADD CONSTRAINT chk_contact_company_length CHECK (length(company) <= 200),
  ADD CONSTRAINT chk_contact_phone_length CHECK (length(phone) <= 50),
  ADD CONSTRAINT chk_contact_message_length CHECK (length(message) <= 5000),
  ADD CONSTRAINT chk_contact_project_length CHECK (length(project) <= 100);

-- offer_reservations: email format + field lengths
ALTER TABLE public.offer_reservations
  ADD CONSTRAINT chk_offer_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT chk_offer_email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT chk_offer_name_length CHECK (length(name) <= 200),
  ADD CONSTRAINT chk_offer_phone_length CHECK (length(phone) <= 50),
  ADD CONSTRAINT chk_offer_company_length CHECK (length(company) <= 200);

-- chat_messages: content length limit
ALTER TABLE public.chat_messages
  ADD CONSTRAINT chk_chat_message_length CHECK (length(content) <= 5000);

-- chat_conversations: field length limits
ALTER TABLE public.chat_conversations
  ADD CONSTRAINT chk_chat_session_id_length CHECK (length(session_id) <= 255),
  ADD CONSTRAINT chk_chat_user_agent_length CHECK (length(user_agent) <= 500),
  ADD CONSTRAINT chk_chat_first_message_length CHECK (length(first_message) <= 5000);

-- Create rate_limit_log table for persistent rate limiting
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  endpoint text NOT NULL DEFAULT 'notify-contact',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_rate_limit_ip_time ON public.rate_limit_log (ip_address, created_at DESC);

ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

-- Function for persistent rate limiting
CREATE OR REPLACE FUNCTION public.check_rate_limit(p_ip text, p_endpoint text, p_max_requests int, p_window_minutes int)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  request_count int;
BEGIN
  DELETE FROM public.rate_limit_log WHERE created_at < now() - interval '1 hour';
  
  SELECT count(*) INTO request_count
  FROM public.rate_limit_log
  WHERE ip_address = p_ip 
    AND endpoint = p_endpoint
    AND created_at > now() - (p_window_minutes || ' minutes')::interval;
  
  IF request_count >= p_max_requests THEN
    RETURN false;
  END IF;
  
  INSERT INTO public.rate_limit_log (ip_address, endpoint) VALUES (p_ip, p_endpoint);
  RETURN true;
END;
$$;