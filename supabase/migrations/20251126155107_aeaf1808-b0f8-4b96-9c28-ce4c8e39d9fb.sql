-- Permettre aux utilisateurs anonymes de lire les conversations
CREATE POLICY "Allow anonymous read conversations" 
ON public.chat_conversations FOR SELECT 
TO anon USING (true);

-- Permettre aux utilisateurs anonymes de lire les messages
CREATE POLICY "Allow anonymous read messages" 
ON public.chat_messages FOR SELECT 
TO anon USING (true);