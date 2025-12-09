import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { portfolioData as defaultData } from '@/data/portfolio-data';

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    phone: string;
    email: string;
    location: string;
    languages: string[];
    dob: string;
  };
  objective: string;
  skills: { name: string; category: string }[];
  education: {
    degree: string;
    institution: string;
    university: string;
    year: string;
    score: string;
  }[];
  activities: string[];
  achievements: string[];
  strengths: string[];
  hobbies: string[];
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    whatsapp?: string;
  };
}

interface PortfolioContextType {
  data: PortfolioData;
  loading: boolean;
  updateContent: (content: PortfolioData) => Promise<{ error: Error | null }>;
  refetch: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PortfolioData>(defaultData as PortfolioData);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const { data: result, error } = await supabase
        .from('portfolio_content')
        .select('content')
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('Error fetching portfolio content:', error);
        return;
      }

      if (result?.content) {
        setData(result.content as unknown as PortfolioData);
      }
    } catch (err) {
      console.error('Error fetching portfolio content:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const updateContent = async (content: PortfolioData) => {
    try {
      // First check if there's an existing record
      const { data: existing } = await supabase
        .from('portfolio_content')
        .select('id')
        .limit(1)
        .maybeSingle();

      let error;
      if (existing?.id) {
        const result = await supabase
          .from('portfolio_content')
          .update({ 
            content: JSON.parse(JSON.stringify(content)),
            updated_at: new Date().toISOString()
          })
          .eq('id', existing.id);
        error = result.error;
      } else {
        const result = await supabase
          .from('portfolio_content')
          .insert([{ content: JSON.parse(JSON.stringify(content)) }]);
        error = result.error;
      }

      if (!error) {
        setData(content);
      }

      return { error: error as Error | null };
    } catch (err) {
      return { error: err as Error };
    }
  };

  return (
    <PortfolioContext.Provider value={{ data, loading, updateContent, refetch: fetchContent }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
