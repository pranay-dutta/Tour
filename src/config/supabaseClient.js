import { createClient } from '@supabase/supabase-js'

/* Created Supabase Client */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
