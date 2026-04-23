// Supabase-ready configuration placeholder
// This file will be connected to Lovable Cloud when backend is needed

export const supabaseConfig = {
  tables: [
    'users',
    'subscriptions', 
    'plans',
    'movies',
    'categories',
    'watchlists',
    'festival_editions',
    'submissions',
    'deadlines',
    'testimonials',
  ],
};

// Mock auth state
export const mockUser = {
  id: 'mock-user-1',
  email: 'viewer@astropholic.com',
  name: 'Film Enthusiast',
  isSubscribed: true,
  plan: 'Cinephile',
};

export const isAuthenticated = () => false;
export const isSubscribed = () => false;
