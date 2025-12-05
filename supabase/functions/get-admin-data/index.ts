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
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.log('No authorization header provided')
      return new Response(
        JSON.stringify({ error: 'Non autorisé - Veuillez vous connecter' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create a client with the user's token to verify authentication
    const supabaseUser = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: { Authorization: authHeader }
      }
    })

    // Get the authenticated user
    const { data: { user }, error: userError } = await supabaseUser.auth.getUser()
    
    if (userError || !user) {
      console.log('Authentication failed:', userError?.message)
      return new Response(
        JSON.stringify({ error: 'Non autorisé - Session invalide' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`User authenticated: ${user.id}`)

    // Check if user has admin role using service client (to bypass RLS)
    const supabaseService = createClient(supabaseUrl, supabaseServiceKey)
    
    const { data: roleData, error: roleError } = await supabaseService
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single()

    if (roleError || !roleData) {
      console.log(`User ${user.id} is not an admin`)
      return new Response(
        JSON.stringify({ error: 'Accès refusé - Vous n\'êtes pas administrateur' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Admin access verified for user: ${user.id}`)

    // Fetch all data from the tables using service client
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
