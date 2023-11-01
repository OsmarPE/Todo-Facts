import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjveyioqmdhfdwbhusvw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdmV5aW9xbWRoZmR3Ymh1c3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NjU0NTEsImV4cCI6MjAxNDM0MTQ1MX0.RImMJ1tDVenGO1-QDBrNPBD0ixhZYjWzBJDmXwsyiUE'
export const supabase = createClient(supabaseUrl, supabaseKey)