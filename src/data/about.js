import {
  Target,
  LineChart,
  Sparkles,
  Lightbulb,
  Gem,
  Sprout,
  Eye,
  Atom,
  PenTool,
  ShoppingBag,
  Globe,
  Facebook,
  Megaphone,
  Youtube,
  BarChart3,
  Bot,
  Workflow,
  Monitor,
  Cpu,
  Users,
  Zap,
  DollarSign,
  ShieldCheck,
  Settings,
  RefreshCw,
} from 'lucide-react'

// Story paragraphs as segment arrays (no raw HTML -> no XSS surface).
// A plain string renders as text; a [text, color] tuple renders an emphasised span.
export const STORY_COLOR = { gray: 'text-gray-300', cyan: 'text-cyan-400' }

export const STORY_PARAGRAPHS = [
  [
    'My journey began in ',
    ['2021', 'gray'],
    ' as an ',
    ['eCommerce Manager at a cycle company', 'gray'],
    ', where I learned how online businesses truly function—from customer behavior to conversion psychology. While working full-time, I taught myself ',
    ['website development', 'gray'],
    ' and quickly realized one thing: ',
    ['a well-built website directly impacts sales and brand growth.', 'gray'],
  ],
  [
    'The real turning point came at ',
    ['BXB Social', 'gray'],
    '. I built ',
    ['high-converting websites', 'gray'],
    ' for brands like ',
    ['BurgerBae', 'gray'],
    ' and ',
    ['Urban Needs', 'gray'],
    ', while also mastering ',
    ['Meta Ads strategy', 'gray'],
    '. By combining performance-driven UI with data-backed advertising, I helped brands scale to ',
    ['₹35–40 lakhs in monthly sales', 'cyan'],
    '. This phase defined my approach: ',
    ['design and marketing must work together to deliver real results.', 'gray'],
  ],
  [
    "Today, I'm working with ",
    ['Confidence Clothing', 'gray'],
    ', where I built their ',
    ['website from the ground up', 'gray'],
    ', manage their ',
    ['online sales', 'gray'],
    ', and am currently developing a ',
    ['custom ERP system', 'gray'],
    ' to streamline operations and support scale. Alongside this, I launched my own dropshipping brand ',
    ['Decor Bae', 'gray'],
    ', generating ',
    ['₹2 lakhs in just 2 months from zero', 'cyan'],
    ', and built ',
    ['Balance Is the New Green', 'gray'],
    ', a mental-health focused platform for expert ',
    ['Janvi Sikaria', 'gray'],
    '. With ',
    ['10+ successful websites and proven growth outcomes', 'gray'],
    ', I now build ',
    ['performance-driven digital systems', 'gray'],
    " that don't just look good—they ",
    ['convert, scale, and sell.', 'gray'],
  ],
]

export const STORY_BOXES = [
  {
    icon: Target,
    color: 'yellow',
    title: 'Mission-Driven',
    desc: 'Every project is about creating measurable impact, not just delivering files.',
  },
  {
    icon: LineChart,
    color: 'cyan',
    title: 'Data-Obsessed',
    desc: 'Decisions backed by analytics, A/B testing, and continuous optimization.',
  },
  {
    icon: Sparkles,
    color: 'yellow',
    title: 'Future-Ready',
    desc: 'Early adopter of AI, automation, and cutting-edge tech that gives you an edge.',
  },
]

export const CORE_VALUES = [
  {
    icon: Lightbulb,
    color: 'yellow',
    title: 'Innovation',
    desc: 'Constantly exploring new technologies and strategies to stay ahead of the curve and deliver cutting-edge solutions.',
  },
  {
    icon: Gem,
    color: 'cyan',
    title: 'Quality',
    desc: 'Never compromising on excellence. Every pixel, every line of code, every ad is crafted with meticulous attention to detail.',
  },
  {
    icon: Sprout,
    color: 'yellow',
    title: 'Growth',
    desc: 'Committed to continuous learning and improvement. Your success drives my evolution as a professional.',
  },
  {
    icon: Eye,
    color: 'cyan',
    title: 'Transparency',
    desc: "Clear communication, honest timelines, and real metrics. You'll always know exactly what's happening with your project.",
  },
]

export const ACADEMICS = [
  {
    badge: '🎓',
    kicker: 'Foundation',
    title: 'Bachelor of Computer Applications (BCA)',
    period: 'Graduated — 2023',
    desc: 'Focused on core computing fundamentals—programming, databases, web technologies, and system logic—forming the base for modern web and automation work.',
    tags: ['Core computing', 'Foundation → Application'],
    accent: 'yellow',
  },
  {
    badge: '📜',
    kicker: 'Application',
    title: 'Master of Computer Applications (MCA)',
    period: 'Masters — 2025',
    desc: 'Advanced studies in software development, system architecture, and applied computing, strengthening problem-solving for scalable digital and AI-driven solutions.',
    tags: ['Scalable systems', 'Growth-ready'],
    accent: 'cyan',
  },
]

