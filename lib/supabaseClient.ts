import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Ensure your environment variables are correctly named and accessible
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or Anon Key is missing. Check your .env file.")
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
} 