import {
  Hotel,
  Home,
  Stethoscope,
  ShoppingBag,
  BrainCircuit,
  Clock,
  Target,
  Users,
  Zap,
  DollarSign,
  Bell,
  Send,
  Handshake,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────────  INDUSTRIES  ─────────────────────────── */

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  features: IndustryFeature[];
  metrics: { value: string; label: string }[];
  demoStarters: string[];
  demoBusiness: string;
  metricFraming: string;
}

export const industries: IndustryData[] = [
  {
    slug: "hotels",
    label: "Hotels & Hospitality",
    icon: Hotel,
    headline: "Turn Every Inquiry Into a Booking",
    description:
      "Your AI concierge completes bookings at 11 pm, recognizes returning guests, and upsells contextually — the tasks that currently leak revenue or require your best front-desk staff.",
    features: [
      {
        title: "Revenue Recovery Agent",
        description:
          "Guest inquires on WhatsApp at 11 pm. Instead of \"we'll respond tomorrow,\" your AI checks live inventory, calculates dynamic pricing, and completes the full booking — before they try a competitor.",
      },
      {
        title: "Returning Guest Intelligence",
        description:
          "\"Welcome back! Last time you enjoyed the Deluxe Suite with the city view. Shall I check if it's available?\" Recognizes guests across sessions — no CRM needed.",
      },
      {
        title: "Contextual Upselling",
        description:
          "During a natural booking conversation: \"Since you're celebrating an anniversary, our candlelight dinner package is $89/couple — want me to add it?\" Like having your best salesperson in every chat.",
      },
      {
        title: "Owner Real-Time Alerts",
        description:
          "Every booking, inquiry, or complaint → instant alert to your phone with full context. \"New booking: John, Suite, Feb 14-16, $680. He mentioned it's his anniversary.\"",
      },
      {
        title: "Post-Stay Win-Back",
        description:
          "2 days after checkout: \"We hope you loved your stay! We've saved a 15% returning guest rate for your next visit.\" Automated loyalty without a marketing team.",
      },
    ],
    metrics: [
      { value: "70%", label: "After-hours revenue recovered" },
      { value: "90%", label: "Faster response time" },
      { value: "$4.2K", label: "Monthly revenue recovered" },
    ],
    demoStarters: [
      "I'd like to book a room for my anniversary weekend",
      "I stayed with you last year, do I get a returning guest discount?",
      "What room types do you have available?",
    ],
    demoBusiness: "The Grand Meridian Hotel",
    metricFraming:
      "The average small hotel loses $4,200/month from after-hours inquiries that go unanswered.",
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    icon: Home,
    headline: "Wake Up to Qualified Leads, Not Cold Inquiries",
    description:
      "Your AI agent qualifies leads instantly at 2 am, matches properties from natural conversation, and coordinates viewings — replacing the work of a transaction coordinator.",
    features: [
      {
        title: "Instant Lead Qualification",
        description:
          "Facebook ad lead at midnight? AI engages immediately: budget, area, timeline, pre-approval status. Agent wakes up to: \"Hot lead: Sarah, $500K, pre-approved, wants Downtown.\"",
      },
      {
        title: "Conversational Property Matching",
        description:
          "\"I need something with a backyard, near good schools, under $450K, and a home office.\" AI searches listings and returns matches with reasons — no agent time spent.",
      },
      {
        title: "Viewing Coordinator",
        description:
          "Checks the agent's REAL calendar, finds mutual availability, books the viewing, sends calendar invites + parking info + reminders. Replaces a $2-4K/month transaction coordinator.",
      },
      {
        title: "Contextual Re-Engagement",
        description:
          "Lead goes quiet. New listing matches their criteria → AI reaches out: \"A new 3-bed just listed in your target area — matches what you described. Want to see it?\"",
      },
      {
        title: "Seller Lead Capture",
        description:
          "\"What's my house worth?\" AI collects details, gives a rough estimate from comparables, then books a precision valuation visit. Captures seller leads most agents lose.",
      },
    ],
    metrics: [
      { value: "3×", label: "More qualified leads" },
      { value: "<5s", label: "Response time, 24/7" },
      { value: "60%", label: "Fewer no-show viewings" },
    ],
    demoStarters: [
      "I'm looking for a 3-bed with a backyard near good schools",
      "I saw your listing on Oak Street, is it still available?",
      "What's my house worth?",
    ],
    demoBusiness: "Prestige Realty Group",
    metricFraming:
      "The average agent loses 68% of leads because they respond too slowly.",
  },
  {
    slug: "healthcare",
    label: "Healthcare & Clinics",
    icon: Stethoscope,
    headline: "Smarter Triage. Fewer No-Shows. Better Care.",
    description:
      "Your AI handles intelligent triage, insurance pre-verification, no-show recovery, and post-care follow-ups — the tasks your front desk can't keep up with.",
    features: [
      {
        title: "Intelligent Triage & Routing",
        description:
          "\"My child has had a fever for 2 days and a rash appeared.\" AI asks clarifying questions, assesses urgency, and books with the right provider — or advises ER immediately.",
      },
      {
        title: "Insurance Pre-Verification",
        description:
          "\"Do you take Aetna PPO?\" → Confirms coverage AND collects member ID before the visit. Reduces no-shows from insurance confusion by ~30%.",
      },
      {
        title: "No-Show Recovery",
        description:
          "Patient misses appointment. Within 30 minutes: \"We noticed you missed your visit today. Would you like to reschedule? We have openings tomorrow at 10 am.\" Automatic revenue recovery.",
      },
      {
        title: "Pre-Visit Intake",
        description:
          "Day before: collects medication changes, symptom updates, allergy changes. Sends structured summary to the provider. Replaces paper forms and $200-500/month portal software.",
      },
      {
        title: "Post-Care Compliance",
        description:
          "\"Day 3 check-in: How's the swelling? Pain level 1-10?\" If concerning symptoms → escalates to doctor immediately. Closes the liability gap most small clinics ignore.",
      },
    ],
    metrics: [
      { value: "40%", label: "Fewer no-shows" },
      { value: "80%", label: "Routine questions handled" },
      { value: "15hrs", label: "Saved per week at front desk" },
    ],
    demoStarters: [
      "My child has a fever, should I bring them in?",
      "I need to book a dental cleaning",
      "Do you accept Blue Cross insurance?",
    ],
    demoBusiness: "Maple Health Clinic",
    metricFraming:
      "The average clinic loses $2,800/month from no-shows alone.",
  },
  {
    slug: "ecommerce",
    label: "E-commerce & Retail",
    icon: ShoppingBag,
    headline: "Conversational Commerce That Actually Converts",
    description:
      "Your AI shopping assistant recommends like your best in-store salesperson, recovers abandoned carts over WhatsApp (3× better than email), and identifies VIP customers.",
    features: [
      {
        title: "Contextual Shopping Assistant",
        description:
          "\"Beach wedding in Hawaii, budget $200, I'm 5'8\".\" AI recommends specific products with reasoning — like a great in-store associate. No e-commerce chatbot does this today.",
      },
      {
        title: "WhatsApp Cart Recovery",
        description:
          "Abandoned cart → WhatsApp message (not email). 90% open rate vs 20% for email. \"Those linen pants are selling fast — only 3 left in your size.\" 25-35% conversion vs 5-10% for email.",
      },
      {
        title: "Post-Purchase Upsell",
        description:
          "5 days after delivery: \"How's the blazer? Pro tip: it pairs great with our new white tee. Customers who bought the blazer love this combo.\" Contextual, not generic.",
      },
      {
        title: "Size & Fit Prevention",
        description:
          "\"I wear L at Zara but M at H&M.\" AI knows your brand's sizing, compares, recommends with confidence. Reduces returns by 20-30% — the #1 margin killer in e-commerce.",
      },
      {
        title: "VIP Detection & Escalation",
        description:
          "Customer spent $800+ this year? AI flags them for white-glove treatment and alerts you: \"VIP Sarah is looking for a wedding outfit — potential $200+ order.\"",
      },
    ],
    metrics: [
      { value: "3×", label: "Better cart recovery vs email" },
      { value: "25%", label: "Increase in conversion rate" },
      { value: "$12K", label: "Monthly recovered revenue" },
    ],
    demoStarters: [
      "I need an outfit for a beach wedding, budget $200",
      "I bought the wrong size, can I exchange?",
      "What's trending this season?",
    ],
    demoBusiness: "Urban Threads",
    metricFraming:
      "WhatsApp cart recovery converts 3× better than email — $8K-15K/month for mid-size stores.",
  },
  {
    slug: "internal-assistant",
    label: "Internal AI Assistant",
    icon: BrainCircuit,
    headline: "An AI Team Member That Knows Your Entire Company",
    description:
      "Research on demand, living SOPs, onboarding automation, feedback synthesis — your internal knowledge base becomes a chatbot every employee can talk to.",
    features: [
      {
        title: "Research & Report Generation",
        description:
          "\"Compare the top 5 CRM tools for our real estate client — pricing, features, pros/cons.\" AI compiles a structured report. Replaces 3-4 hours of analyst work per report.",
      },
      {
        title: "Company Knowledge Base You Can Talk To",
        description:
          "\"What's our refund policy?\" / \"How do we onboard a new client?\" Instant answers from your actual docs. Employees waste 1.5 hours/day searching — this eliminates it.",
      },
      {
        title: "Team Feedback Collection & Synthesis",
        description:
          "\"Run a pulse check on workload.\" Bot DMs each team member, collects responses, synthesizes: \"3 flagged bandwidth issues, Project ABC blocked on client assets. Morale: 7.2/10.\"",
      },
      {
        title: "Meeting Prep & Action Items",
        description:
          "Before: compiles everything on Client X. After: creates action items from notes and assigns to team. Tracks completion, sends reminders. Saves 50 min per meeting.",
      },
      {
        title: "New Hire Onboarding Bot",
        description:
          "Walks new hires through values, tools, contacts, SOPs. Answers questions 24/7 for their first month. Replaces 10+ hours of senior team member time per new hire.",
      },
      {
        title: "Living SOPs & Processes",
        description:
          "\"What's the process for submitting a proposal?\" Bot walks through step-by-step, links templates, initiates workflows. Process changed? Tell the bot — updates company-wide.",
      },
    ],
    metrics: [
      { value: "1.5hrs", label: "Saved per employee per day" },
      { value: "60%", label: "Faster onboarding" },
      { value: "10hrs", label: "Saved per new hire" },
    ],
    demoStarters: [
      "Compare the top 5 project management tools",
      "What's our company policy on remote work?",
      "Create action items from last week's meeting notes",
    ],
    demoBusiness: "NovaTech Solutions",
    metricFraming:
      "The average employee wastes 1.5 hours/day searching for information. Give every team member an AI that knows your entire company.",
  },
];

