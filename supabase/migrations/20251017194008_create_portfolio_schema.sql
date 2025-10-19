/*
  # Personal Portfolio Database Schema

  ## Overview
  Creates the complete database structure for a personal portfolio website with projects,
  professional experience, and contact form submissions.

  ## New Tables

  ### 1. projects
  Stores portfolio projects and tools showcased on the website.
  - `id` (uuid, primary key) - Unique identifier for each project
  - `title` (text) - Project name or title
  - `description` (text) - Detailed project description
  - `short_description` (text) - Brief summary for card display
  - `technologies` (text[]) - Array of technologies/tools used
  - `project_url` (text, optional) - Live project URL
  - `github_url` (text, optional) - GitHub repository URL
  - `image_url` (text, optional) - Project screenshot or logo
  - `category` (text) - Project category (e.g., 'automation', 'web-app', 'tool')
  - `featured` (boolean) - Whether to highlight this project
  - `display_order` (integer) - Sort order for display
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. experience
  Stores professional work experience and education history.
  - `id` (uuid, primary key) - Unique identifier
  - `company` (text) - Company or institution name
  - `role` (text) - Job title or degree
  - `type` (text) - 'work' or 'education'
  - `location` (text, optional) - City/country
  - `start_date` (date) - Start date
  - `end_date` (date, optional) - End date (null for current positions)
  - `current` (boolean) - Whether this is a current position
  - `description` (text) - Role description or summary
  - `achievements` (text[]) - Array of key achievements or responsibilities
  - `display_order` (integer) - Sort order for display
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. contact_submissions
  Stores messages submitted through the contact form.
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email address
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `read` (boolean) - Whether the message has been read
  - `created_at` (timestamptz) - Submission timestamp

  ## Security

  ### Row Level Security (RLS)
  All tables have RLS enabled to protect data.

  ### Public Read Access
  - projects: Public can read all projects
  - experience: Public can read all experience entries

  ### Protected Write Access
  - projects: No public insert/update/delete (admin only via service role)
  - experience: No public insert/update/delete (admin only via service role)
  - contact_submissions: Public can insert only (no read/update/delete)

  ## Indexes
  - projects: indexed on display_order and featured for fast queries
  - experience: indexed on display_order and start_date for timeline sorting
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  project_url text,
  github_url text,
  image_url text,
  category text NOT NULL DEFAULT 'general',
  featured boolean NOT NULL DEFAULT false,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  role text NOT NULL,
  type text NOT NULL DEFAULT 'work',
  location text,
  start_date date NOT NULL,
  end_date date,
  current boolean NOT NULL DEFAULT false,
  description text NOT NULL,
  achievements text[] NOT NULL DEFAULT '{}',
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Projects policies: Public read access
CREATE POLICY "Public can view all projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Experience policies: Public read access
CREATE POLICY "Public can view all experience"
  ON experience FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact submissions policies: Public can submit
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_experience_display_order ON experience(display_order);
CREATE INDEX IF NOT EXISTS idx_experience_start_date ON experience(start_date DESC);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_experience_updated_at ON experience;
CREATE TRIGGER update_experience_updated_at
  BEFORE UPDATE ON experience
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();