
import React from 'react';
import { CitySEOData, KeywordItem, BlogTopic } from './types';

export const BRAND_NAME = "At-Tayyibun";
export const TAGLINE = "A privacy-first halal matrimony platform.";

// Placeholder for the user's provided logo. In a production environment, this would be '/logo.png'.
// We use a high-quality heart icon that matches the provided image's aesthetic.
export const BRAND_LOGO_URL = "https://img.icons8.com/color/512/hearts.png"; 

export const NATIONAL_KEYWORDS: KeywordItem[] = [
  { keyword: "muslim matrimony", intent: "Commercial", page: "Pillar / Home", cta: "Find Your Match" },
  { keyword: "halal matchmaking", intent: "Commercial", page: "Pillar / How it Works", cta: "Start Securely" },
  { keyword: "islamic marriage website", intent: "Transactional", page: "Home", cta: "Join At-Tayyibun" },
  { keyword: "nikah matchmaking USA", intent: "Transactional", page: "Pillar", cta: "Browse Profiles" },
];

export const CITY_MODIFIER_KEYWORDS: KeywordItem[] = [
  { keyword: "muslim matrimony chicago", intent: "Transactional", page: "City - Chicago", cta: "Meet Chicago Muslims" },
  { keyword: "muslim marriage NYC", intent: "Transactional", page: "City - NYC", cta: "Find Match in NYC" },
  { keyword: "islamic matchmaking houston", intent: "Transactional", page: "City - Houston", cta: "Join Houston Community" },
];

export const BLOG_TOPICS: BlogTopic[] = [
  { title: "The Role of a Wali in Modern Matrimony", keyword: "wali guidelines", cluster: "Orthodox/Halal" },
  { title: "How to Spot a Serious Marriage Seeker", keyword: "serious muslim marriage", cluster: "Education" },
  { title: "Islamic Etiquette for Online Matrimony", keyword: "halal dating tips", cluster: "Halal Practice" },
  { title: "Navigating Intercultural Muslim Marriages", keyword: "muslim marriage ethnicity", cluster: "Social" },
  { title: "Questions to Ask Before Nikah", keyword: "nikah questions", cluster: "Transaction/Prep" },
];

export const CITY_DATA: CitySEOData[] = [
  {
    slug: "chicago",
    name: "Chicago",
    title: "Muslim Matrimony Chicago | Find Your Halal Match | At-Tayyibun",
    metaDesc: "Join At-Tayyibun for premium Muslim matrimony in Chicago. Privacy-first halal matchmaking for the Chicagoland Muslim community. Start your journey today.",
    h1: "Authentic Muslim Matrimony in Chicago",
    content: "Chicago is home to one of the most vibrant and diverse Muslim communities in the United States. From the historic neighborhoods of Devon Avenue to the thriving professional hubs in the Loop, Chicago Muslims are seeking serious, halal connections that respect traditional values while navigating modern life.",
    faqs: [
      { q: "Is At-Tayyibun available for Muslims in the Chicago suburbs?", a: "Yes, we serve the entire Chicagoland area including Naperville, Bridgeview, and Schaumburg." },
      { q: "How does Chicago matchmaking differ on At-Tayyibun?", a: "We focus on local community filters and verified local profiles to ensure safety and convenience." }
    ]
  },
  {
    slug: "new-york-city",
    name: "New York City",
    title: "Muslim Matrimony NYC | Halal Matchmaking New York | At-Tayyibun",
    metaDesc: "The leading Muslim marriage platform for NYC. Find serious practicing Muslims in Manhattan, Brooklyn, Queens, and the Bronx on At-Tayyibun.",
    h1: "Find Your Life Partner in the Heart of NYC",
    content: "New York City’s Muslim population is a beautiful tapestry of cultures, professions, and levels of practice.",
    faqs: [
      { q: "Can I find profiles specifically in Brooklyn or Queens?", a: "Yes, our advanced location filters allow you to drill down into specific boroughs of NYC." },
      { q: "Are there networking events for NYC Muslims on At-Tayyibun?", a: "We primarily offer digital matchmaking but often share news about local halal networking events." }
    ]
  },
  {
    slug: "houston",
    name: "Houston",
    title: "Houston Muslim Matrimony | Find Local Nikah Matches | At-Tayyibun",
    metaDesc: "Serious Muslim matrimony in Houston, Texas. At-Tayyibun connects practicing Muslims in the Greater Houston area with a focus on halal values.",
    h1: "Houston's Premier Halal Matchmaking Platform",
    content: "Houston is known for its incredible hospitality and its large, flourishing Muslim community.",
    faqs: [
      { q: "Does the app cover Sugar Land and Katy?", a: "Absolutely. Our Houston regional coverage includes all surrounding areas and suburbs." },
      { q: "Is it possible to involve my Wali directly?", a: "Yes, At-Tayyibun encourages and facilitates Wali/Guardian participation in the search process." }
    ]
  }
];

export const SCALABLE_CITIES = [
  "los-angeles", "dallas", "san-francisco-bay-area", "dearborn", "new-jersey", "washington-dc", "northern-virginia"
];
