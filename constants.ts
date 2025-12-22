import { ExperienceItem, Project, SkillCategory } from './types';

// =================================================================================
// INSTRUCTIONS FOR YOUR PHOTO:
// 1. Rename your photo to 'profile.jpg' (or .png)
// 2. Place it in the 'public' folder of your project (or the root folder).
// 3. The code below will use it. 
//    If your file is missing, it will use the placeholder image automatically.
// =================================================================================

export const PROFILE_IMAGE = "https://media.licdn.com/dms/image/v2/D5603AQFD-PtbqjUk3Q/profile-displayphoto-scale_400_400/B56ZsmzQ.dG4Ag-/0/1765882533354?e=1767225600&v=beta&t=Q9MNZUiyxubeEH2hx_-GxjEFcXsZhOhvNu2iXHrtVQA"; 
export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop"; // Professional Placeholder

export const RESUME_SUMMARY = `
Name: Beerendra Karukola
Role: Senior Video Editor
Experience: 14+ Years
Contact: beerendrakarukola9@gmail.com, 9705552787
LinkedIn: https://www.linkedin.com/in/beerendra-karukola-6710b8153

Summary:
Senior Video Editor with 14+ years of experience specializing in political campaigns, social impact storytelling, and OTT localization. 
Has generated over 500M+ lifetime views and delivered over 14,500 finalized edits across News, MCNs, and Political Campaigns.
Expert in repurposing long-form content into high-retention short-form reels.
Key Achievement: Subtitled 80+ shows/movies for KUKU TV. Drove ₹24 crore in donations via Donatekart.

Work Experience:
- Freelance Senior Editor (Mar 2024 - Present): 
  - Subtitled 80+ shows and movies for KUKU TV and various production houses.
  - Specializes in turning long-form archival footage into engaging, viral-ready reels/shorts.
  - Continued work with Donatekart and Political Campaigns.
- IPAC Political Consultancy (Dec 2022 - Feb 2024 & May 2018 - Dec 2019): Lead editor for high-stakes political campaigns (reaching 20M voters).
- Donatekart (Dec 2022 - Feb 2024): Social impact storytelling.
- Whacked Out Media (May 2015 - May 2018): Sr. Video Editor for MCNs (Startup Stories).
- V6 News & TNN News: News editing foundation.

Skills:
- Core: Narrative Editing, Color Grading, Sound Design, Subtitling/Localization.
- Strategy: Long-to-Short Content Repurposing, Retention Optimization.
- Tools: Premiere Pro, After Effects, DaVinci Resolve, AI Enhancement Tools.
`;

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'freelance-2024',
    role: 'Senior Freelance Editor',
    company: 'KUKU TV / Donatekart / Politics',
    period: 'March 2024 - Present',
    description: [
      'Subtitled and localized over 80+ shows and movies for KUKU TV and various production houses.',
      'Specialist in "Content Repurposing": Transforming hour-long podcasts and footage into high-retention Reels/Shorts.',
      'Drove ₹24 crore in donations for Donatekart via emotionally compelling storytelling.',
      'Led post-production for 2024 General Elections, contributing to 500M+ lifetime career views.'
    ]
  },
  {
    id: 'ipac-2022',
    role: 'Consultant / Lead Editor',
    company: 'IPAC - Political Consultancy',
    period: 'Dec 2022 - Feb 2024',
    description: [
      'Supervised ground-level video content quality across state-wide campaigns.',
      'Strategized innovative content aligning with political objectives.',
      'Edited daily viral videos to amplify client messaging under tight deadlines.'
    ]
  },
  {
    id: 'donatekart-2022',
    role: 'Video Editor',
    company: 'Donatekart',
    period: 'Dec 2022 - Feb 2024',
    description: [
      'Transformed raw footage into engaging fundraising videos.',
      'Focused on emotional arcs to maximize donor conversion rates.'
    ]
  },
  {
    id: 'ipac-2018',
    role: 'Sr. Video Editor',
    company: 'IPAC - Political Consultancy',
    period: 'May 2018 - Dec 2019',
    description: [
      'Edited the then most-viewed political song in India (record held until 2024).',
      'Created end-to-end motion graphics to elevate party presence.'
    ]
  },
  {
    id: 'whacked-2015',
    role: 'Sr. Video Editor',
    company: 'Whacked Out Media',
    period: 'May 2015 - May 2018',
    description: [
      'Managed end-to-end post-production for major YouTube MCN channels including Startup Stories.',
      'Drove massive channel growth, contributing significantly to 500M+ total career views.'
    ]
  },
  {
    id: 'media-2010',
    role: 'Video Editor',
    company: 'V6 News / TNN / Veda Sankalpa',
    period: '2010 - 2015',
    description: [
      'Foundation in broadcast news editing and rapid turnaround workflows.',
      'Developed speed and precision in cuts for 24/7 news cycles.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Post-Production',
    skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Subtitling', 'Audio Mixing', 'Color Grading']
  },
  {
    title: 'Content Strategy',
    skills: ['Long-to-Short Repurposing', 'Viral Retention Hooks', 'Thumbnail Design', 'YouTube SEO', 'Trend Analysis']
  },
  {
    title: 'AI & Speed Workflow',
    skills: ['Runway Gen-2', 'Topaz Video AI', 'Descript (Transcription)', 'Auto-Captions', 'Generative Fill']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'kukufm',
    title: 'KUKU TV & OTT Localization',
    description: 'Subtitled and mastered 80+ shows and movies for KUKU TV and various production houses. Handled complex localization timelines.',
    link: 'https://kukufm.com/', 
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2670&auto=format&fit=crop',
    tags: ['Subtitles', 'Massive Scale', 'Localization']
  },
  {
    id: 'social-impact',
    title: 'Donatekart Impact Videos',
    description: 'Emotional storytelling that drove ₹24 crore in donations. Specialized in high-conversion fundraising content.',
    link: 'https://www.youtube.com/@Donatekart/videos',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Fundraising', 'Documentary', 'Impact']
  },
  {
    id: 'startup-stories',
    title: 'Startup Stories TV',
    description: 'End-to-end production for entrepreneurship videos and motivational content. Multi-language strategy driving millions of views.',
    link: 'https://www.youtube.com/@StartupStoriesTV/videos',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop',
    tags: ['500M+ Views', 'Business', 'Long-Form']
  },
  {
    id: 'political-song',
    title: 'Viral Campaign Song',
    description: 'Edited India’s most-viewed political campaign song (Record holder till 2024). High-energy cuts and motion graphics.',
    link: 'https://youtu.be/eWGMXR2WTKA',
    imageUrl: 'https://img.youtube.com/vi/eWGMXR2WTKA/maxresdefault.jpg',
    tags: ['Premiere Pro', 'Viral', 'Music Video']
  }
];

export const CONTACT_INFO = {
  email: 'beerendrakarukola9@gmail.com',
  phone: '9705552787',
  linkedin: 'https://www.linkedin.com/in/beerendra-karukola-6710b8153',
  youtube: 'https://youtube.com/@user-ee1et6gc9l?feature=shared'
};

export const CLIENTS = [
  "KUKU TV", "DONATEKART", "IPAC", "WHACKED OUT MEDIA", "V6 NEWS", "VEDA SANKALPA", "TNN NEWS"
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Beerendra has an incredible knack for taking raw, long-form footage and turning it into gold for social media. His reels just work.",
    author: "Content Head",
    company: "Production House"
  },
  {
    id: 2,
    quote: "Managing subtitles for 80+ shows is no small feat. He delivered with precision and speed, ensuring our launch deadlines were met.",
    author: "Ops Manager",
    company: "KUKU TV"
  },
  {
    id: 3,
    quote: "His storytelling drove ₹24 Crores in donations. He doesn't just edit video; he edits for emotion and action.",
    author: "Campaign Lead",
    company: "Donatekart"
  }
];