-- Add CHECK constraints for input validation on contact_submissions
ALTER TABLE contact_submissions
  ADD CONSTRAINT contact_name_length CHECK (char_length(name) <= 200),
  ADD CONSTRAINT contact_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT contact_phone_length CHECK (char_length(phone) <= 50),
  ADD CONSTRAINT contact_company_length CHECK (char_length(company) <= 200),
  ADD CONSTRAINT contact_project_length CHECK (char_length(project) <= 500),
  ADD CONSTRAINT contact_budget_length CHECK (char_length(budget) <= 100),
  ADD CONSTRAINT contact_main_challenge_length CHECK (char_length(main_challenge) <= 500),
  ADD CONSTRAINT contact_timeline_length CHECK (char_length(timeline) <= 100),
  ADD CONSTRAINT contact_message_length CHECK (char_length(message) <= 5000),
  ADD CONSTRAINT contact_urgency_length CHECK (char_length(urgency) <= 100);

-- Add CHECK constraints for newsletter_subscriptions
ALTER TABLE newsletter_subscriptions
  ADD CONSTRAINT newsletter_email_length CHECK (char_length(email) <= 255);

-- Add CHECK constraints for offer_reservations
ALTER TABLE offer_reservations
  ADD CONSTRAINT offer_name_length CHECK (char_length(name) <= 200),
  ADD CONSTRAINT offer_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT offer_phone_length CHECK (char_length(phone) <= 50),
  ADD CONSTRAINT offer_company_length CHECK (char_length(company) <= 200);

-- Add CHECK constraints for chat tables
ALTER TABLE chat_conversations
  ADD CONSTRAINT chat_first_message_length CHECK (char_length(first_message) <= 1000),
  ADD CONSTRAINT chat_user_agent_length CHECK (char_length(user_agent) <= 500),
  ADD CONSTRAINT chat_session_id_length CHECK (char_length(session_id) <= 100),
  ADD CONSTRAINT chat_status_length CHECK (char_length(status) <= 50);

ALTER TABLE chat_messages
  ADD CONSTRAINT message_content_length CHECK (char_length(content) <= 10000),
  ADD CONSTRAINT message_role_length CHECK (char_length(role) <= 50);