/* ───────────────────────────  FEATURES BENTO  ─────────────────────── */

export interface BentoFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  large?: boolean;
}

export const bentoFeatures: BentoFeature[] = [
  {
    title: "Actually Completes Tasks",
    description:
      "Doesn't just answer questions — books, qualifies, calculates, follows up. One conversation, full resolution.",
    icon: Zap,
    large: true,
  },
  {
    title: "Trained On YOUR Business",
    description:
      "Not generic AI. Trained on your prices, policies, inventory, and tone. Speaks like your best employee.",
    icon: Target,
  },
  {
    title: "Remembers Every Customer",
    description:
      "Sarah called 3 months ago about the corner suite. When she messages back, your AI remembers everything.",
    icon: Users,
  },
  {
    title: "Cross-System Orchestration",
    description:
      "One conversation checks your calendar, updates your CRM, sends you an alert, and follows up next week.",
    icon: BrainCircuit,
  },
  {
    title: "Revenue Recovery",
    description:
      "After-hours inquiries, abandoned carts, no-show follow-ups — your AI recovers the money you're currently losing.",
    icon: DollarSign,
  },
  {
    title: "Intelligent Escalation",
    description:
      "When it's beyond AI, you get the FULL context on your phone: who they are, what they need, urgency level.",
    icon: Bell,
  },
  {
    title: "Proactive Outreach",
    description:
      "Slow Tuesday? New listing matches a lead? Your AI reaches out automatically with the right message.",
    icon: Send,
  },
  {
    title: "Done-For-You",
    description:
      "You don't learn any software. We build, train, deploy, and manage everything. You just watch it work.",
    icon: Handshake,
  },
];

