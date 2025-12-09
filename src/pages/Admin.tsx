import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, LogOut, Loader2, Save, Plus, Trash2, User, Briefcase, GraduationCap, Activity, Mail } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { usePortfolio, PortfolioData } from '@/hooks/usePortfolio';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { AnimatedBackground } from '@/components/AnimatedBackground';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoadingContacts, setIsLoadingContacts] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editedData, setEditedData] = useState<PortfolioData | null>(null);
  
  const { user, loading: authLoading, signOut } = useAuth();
  const { data: portfolioData, loading: portfolioLoading, updateContent } = usePortfolio();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!portfolioLoading && portfolioData) {
      setEditedData(portfolioData);
    }
  }, [portfolioData, portfolioLoading]);

  const fetchContacts = async () => {
    setIsLoadingContacts(true);
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) {
      setContacts(data || []);
    }
    setIsLoadingContacts(false);
  };

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const handleSave = async () => {
    if (!editedData) return;
    
    setIsSaving(true);
    const { error } = await updateContent(editedData);
    
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to save changes',
      });
    } else {
      toast({
        title: 'Saved!',
        description: 'Your changes have been saved successfully',
      });
    }
    setIsSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const updatePersonal = (field: string, value: string) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      personal: { ...editedData.personal, [field]: value }
    });
  };

  const updateLanguages = (value: string) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      personal: { ...editedData.personal, languages: value.split(',').map(l => l.trim()) }
    });
  };

  const updateSkill = (index: number, field: 'name' | 'category', value: string) => {
    if (!editedData) return;
    const skills = [...editedData.skills];
    skills[index] = { ...skills[index], [field]: value };
    setEditedData({ ...editedData, skills });
  };

  const addSkill = () => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      skills: [...editedData.skills, { name: '', category: 'Business' }]
    });
  };

  const removeSkill = (index: number) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      skills: editedData.skills.filter((_, i) => i !== index)
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    if (!editedData) return;
    const education = [...editedData.education];
    education[index] = { ...education[index], [field]: value };
    setEditedData({ ...editedData, education });
  };

  const addEducation = () => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      education: [...editedData.education, { degree: '', institution: '', university: '', year: '', score: '' }]
    });
  };

  const removeEducation = (index: number) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      education: editedData.education.filter((_, i) => i !== index)
    });
  };

  const updateListItem = (listName: 'activities' | 'achievements' | 'strengths' | 'hobbies', index: number, value: string) => {
    if (!editedData) return;
    const list = [...editedData[listName]];
    list[index] = value;
    setEditedData({ ...editedData, [listName]: list });
  };

  const addListItem = (listName: 'activities' | 'achievements' | 'strengths' | 'hobbies') => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      [listName]: [...editedData[listName], '']
    });
  };

  const removeListItem = (listName: 'activities' | 'achievements' | 'strengths' | 'hobbies', index: number) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      [listName]: editedData[listName].filter((_, i) => i !== index)
    });
  };

  const updateSocialLink = (platform: string, value: string) => {
    if (!editedData) return;
    setEditedData({
      ...editedData,
      socialLinks: { ...editedData.socialLinks, [platform]: value }
    });
  };

  if (authLoading || !user || portfolioLoading || !editedData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="border-b border-border/30 bg-card/40 backdrop-blur-xl sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <h1 className="text-xl font-semibold gradient-text">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="btn-primary"
              >
                {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                <span className="hidden sm:inline ml-2">Save Changes</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 bg-card/40 p-2 rounded-xl mb-8">
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Activities</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Social</span>
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Contacts</span>
              </TabsTrigger>
            </TabsList>

            {/* Personal Tab */}
            <TabsContent value="personal">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass p-6 space-y-6"
              >
                <h2 className="text-lg font-semibold text-foreground">Personal Information</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      value={editedData.personal.name}
                      onChange={(e) => updatePersonal('name', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={editedData.personal.title}
                      onChange={(e) => updatePersonal('title', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Tagline</Label>
                    <Input
                      value={editedData.personal.tagline}
                      onChange={(e) => updatePersonal('tagline', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      value={editedData.personal.email}
                      onChange={(e) => updatePersonal('email', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input
                      value={editedData.personal.phone}
                      onChange={(e) => updatePersonal('phone', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input
                      value={editedData.personal.location}
                      onChange={(e) => updatePersonal('location', e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Languages (comma-separated)</Label>
                    <Input
                      value={editedData.personal.languages.join(', ')}
                      onChange={(e) => updateLanguages(e.target.value)}
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Career Objective</Label>
                  <Textarea
                    value={editedData.objective}
                    onChange={(e) => setEditedData({ ...editedData, objective: e.target.value })}
                    className="bg-secondary/50 min-h-[120px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Strengths</Label>
                    <Button size="sm" variant="ghost" onClick={() => addListItem('strengths')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {editedData.strengths.map((strength, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={strength}
                        onChange={(e) => updateListItem('strengths', index, e.target.value)}
                        className="bg-secondary/50"
                      />
                      <Button size="icon" variant="ghost" onClick={() => removeListItem('strengths', index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Hobbies</Label>
                    <Button size="sm" variant="ghost" onClick={() => addListItem('hobbies')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {editedData.hobbies.map((hobby, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={hobby}
                        onChange={(e) => updateListItem('hobbies', index, e.target.value)}
                        className="bg-secondary/50"
                      />
                      <Button size="icon" variant="ghost" onClick={() => removeListItem('hobbies', index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass p-6 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">Skills</h2>
                  <Button size="sm" onClick={addSkill} className="btn-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {editedData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder="Skill name"
                        value={skill.name}
                        onChange={(e) => updateSkill(index, 'name', e.target.value)}
                        className="bg-secondary/50 flex-1"
                      />
                      <select
                        value={skill.category}
                        onChange={(e) => updateSkill(index, 'category', e.target.value)}
                        className="bg-secondary/50 border border-border rounded-md px-3 text-foreground"
                      >
                        <option value="Business">Business</option>
                        <option value="Technical">Technical</option>
                        <option value="Soft Skills">Soft Skills</option>
                      </select>
                      <Button size="icon" variant="ghost" onClick={() => removeSkill(index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass p-6 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">Education</h2>
                  <Button size="sm" onClick={addEducation} className="btn-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {editedData.education.map((edu, index) => (
                    <div key={index} className="p-4 bg-secondary/30 rounded-lg space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Education #{index + 1}</span>
                        <Button size="icon" variant="ghost" onClick={() => removeEducation(index)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Degree</Label>
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Institution</Label>
                          <Input
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>University/Board</Label>
                          <Input
                            value={edu.university}
                            onChange={(e) => updateEducation(index, 'university', e.target.value)}
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <Label>Year</Label>
                            <Input
                              value={edu.year}
                              onChange={(e) => updateEducation(index, 'year', e.target.value)}
                              className="bg-secondary/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Score</Label>
                            <Input
                              value={edu.score}
                              onChange={(e) => updateEducation(index, 'score', e.target.value)}
                              className="bg-secondary/50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Activities Tab */}
            <TabsContent value="activities">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="card-glass p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Activities</h2>
                    <Button size="sm" variant="ghost" onClick={() => addListItem('activities')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {editedData.activities.map((activity, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={activity}
                        onChange={(e) => updateListItem('activities', index, e.target.value)}
                        className="bg-secondary/50"
                      />
                      <Button size="icon" variant="ghost" onClick={() => removeListItem('activities', index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="card-glass p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground">Achievements</h2>
                    <Button size="sm" variant="ghost" onClick={() => addListItem('achievements')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {editedData.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={achievement}
                        onChange={(e) => updateListItem('achievements', index, e.target.value)}
                        className="bg-secondary/50"
                      />
                      <Button size="icon" variant="ghost" onClick={() => removeListItem('achievements', index)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Social Links Tab */}
            <TabsContent value="social">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-glass p-6 space-y-6"
              >
                <h2 className="text-lg font-semibold text-foreground">Social Links</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Twitter</Label>
                    <Input
                      value={editedData.socialLinks?.twitter || ''}
                      onChange={(e) => updateSocialLink('twitter', e.target.value)}
                      placeholder="https://twitter.com/username"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Instagram</Label>
                    <Input
                      value={editedData.socialLinks?.instagram || ''}
                      onChange={(e) => updateSocialLink('instagram', e.target.value)}
                      placeholder="https://instagram.com/username"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Facebook</Label>
                    <Input
                      value={editedData.socialLinks?.facebook || ''}
                      onChange={(e) => updateSocialLink('facebook', e.target.value)}
                      placeholder="https://facebook.com/username"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>LinkedIn</Label>
                    <Input
                      value={editedData.socialLinks?.linkedin || ''}
                      onChange={(e) => updateSocialLink('linkedin', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>GitHub</Label>
                    <Input
                      value={editedData.socialLinks?.github || ''}
                      onChange={(e) => updateSocialLink('github', e.target.value)}
                      placeholder="https://github.com/username"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>WhatsApp Number</Label>
                    <Input
                      value={editedData.socialLinks?.whatsapp || ''}
                      onChange={(e) => updateSocialLink('whatsapp', e.target.value)}
                      placeholder="+918088748133"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-lg font-semibold text-foreground">Contact Submissions</h2>
                
                {isLoadingContacts ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : contacts.length === 0 ? (
                  <div className="card-glass p-12 text-center">
                    <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No contact submissions yet</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div key={contact.id} className="card-glass p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-medium text-foreground">{contact.name}</span>
                          <span className="text-muted-foreground ml-2">({contact.email})</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{contact.message}</p>
                    </div>
                  ))
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Admin;
