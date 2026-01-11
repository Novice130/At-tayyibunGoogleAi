
export interface CitySEOData {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  h1: string;
  content: string;
  faqs: { q: string; a: string }[];
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  ethnicity: string;
  profession: string;
  religiousPractice: string;
  bio: string;
  imageUrl: string;
  verified: boolean;
}

export interface KeywordItem {
  keyword: string;
  intent: 'Informational' | 'Commercial' | 'Transactional';
  page: string;
  cta: string;
}

export interface BlogTopic {
  title: string;
  keyword: string;
  cluster: string;
}
