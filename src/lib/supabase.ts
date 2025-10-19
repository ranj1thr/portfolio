import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  short_description: string;
  technologies: string[];
  project_url?: string;
  github_url?: string;
  image_url?: string;
  category: string;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'work' | 'education';
  location?: string;
  start_date: string;
  end_date?: string;
  current: boolean;
  description: string;
  achievements: string[];
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