export const SKILLS = [
  { icon: Atom, name: 'React.js', desc: 'Full-stack development, component architecture', category: 'web' },
  { icon: PenTool, name: 'Webflow', desc: 'No-code design, animations, responsive layouts', category: 'web' },
  { icon: ShoppingBag, name: 'Shopify', desc: 'E-commerce platforms, theme customization', category: 'web' },
  { icon: Globe, name: 'WordPress', desc: 'CMS setup, plugin integration, optimization', category: 'web' },
  { icon: Facebook, name: 'Meta Ads', desc: 'Facebook & Instagram campaigns at scale', category: 'marketing' },
  { icon: Megaphone, name: 'Google Ads', desc: 'Search and display advertising', category: 'marketing' },
  { icon: Youtube, name: 'YouTube Ads', desc: 'Video advertising and audience targeting', category: 'marketing' },
  { icon: BarChart3, name: 'Analytics & Tracking', desc: 'Data-driven campaign optimization', category: 'marketing' },
  { icon: Bot, name: 'GPT Integration', desc: 'Custom AI solutions and chatbots', category: 'ai' },
  { icon: Sparkles, name: 'Claude AI', desc: 'Advanced automation and content generation', category: 'ai' },
  { icon: Gem, name: 'Gemini', desc: 'Multi-modal AI and workflow automation', category: 'ai' },
  { icon: Workflow, name: 'Automation Workflows', desc: 'Process automation and integrations', category: 'ai' },
]

export const SKILL_CATEGORY_CLASS = {
  web: 'border-yellow-400/50 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]',
  marketing: 'border-cyan-500/50 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
  ai: 'border-orange-400/50 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]',
}
export const SKILL_ICON_CLASS = {
  web: 'text-yellow-400',
  marketing: 'text-cyan-500',
  ai: 'text-orange-400',
}

export const WHAT_I_DO = [
  {
    icon: Monitor,
    kicker: 'Web Engineering',
    title: 'Premium Web Experiences',
    desc: 'Conversion-grade sites built with modern stacks—fast, scalable, SEO-ready, and designed to sell.',
    listLabel: 'Stack Highlights',
    items: ['React', 'Webflow', 'Shopify', 'WordPress'],
    poweredLabel: 'Powered By',
    logos: [
      { src: '/assets/Logo/react.png', label: 'React' },
      { src: '/assets/Logo/shopify.jpg', label: 'Shopify' },
      { src: '/assets/Logo/wordpress.jpg', label: 'WordPress' },
      { src: '/assets/Logo/claude.jpg', label: 'Claude (AI-Assisted Dev)' },
    ],
    accent: 'yellow',
  },
  {
    icon: BarChart3,
    kicker: 'Performance Marketing',
    title: 'High-ROAS Ad Scaling',
    desc: 'Full-funnel Meta, Google, and YouTube campaigns with relentless testing, creative iteration, and CRO baked in.',
    listLabel: 'Channels',
    items: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'CRO Audits'],
    poweredLabel: 'Trusted Platforms',
    logos: [
      { src: '/assets/Logo/meta.jpg', label: 'Meta' },
      { src: '/assets/Logo/google-ads.jpg', label: 'Google Ads' },
      { src: '/assets/Logo/youtube.jpg', label: 'YouTube' },
    ],
    accent: 'cyan',
  },
  {
    icon: Cpu,
    kicker: 'AI Automation',
    title: 'Intelligent Systems & Agents',
    desc: 'Custom AI agents, workflow automation, and chatbots that integrate with your stack to save time and scale operations.',
    listLabel: 'Capabilities',
    items: ['GPT / Claude', 'Gemini', 'Automation', 'Custom Chatbots'],
    poweredLabel: 'Ecosystem',
    logos: [
      { src: '/assets/Logo/gpt.jpg', label: 'GPT' },
      { src: '/assets/Logo/claude.jpg', label: 'Claude' },
      { src: '/assets/Logo/gemini.jpg', label: 'Gemini' },
    ],
    accent: 'amber',
  },
]

export const QUICK_STATS = [
  { value: '₹22L+', label: 'Sales Generated', color: 'yellow' },
  { value: '10+', label: 'Websites Built', color: 'cyan' },
  { value: '300%', label: 'Average ROI', color: 'yellow' },
  { value: '5+', label: 'Years Experience', color: 'cyan' },
  { value: '100+', label: 'Happy Clients', color: 'yellow' },
  { value: '5+', label: 'Certifications', color: 'cyan' },
  { value: '24hr', label: 'Response Time', color: 'yellow' },
  { value: '24/7', label: 'Support Available', color: 'cyan' },
]

export const WHY_PARTNER = [
  { icon: Users, color: 'yellow', title: 'Direct Communication', desc: 'No middlemen, no miscommunication. Work directly with the person building your project.' },
  { icon: Zap, color: 'cyan', title: 'Fast Turnaround', desc: 'Agile workflow means quicker iterations, faster launches, and rapid optimizations.' },
  { icon: DollarSign, color: 'yellow', title: 'Cost-Effective', desc: 'Get agency-level quality without the agency markup. Better value, same excellence.' },
  { icon: ShieldCheck, color: 'cyan', title: 'Proven Track Record', desc: 'Real results, real revenue. Not just promises—documented success stories.' },
  { icon: Settings, color: 'yellow', title: 'Full-Stack Expertise', desc: 'One person who understands design, development, and marketing—seamless integration.' },
  { icon: RefreshCw, color: 'cyan', title: 'Continuous Optimization', desc: "Projects don't end at launch. Ongoing tweaks and improvements based on real data." },
]
