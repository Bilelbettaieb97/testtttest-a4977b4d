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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const adminPassword = Deno.env.get('ADMIN_PASSWORD')

    // Get password from request body
    const { password } = await req.json()

    if (!password) {
      console.log('No password provided')
      return new Response(
        JSON.stringify({ error: 'Mot de passe requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Verify password
    if (password !== adminPassword) {
      console.log('Invalid password')
      return new Response(
        JSON.stringify({ error: 'Mot de passe incorrect' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Admin password verified')

    // Create service client to bypass RLS
    const supabaseService = createClient(supabaseUrl, supabaseServiceKey)

    // Fetch all data from the tables
    const [contactsResult, newsletterResult, offersResult] = await Promise.all([
      supabaseService
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false }),
      supabaseService
        .from('newsletter_subscriptions')
        .select('*')
        .order('created_at', { ascending: false }),
      supabaseService
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
