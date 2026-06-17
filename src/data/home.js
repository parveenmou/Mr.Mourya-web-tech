export const TYPEWRITER_WORDS = [
  'Meta Ads Manager',
  'Web Developer',
  'Digital Marketer',
  'Growth Strategist',
]

export const STATS_BAR = [
  { value: '₹22L+', label: 'Sales Generated' },
  { value: '10+', label: 'Websites' },
  { value: '300%', label: 'Avg. ROI' },
  { value: '5+', label: 'Years Exp' },
]

export const SERVICES = [
  {
    tag: 'WEB DEVELOPMENT',
    title: 'Premium Web Experiences',
    desc: 'High-performance, conversion-optimized websites built with modern technologies. SEO-ready, mobile-first, and designed to drive results.',
    listLabel: 'Tech Stack',
    items: ['React', 'Webflow', 'Shopify', 'WordPress'],
    poweredLabel: 'Powered By',
    logos: [
      { src: '/assets/Logo/shopify.jpg', label: 'Shopify' },
      { src: '/assets/Logo/wordpress.jpg', label: 'WordPress' },
      { src: '/assets/Logo/react.png', label: 'React' },
      { src: '/assets/Logo/claude.jpg', label: 'Claude (AI-Assisted Dev)' },
    ],
  },
  {
    tag: 'PERFORMANCE MARKETING',
    title: 'High-ROAS Ad Scaling',
    desc: 'Expert ad management across Meta, Google, and YouTube. Full-funnel strategy, creative optimization, and predictable ROAS growth for ambitious brands.',
    listLabel: 'Ad Platforms',
    items: ['Meta Ads', 'Google Ads', 'YouTube Ads'],
    poweredLabel: 'Expertise In',
    logos: [
      { src: '/assets/Logo/meta.jpg', label: 'Meta Ads' },
      { src: '/assets/Logo/google-ads.jpg', label: 'Google Ads' },
      { src: '/assets/Logo/youtube.jpg', label: 'YouTube Ads' },
    ],
  },
  {
    tag: 'AI AUTOMATION',
    title: 'Intelligent AI Agents & Automations',
    desc: 'Custom AI agents, workflow automation, and intelligent chatbots powered by GPT, Claude, and Gemini. Build enterprise-grade AI solutions that drive real business outcomes.',
    listLabel: 'AI Models & Tools',
    items: ['GPT', 'Claude', 'Gemini', 'Bolt'],
    poweredLabel: 'Powered By',
    logos: [
      { src: '/assets/Logo/claude.jpg', label: 'Claude' },
      { src: '/assets/Logo/gpt.jpg', label: 'GPT' },
      { src: '/assets/Logo/gemini.jpg', label: 'Gemini' },
      { src: '/assets/Logo/bolt.jpg', label: 'Bolt' },
    ],
  },
]

export const FEATURED_PROJECTS = [
  {
    title: 'Burger Bae',
    url: 'https://www.burgerbaeclothing.com/',
    domain: 'burgerbaeclothing.com',
    desktop: '/assets/burgerbae-desktop.png',
    mobile: '/assets/burgebae-mobile.jpg',
    overlay: 'text-yellow-400',
    desc: 'Managed website development and Meta Ads for Burger Bae, a Gen-Z clothing and lifestyle brand, focusing on UI/UX optimization, creative strategy, and performance-driven campaigns to scale sales and brand reach.',
    tags: [
      { label: 'ECommerce', color: 'yellow' },
      { label: 'Web Design', color: 'blue' },
      { label: 'Marketing', color: 'green' },
    ],
  },
  {
    title: 'Balance Is The New Green',
    url: 'https://balanceisthenewgreen.com/',
    domain: 'balanceisthenewgreen.com',
    desktop: '/assets/balanceisthenewgreen-desktop.png',
    mobile: '/assets/balanceisthenewgreen-mobile.jpg',
    overlay: 'text-green-400',
    desc: 'Built a thoughtfully designed website for Balance Is The New Green, prioritizing mental wellness, clean layouts, and a calming, trust-driven user experience.',
    tags: [
      { label: 'Webflow', color: 'yellow' },
      { label: 'Ui/Ux design', color: 'blue' },
      { label: 'Ai Visualizations', color: 'green' },
    ],
  },
  {
    title: 'Decor Bae',
    url: 'https://www.decorbae.shop/',
    domain: 'decorbae.shop',
    desktop: '/assets/decorbae-desktop.png',
    mobile: '/assets/decorbae-mobile.jpg',
    overlay: 'text-pink-400',
    desc: 'Created the website and managed Meta Ads, brand promotion, and operations for Decor Bae, scaling sales from zero to ₹2 lakh in just 2 months.',
    tags: [
      { label: 'Shopify', color: 'yellow' },
      { label: 'Meta Ads', color: 'blue' },
      { label: 'High-performance Sales', color: 'green' },
    ],
  },
  {
    title: 'Urban Needs',
    url: 'https://www.urbanneeds.in/',
    domain: 'urbanneeds.in',
    desktop: '/assets/urbanneeds-desktop.png',
    mobile: '/assets/urbanneeds-mobile.jpg',
    overlay: 'text-cyan-400',
    desc: 'Designed and managed the website for Urban Needs, a men’s clothing brand by San Kalra, and executed Meta Ads campaigns focused on brand visibility, engagement, and online sales growth.',
    tags: [
      { label: 'Shopify', color: 'yellow' },
      { label: 'Meta ads', color: 'blue' },
      { label: 'UI/UX Design', color: 'green' },
    ],
  },
]

// Tailwind classes per tag colour (kept explicit so the JIT compiler keeps them).
export const TAG_COLORS = {
  yellow: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-400',
  blue: 'bg-blue-400/20 border-blue-400/30 text-blue-400',
  green: 'bg-green-400/20 border-green-400/30 text-green-400',
}
