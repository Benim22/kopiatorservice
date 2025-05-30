'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabaseClient'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        throw signInError
      }

      // Hämta användarens profil för att kolla roll
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        console.log("AUTH USER: Attempting to fetch profile for user ID:", user.id);
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()

        if (profileError) {
          console.error('Error fetching profile (raw):', profileError)
          console.error('Error fetching profile (stringified):', JSON.stringify(profileError))
          if (profileError && typeof profileError === 'object' && 'message' in profileError) {
            console.error('Error message from profileError:', profileError.message);
          }
          throw new Error("Kunde inte verifiera användarroll.")
        }

        if (profile && profile.role === 'admin') {
          router.push('/admin/dashboard')
        } else {
          await supabase.auth.signOut() // Logga ut om inte admin
          setError('Åtkomst nekad. Endast administratörer.')
        }
      } else {
        setError('Kunde inte hämta användarinformation.')
      }
    } catch (err: any) {
      console.error("Login error:", err)
      setError(err.message || 'Ett fel inträffade vid inloggning.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#003366]">Admininloggning</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-postadress
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full"
              placeholder="din@epost.se"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Lösenord
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#003366] hover:bg-[#002244]"
            >
              {loading ? 'Loggar in...' : 'Logga in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 