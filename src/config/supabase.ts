import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          company?: string
          phone?: string
          message: string
          status: 'new' | 'contacted' | 'resolved'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          company?: string
          phone?: string
          message: string
          status?: 'new' | 'contacted' | 'resolved'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          company?: string
          phone?: string
          message?: string
          status?: 'new' | 'contacted' | 'resolved'
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          email: string
          subscribed: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          subscribed?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          subscribed?: boolean
        }
      }
    }
  }
}