/* ───────────────────────────  HOW IT WORKS  ────────────────────────── */

export const howItWorks = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    description:
      "A 30-minute call. We learn your services, FAQs, tone, and goals. You tell us about your customers — we handle the rest.",
  },
  {
    step: "02",
    title: "We Build Your AI Agent",
    description:
      "In 72 hours, your custom AI is trained on your business data — prices, policies, inventory. Tested and refined until it's perfect.",
  },
  {
    step: "03",
    title: "Go Live & Grow",
    description:
      "Deploy on WhatsApp, your website, Telegram — wherever your customers are. Start converting leads from day one.",
  },
];

/* ───────────────────────────  PRICING  ──────────────────────────────── */

export interface PricingTier {
  name: string;
  price: number;
  annualPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
  perfectFor: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 349,
    annualPrice: 279,
    description: "Perfect for small businesses getting started with AI",
    features: [
      "1 AI agent",
      "1 platform (WhatsApp OR Web OR Telegram)",
      "1,000 conversations/month",
      "Business FAQ training",
      "Email support",
    ],
    cta: "Get Started",
    perfectFor: "Small shops, solo practitioners",
  },
  {
    name: "Growth",
    price: 749,
    annualPrice: 599,
    description: "For businesses ready to scale their customer experience",
    features: [
      "Up to 3 AI agents",
      "All platforms",
      "5,000 conversations/month",
      "Full business data training",
      "Customer memory & profiles",
      "Priority support",
      "Owner notifications",
    ],
    badge: "Most Popular",
    cta: "Get Started",
    perfectFor: "Growing businesses, clinics, agencies",
  },
  {
    name: "Enterprise",
    price: 1299,
    annualPrice: 1039,
    description: "For multi-location businesses that need it all",
    features: [
      "Unlimited AI agents",
      "Unlimited conversations",
      "All platforms + custom integrations",
      "CRM / POS integration",
      "Dedicated account manager",
      "Custom workflow automation",
      "SLA guarantee",
    ],
    cta: "Get Started",
    perfectFor: "Multi-location businesses, agencies",
  },
];

