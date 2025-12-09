-- Create portfolio_content table to store editable website content
CREATE TABLE public.portfolio_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read the content (public website)
CREATE POLICY "Anyone can read portfolio content"
ON public.portfolio_content
FOR SELECT
USING (true);

-- Only authenticated users can update content
CREATE POLICY "Authenticated users can update portfolio content"
ON public.portfolio_content
FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Only authenticated users can insert content
CREATE POLICY "Authenticated users can insert portfolio content"
ON public.portfolio_content
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Insert default content
INSERT INTO public.portfolio_content (content) VALUES ('{
  "personal": {
    "name": "Vishruth N. Koppal",
    "title": "MBA Student | Marketing & Management",
    "tagline": "Driven by ambition, fueled by learning",
    "phone": "+91 8088748133",
    "email": "vishpandu000@gmail.com",
    "location": "Mysuru, Karnataka, India",
    "languages": ["English", "Kannada", "Hindi", "Telugu"],
    "dob": "16-MAR-2002"
  },
  "objective": "Motivated MBA student specializing in Management and Marketing, seeking an opportunity in the retail/marketing sector to apply academic knowledge, communication skills, and customer interaction experience. Looking for a professional environment that allows learning, growth, and contribution to organizational goals with dedication and adaptability.",
  "skills": [
    {"name": "Retail Operations", "category": "Business"},
    {"name": "Customer Interaction & Relationship Management", "category": "Business"},
    {"name": "Sales & Marketing", "category": "Business"},
    {"name": "Marketing Analytics", "category": "Business"},
    {"name": "Tally – ERP 9", "category": "Technical"},
    {"name": "MS Office – Word, Excel, PowerPoint", "category": "Technical"},
    {"name": "Teamwork & Communication", "category": "Soft Skills"},
    {"name": "Time Management & Problem Solving", "category": "Soft Skills"}
  ],
  "education": [
    {"degree": "MBA (Pursuing)", "institution": "Kousali Institute of Management Studies, Dharwad", "university": "Karnataka University", "year": "Pursuing", "score": "—"},
    {"degree": "B. Com", "institution": "MVP''s Mahanta Swamy Arts, Science and Commerce College, Haunsabhavi", "university": "Karnataka University", "year": "2023-2024", "score": "7.73 CGPA"},
    {"degree": "2nd PUC (Commerce)", "institution": "Manasarowara PU College, Mysuru", "university": "Karnataka State Board", "year": "2020-2021", "score": "50.33%"},
    {"degree": "SSLC", "institution": "Sri Ramakunjeshwara English Medium High School", "university": "Karnataka State Board", "year": "2017-2018", "score": "83.52%"}
  ],
  "activities": [
    "Participated in academic trade fairs and project presentations",
    "Involved in organizing college-level events and activities",
    "Exposure to customer handling and sales environments",
    "Good communication and teamwork experience"
  ],
  "achievements": [
    "Active participation in college programs, marketing-related activities, and surveys",
    "Coordinated and assisted in event arrangements in college",
    "Developed leadership and public interaction skills through student participation",
    "Gained confidence in customer communication through practical exposure"
  ],
  "strengths": [
    "Self-motivated and quick learner",
    "Ability to work individually or as part of a team",
    "Positive attitude and adaptable nature",
    "Good communication and presentation skills",
    "Can handle busy and challenging environments",
    "Problem solving in every possible situation"
  ],
  "hobbies": ["Photo Editing", "Video Editing and Making", "Searching new things about AI"],
  "socialLinks": {
    "twitter": "https://twitter.com",
    "instagram": "https://instagram.com",
    "facebook": "https://facebook.com",
    "linkedin": "https://linkedin.com",
    "github": "https://github.com",
    "whatsapp": "+918088748133"
  }
}'::jsonb);