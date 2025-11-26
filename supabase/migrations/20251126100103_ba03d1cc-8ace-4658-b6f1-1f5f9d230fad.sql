-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  project TEXT NOT NULL,
  main_challenge TEXT NOT NULL,
  message TEXT,
  urgency TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous submissions
CREATE POLICY "Allow anonymous submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);