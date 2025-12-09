-- Allow authenticated users to delete contacts
CREATE POLICY "Authenticated users can delete contacts"
ON public.contacts
FOR DELETE
USING (auth.uid() IS NOT NULL);