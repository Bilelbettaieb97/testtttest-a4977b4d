import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

// Temporary workaround for environment variables not loading
// Using direct values until Lovable Cloud syncs properly
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hoaofayagbbhenktvchh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYW9mYXlhZ2JiaGVua3R2Y2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNDgwNTcsImV4cCI6MjA3OTcyNDA1N30.lXlopcal0g1-wAQ8eUcx7TDcjnU6JhFqlP-WFPYmzJQ";

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