/* ───────────────────────────  COMPARISON  ────────────────────────────── */

export const comparisonRows = [
  {
    feature: "Cost",
    staff: "$3,500+/mo per person",
    chatbots: "$50–300/mo",
    us: "$349–$1,299/mo",
  },
  {
    feature: "Complex multi-step tasks",
    staff: "Yes",
    chatbots: "No (rule-based flows)",
    us: "Yes (AI reasons through steps)",
  },
  {
    feature: "Trained on YOUR data",
    staff: "Takes weeks/months",
    chatbots: "Generic or basic FAQ",
    us: "Deep-trained in 72 hours",
  },
  {
    feature: "Remembers customers",
    staff: "Sometimes",
    chatbots: "No (resets every chat)",
    us: "Yes (permanent memory)",
  },
  {
    feature: "Cross-system orchestration",
    staff: "Manually, slowly",
    chatbots: "One system at best",
    us: "All systems, one conversation",
  },
  {
    feature: "After-hours availability",
    staff: "Overtime = expensive",
    chatbots: "Auto-reply only",
    us: "Full task completion 24/7",
  },
  {
    feature: "Proactive outreach",
    staff: "If they remember",
    chatbots: "Not possible",
    us: "Automated & contextual",
  },
  {
    feature: "Escalation quality",
    staff: '"Let me transfer you…"',
    chatbots: "Drops you into a queue",
    us: "Full brief sent to your team",
  },
  {
    feature: "Setup effort",
    staff: "Hire, train, manage",
    chatbots: "You build the flows",
    us: "We do everything",
  },
];

/* ───────────────────────────  TESTIMONIALS  ──────────────────────────── */

