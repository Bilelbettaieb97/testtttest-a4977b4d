import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { password } = await req.json()
    
    // Verify admin password
    const adminPassword = Deno.env.get('ADMIN_PASSWORD')
    if (!adminPassword || password !== adminPassword) {
      console.log('Invalid admin password attempt')
      return new Response(
        JSON.stringify({ error: 'Mot de passe incorrect' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with service role key to bypass RLS
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Fetching admin data...')

    // Fetch all data from the 3 tables
    const [contactsResult, newsletterResult, offersResult] = await Promise.all([
      supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false }),
      supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('created_at', { ascending: false }),
      supabase
        .from('offer_reservations')
        .select('*')
        .order('created_at', { ascending: false })
    ])

    if (contactsResult.error) {
      console.error('Error fetching contacts:', contactsResult.error)
    }
    if (newsletterResult.error) {
      console.error('Error fetching newsletter:', newsletterResult.error)
    }
    if (offersResult.error) {
      console.error('Error fetching offers:', offersResult.error)
    }

    const data = {
      contacts: contactsResult.data || [],
      newsletter: newsletterResult.data || [],
      offers: offersResult.data || []
    }

    console.log(`Fetched: ${data.contacts.length} contacts, ${data.newsletter.length} newsletter, ${data.offers.length} offers`)

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in get-admin-data:', error)
    return new Response(
      JSON.stringify({ error: 'Erreur serveur' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
