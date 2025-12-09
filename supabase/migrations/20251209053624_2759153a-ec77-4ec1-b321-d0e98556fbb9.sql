-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view submissions (for admin)
CREATE POLICY "Authenticated users can view contacts"
ON public.contacts
FOR SELECT
USING (auth.uid() IS NOT NULL);