export const testimonials = [
  {
    quote:
      "We were losing almost every after-hours inquiry. Within a week of going live, the AI booked 12 rooms we would have lost. It paid for itself on day one.",
    name: "Marcus Chen",
    title: "Owner, Riverside Boutique Hotel",
    industry: "Hotels",
  },
  {
    quote:
      "I used to spend my mornings qualifying leads from overnight. Now I wake up to a list of pre-qualified buyers with budgets and timelines. It's like having an assistant that never sleeps.",
    name: "Priya Sharma",
    title: "Lead Agent, Metro Realty",
    industry: "Real Estate",
  },
  {
    quote:
      "Our no-show rate dropped 35% in the first month. The automated follow-ups catch patients who would have just ghosted. The front desk team can finally focus on in-office care.",
    name: "Dr. Emily Torres",
    title: "Practice Manager, Bright Smile Dental",
    industry: "Healthcare",
  },
  {
    quote:
      "The WhatsApp cart recovery alone brings in $9K extra per month. It's not even close to email. Customers respond to WhatsApp like they're texting a friend.",
    name: "James Okonkwo",
    title: "Founder, Urban Threads",
    industry: "E-commerce",
  },
  {
    quote:
      "Our team used to waste hours searching for info across Notion, Drive, and Slack. Now they just ask the bot. Onboarding new hires went from 2 weeks of hand-holding to 3 days.",
    name: "Sarah Kim",
    title: "COO, Catalyst Agency",
    industry: "Internal AI",
  },
];

/* ───────────────────────────  STATS  ──────────────────────────────────── */

export const stats = [
  { value: 50000, suffix: "+", label: "Conversations handled" },
  { value: 150, suffix: "+", label: "Businesses served" },
  { value: 4.9, suffix: "/5", label: "Client satisfaction" },
  { value: 2, prefix: "$", suffix: "M+", label: "Revenue generated for clients" },
];

/* ───────────────────────────  FAQ  ──────────────────────────────────── */

export const faqItems = [
  {
    question: "How is this different from Tidio, Intercom, or ManyChat?",
    answer:
      "Those tools are rule-based — you build decision trees and they follow scripts. Our AI actually reasons through complex tasks: checking your real inventory, calculating dynamic pricing, remembering customers across conversations, and orchestrating actions across multiple systems in a single chat. They can't do multi-step reasoning or cross-system orchestration.",
  },
  {
    question: "What do I need to set up?",
    answer:
      "Nothing. This is a done-for-you service. We handle everything: building, training, deploying, and managing your AI agent. You just have a 15-minute call with us to tell us about your business, and we do the rest. You don't learn any software.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "48 hours from our initial call. We train the AI on your business data, test it thoroughly, and deploy it on your chosen platforms — WhatsApp, your website, Telegram, or all of the above.",
  },
  {
    question: "What happens if the AI can't handle a question?",
    answer:
      "It intelligently escalates to you. Not a generic 'transferring to a human' — you receive the full conversation context, customer profile, what they need, and urgency level directly on your phone via WhatsApp or Telegram. You have everything you need to jump in seamlessly.",
  },
  {
    question: "Will it sound robotic to my customers?",
    answer:
      "No. We train the AI on your specific tone, terminology, and communication style. It speaks like your best employee — warm, knowledgeable, and on-brand. Customers often don't realize they're chatting with AI.",
  },
  {
    question: "What platforms does it work on?",
    answer:
      "WhatsApp, Telegram, your website (embedded widget), email, and Instagram. Your customers can reach you on whatever channel they prefer, and the AI maintains context across all of them.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. Your data is encrypted in transit and at rest. We don't share data between clients. Each AI agent is isolated and trained exclusively on your business information. We can also sign NDAs and custom data processing agreements.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Absolutely. We offer a free 7-day trial with no credit card required. You'll see exactly how the AI performs with your real business data before making a decision.",
  },
  {
    question: "What if I want to change the AI's responses or add new info?",
    answer:
      "Just tell us. We manage all updates for you. Need to add a new service, change pricing, or adjust the tone? We update the AI within 24 hours. You never have to touch a dashboard.",
  },
  {
    question: "Do you offer custom solutions beyond these plans?",
    answer:
      "Yes. Our Enterprise plan includes custom workflow automation, CRM/POS integration, white-labeling, and a dedicated account manager. For anything more specialized, book a call and we'll design a solution around your needs.",
  },
];

/* ───────────────────────────  INTEGRATIONS  ──────────────────────────── */

export const integrations = [
  "WhatsApp",
  "Telegram",
  "Shopify",
  "Google Sheets",
  "Google Calendar",
  "HubSpot",
  "Calendly",
  "Stripe",
  "WordPress",
  "Slack",
  "Twilio",
  "Instagram",
];

/* ───────────────────────────  NAV LINKS  ──────────────────────────────── */

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];
