-- Create app_role enum type
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy for user_roles: users can view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- RLS policy for user_roles: only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix offer_reservations: Remove public SELECT, add admin-only SELECT
DROP POLICY IF EXISTS "Anyone can view reservations count" ON public.offer_reservations;

CREATE POLICY "Admins can view reservations"
ON public.offer_reservations
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix contact_submissions: Add admin-only SELECT
CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix newsletter_subscriptions: Add admin-only SELECT
CREATE POLICY "Admins can view newsletter subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix chat tables: Remove public SELECT, keep admin-only
DROP POLICY IF EXISTS "Allow anonymous read conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Admins can read conversations" ON public.chat_conversations;

CREATE POLICY "Admins can read conversations"
ON public.chat_conversations
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Allow anonymous read messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Admins can read messages" ON public.chat_messages;

CREATE POLICY "Admins can read messages"
ON public.chat_messages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));