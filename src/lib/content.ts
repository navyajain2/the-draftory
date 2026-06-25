/* ------------------------------------------------------------------ *
 *  All site copy lives here.  Edit text without touching components.
 * ------------------------------------------------------------------ */

export const brand = {
  name: "The Draftory",
  email: "hello@thedraftory.com",
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Who it's for", href: "#audience" },
  { label: "Process", href: "#process" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  line1: "A content team",
  line2: "for founders.",
  // Live timezone clocks, zypsy-style
  clocks: [
    { label: "EST", tz: "America/New_York" },
    { label: "CET", tz: "Europe/Paris" },
    { label: "IST", tz: "Asia/Kolkata" },
  ],
};

export const manifesto = {
  eyebrow: "What we do",
  body: "We're a team of ghostwriters, strategists, and brand thinkers turning founders' raw ideas into the kind of presence that gets noticed, remembered, and trusted.",
  body2:
    "From LinkedIn posts and founder blogs to newsletters and Substack essays, we help exceptional people articulate what they already know.",
  highlight:
    "We bring great writing to\nexceptional founders.\n(We work with a few, on purpose).",
};

export const audience = {
  title: "This is for founders\nwho have more to say.",
  body: "The ideas are there. The experience is there. What's missing is the time, structure, and words to turn them into writing people actually remember.",
  items: [
    {
      no: "01",
      tag: "About to launch",
      body: 'Building something new, while your online presence still says "Software Engineer at [old company]."',
    },
    {
      no: "02",
      tag: "Under the radar",
      body: "Running a remarkable company that deserves to be better known.",
    },
    {
      no: "03",
      tag: "Untapped expertise",
      body: "A decade of hard-earned lessons that have never made it past conversations and conference stages.",
    },
    {
      no: "04",
      tag: "Time-starved",
      body: "You know you should be writing more. LinkedIn, blogs, newsletters, Substack. It just never reaches the top of the list.",
    },
  ],
};

export const stages = {
  items: [
    {
      title: "Early-Stage",
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=700&auto=format&fit=crop",
      alt: "Writing on a laptop",
      body: "Turn your ideas into a distinct voice. We help you shape your thinking into writing people remember, creating a strong foundation for everything that follows.",
    },
    {
      title: "Growth-Stage",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop",
      alt: "Audience growth analytics",
      body: "As your company grows, your writing should too. We help your ideas evolve alongside your business, ensuring your voice stays as thoughtful as your ambitions.",
    },
  ],
  commitment: {
    heading: "Why a 3-month minimum commitment?",
    subheading: "Because good ghostwriting takes time.",
    body: [
      "The first month is spent understanding your voice. The next few months are where consistency starts paying off and we learn what resonates with your audience.",
      "Anything shorter usually means stopping just as the work starts getting better.",
    ],
  },
};

export const principles = {
  title: "How we (love to) work:",
  items: [
    {
      no: "01",
      title: "Direction over deliverables",
      body: "Every piece begins with a simple question: What do you want to be known for? The writing follows from there.",
    },
    {
      no: "02",
      title: "Consistency over bureaucracy",
      body: "A thoughtful voice, repeated over time, will always outlast a single viral post.",
    },
    {
      no: "03",
      title: "Collaboration over transaction",
      body: "Good writing isn't handed off. It's discovered together, through conversations that sharpen ideas before they become words.",
    },
    {
      no: "04",
      title: "Craft over quantity",
      body: "Every piece should earn its place. We'd rather publish something memorable than simply publish more.",
    },
  ],
};

export const insights = {
  title: "The latest thinking",
  cta: { label: "Discover insights", href: "/blog" },
  items: [
    {
      tag: "Essay",
      date: "06.18.2025",
      title: "Why most founder LinkedIn sounds the same — and how to escape it.",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/why-most-founder-linkedin-sounds-the-same",
    },
    {
      tag: "Playbook",
      date: "05.30.2025",
      title: "The first 90 days of a ghostwriting partnership.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/first-90-days-of-a-ghostwriting-partnership",
    },
    {
      tag: "Field notes",
      date: "05.12.2025",
      title: "What a hundred founder posts taught us about trust.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/what-a-hundred-founder-posts-taught-us-about-trust",
    },
  ],
};

/* ------------------------------------------------------------------ *
 *  Blog / Journal — index masthead + posts.
 *  Body is an array of typed blocks rendered by the article page.
 *  Block types: "p" | "h2" | "quote" | "list".
 * ------------------------------------------------------------------ */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  tag: string;
  date: string; // display date
  readingTime: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  author: { name: string; role: string };
  body: BlogBlock[];
};

export const blog = {
  eyebrow: "Journal",
  title: "Notes on writing,\nfounders, and trust.",
  intro:
    "Field notes, playbooks, and the occasional argument — what we've learned drafting the words founders put their name to.",
  featuredLabel: "Latest",
  allLabel: "More from the journal",
  filters: ["All", "Essay", "Playbook", "Field notes"],
  shareLabel: "Share",
  aboutLabel: "About",
  about:
    "The Draftory is a content team for founders. We bring great writing to a small roster of exceptional builders — turning raw ideas into a presence that gets noticed, remembered, and trusted.",
  relatedLabel: "Related",
  subscribe: {
    eyebrow: "The newsletter",
    title: "An occasional note,\nworth the inbox space.",
    body: "Founder-focused thinking on writing, presence, and trust — a few times a month. No spam, unsubscribe anytime.",
    placeholder: "you@company.com",
    button: "Subscribe",
    success: "You're in — watch your inbox.",
  },
  posts: [
    {
      slug: "why-most-founder-linkedin-sounds-the-same",
      tag: "Essay",
      date: "June 18, 2025",
      readingTime: "6 min read",
      title:
        "Why most founder LinkedIn sounds the same — and how to escape it.",
      excerpt:
        "Scroll any founder's feed and you'll meet the same voice: confident, vague, allergic to a real opinion. Here's where the sameness comes from, and the four moves that break it.",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
      alt: "Person working at a laptop",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "Open LinkedIn, scroll for sixty seconds, and you'll notice something strange: a thousand different founders, building a thousand different companies, all sounding like the same person. The cadence is identical. The hooks rhyme. Every post arrives at the same tidy lesson, delivered with the same practised humility.",
        },
        {
          type: "p",
          text: "It isn't that founders have nothing to say. It's that the format has quietly trained everyone to say it the same way — and the algorithm rewards the imitation. The result is a feed of writing that is technically competent and completely forgettable.",
        },
        { type: "h2", text: "The sameness has a source" },
        {
          type: "p",
          text: "Most founder content is reverse-engineered from whatever went viral last quarter. You see a post do numbers, you absorb its shape — the one-line opener, the list of five, the contrarian-but-safe take — and you reproduce the skeleton with your own details poured in. Multiply that across an industry and you get a monoculture.",
        },
        {
          type: "quote",
          text: "Sounding like everyone else is the fastest way to be trusted by no one.",
        },
        {
          type: "p",
          text: "The cruel part is that the sameness works just well enough to be addictive. You'll get likes. You'll get the dopamine. What you won't get is the thing you actually wanted: to be the person a reader thinks of, by name, when the problem you solve shows up in their life.",
        },
        { type: "h2", text: "Four moves that break it" },
        {
          type: "list",
          items: [
            "Write from a position, not a topic. A topic is \"hiring.\" A position is \"we stopped doing take-home assignments and our offer-accept rate went up.\" One is a category; the other is a claim someone could disagree with.",
            "Keep the texture. The specific number, the awkward detail, the thing you almost cut for being too small — that's the part a reader remembers. Generality is what makes posts interchangeable.",
            "Let one real opinion through per post. Not a hot take for engagement. A thing you'd actually defend in a room.",
            "Sound like you talk. Read it aloud. If you'd never say it to a colleague over coffee, it doesn't belong in your voice.",
          ],
        },
        {
          type: "p",
          text: "None of this is about being louder or more contrarian. It's about being legible — letting a specific human with specific opinions show through the writing. That's the thing the format flattens, and it's the only thing that earns trust at scale.",
        },
        {
          type: "p",
          text: "The good news: almost no one is doing it. In a feed engineered for sameness, sounding like yourself is the whole edge.",
        },
      ],
    },
    {
      slug: "first-90-days-of-a-ghostwriting-partnership",
      tag: "Playbook",
      date: "May 30, 2025",
      readingTime: "8 min read",
      title: "The first 90 days of a ghostwriting partnership.",
      excerpt:
        "Good ghostwriting doesn't start with a post. It starts with listening. Here's exactly how we spend the first three months finding a founder's voice before a single word goes public.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop",
      alt: "Open notebook and coffee on a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "The biggest myth about ghostwriting is that it's a writing problem. It isn't. It's a listening problem. The words are the easy part; the hard part is learning to think the way the founder thinks, so the writing reads like them on their sharpest day.",
        },
        {
          type: "p",
          text: "That's why our first ninety days look almost nothing like a content calendar. Here's how the time actually gets spent.",
        },
        { type: "h2", text: "Weeks 1–3: Listening" },
        {
          type: "p",
          text: "We start with two long conversations — two hours each — about the things that don't fit on a website. How you got here. What you believe that your industry doesn't. The argument you keep having. We're not collecting post ideas; we're collecting the way you reason.",
        },
        {
          type: "quote",
          text: "If we've done the listening right, the founder reads the first draft and says, \"that's exactly what I meant\" — about something they never actually said.",
        },
        { type: "h2", text: "Weeks 4–6: Calibrating the voice" },
        {
          type: "p",
          text: "Now we write — but only for you. Drafts that never get published, built purely to find the line. Too formal? Pull it back. Too breezy? Add some weight. We're tuning rhythm, vocabulary, and how much of an opinion feels true to you before anything is at stake.",
        },
        {
          type: "list",
          items: [
            "A short voice guide: words you use, words you'd never use, the shape of a sentence that sounds like you.",
            "Three to five \"anchor\" pieces — the posts that define the register everything else gets measured against.",
            "A running bank of stories and beliefs we'll draw from for months.",
          ],
        },
        { type: "h2", text: "Weeks 7–12: Building the buffer, then going live" },
        {
          type: "p",
          text: "Before a single post goes public, we build three weeks of content ahead. Consistency is impossible if every post is a scramble; a buffer is what lets a founder publish on rhythm through travel, fundraising, and the inevitable chaos.",
        },
        {
          type: "p",
          text: "Only then do we start posting — quietly, consistently, and always with your hand on the final yes. By day ninety, the goal isn't a viral hit. It's a voice that's unmistakably yours, running on a cadence you can sustain for years.",
        },
      ],
    },
    {
      slug: "what-a-hundred-founder-posts-taught-us-about-trust",
      tag: "Field notes",
      date: "May 12, 2025",
      readingTime: "5 min read",
      title: "What a hundred founder posts taught us about trust.",
      excerpt:
        "We went back through a hundred posts and sorted them by what actually built trust versus what just bought attention. The pattern was clearer — and quieter — than we expected.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
      alt: "Notes and a pen on a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "We pulled a hundred founder posts we'd worked on and asked a blunt question of each: did this build trust, or just borrow attention? They're not the same thing, and the difference shaped everything we believe about the work.",
        },
        { type: "h2", text: "Attention is loud. Trust is specific." },
        {
          type: "p",
          text: "The highest-reach posts were almost never the ones that moved a reader to reach out. Reach came from broad, agreeable takes. Trust came from narrow, slightly uncomfortable honesty — the post that admitted a mistake, named a real number, or took a side.",
        },
        {
          type: "quote",
          text: "Readers don't trust the founder who's always right. They trust the one who's willing to be specific about being wrong.",
        },
        { type: "h2", text: "Three quiet patterns" },
        {
          type: "list",
          items: [
            "Specificity beat polish. A rough post with a real story out-converted a smooth post with none, every time.",
            "Consistency compounded. The trust didn't come from any single post — it came from showing up in the same voice, week after week, until the reader felt they knew you.",
            "Restraint signalled confidence. The founders who didn't oversell, didn't end every post with a pitch, and didn't chase every trend read as the most credible.",
          ],
        },
        {
          type: "p",
          text: "If there's one takeaway, it's that trust is a slow medium. You can buy attention in an afternoon. Trust is built one specific, consistent, slightly brave post at a time — which is exactly why so few people bother to build it.",
        },
      ],
    },
    {
      slug: "the-case-against-posting-every-day",
      tag: "Essay",
      date: "April 28, 2025",
      readingTime: "4 min read",
      title: "The case against posting every day.",
      excerpt:
        "\"Post daily or the algorithm forgets you\" is the most repeated advice in founder content. It's also wrong for almost everyone we work with. Here's the math nobody runs.",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
      alt: "Calendar and planning on a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "Somewhere along the way, \"post consistently\" got mistranslated into \"post daily,\" and a generation of founders started treating volume as the goal. The advice isn't wrong so much as misapplied — and for most of the people we work with, it actively backfires.",
        },
        { type: "h2", text: "The math nobody runs" },
        {
          type: "p",
          text: "A daily cadence means roughly thirty pieces a month. Unless you have a content team, the quality of those thirty pieces is bounded by the time you can give them — which means most are filler. And filler doesn't just fail to help; it teaches your audience to scroll past your name.",
        },
        {
          type: "quote",
          text: "Frequency is a multiplier, not a substitute. Multiply a weak post by seven and you've trained people to ignore you faster.",
        },
        { type: "h2", text: "What we recommend instead" },
        {
          type: "list",
          items: [
            "Two to three genuinely considered posts a week beats seven thin ones — for reach and for trust.",
            "Consistency is about reliability, not volume. A reader should know you'll show up; they don't need you in their feed every morning.",
            "Protect the buffer. Writing ahead is what keeps quality steady when your week falls apart.",
          ],
        },
        {
          type: "p",
          text: "The founders with the strongest presences almost never post daily. They post like they mean it, on a rhythm they can hold for years. That's the whole game.",
        },
      ],
    },
  ] as BlogPost[],
};

export const process = {
  title: "The process",
  items: [
    {
      no: "01",
      title: "Discovery",
      body: "Two long conversations to understand your story, your goals, and how you think. Everything we write traces back to this.",
    },
    {
      no: "02",
      title: "The brief",
      body: "Between calls, we send over a short questionnaire. It fills in the gaps that don't come up in conversation.",
    },
    {
      no: "03",
      title: "Finding your voice",
      body: 'Two more conversations to pressure-test direction and define what "you" sounds like in writing.',
    },
    {
      no: "04",
      title: "Writing, then posting",
      body: "We start drafting. Once we have three weeks of content ready, we start posting on a consistent rhythm.",
    },
    {
      no: "05",
      title: "Iteration",
      body: "We track what's resonating and adjust your voice, topics, and format around what your audience is actually engaging with.",
    },
  ],
};

/* Editorial gallery — warm-toned placeholder imagery.
 * Swap these for your own shots; the layout adapts to any set.        */
export const gallery = [
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop", alt: "Founder portrait" },
  { src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=900&auto=format&fit=crop", alt: "Writing desk" },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=900&auto=format&fit=crop", alt: "Portrait in profile" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=900&auto=format&fit=crop", alt: "Working on laptop" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop", alt: "Founder headshot" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop", alt: "Strategy notes" },
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop", alt: "Founder portrait" },
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop", alt: "Portrait" },
];

export const cta = {
  kicker: "Get in touch",
  title: "Your ideas,\ndrafted into words\nworth posting.",
  action: "Get in touch",
  note: "We're taking on 5 founders this quarter.",
};

/* Contact form — field set mirrors zypsy.com/contact (sans the fundraising
 * question). Only the first three fields are required; everything else is
 * optional. Edit labels / options here, never in the component.            */
export const contactForm = {
  eyebrow: "Tell us about you",
  title: "Let's talk.",
  body: "A few questions to get a feel for you and your work. Only the first three are required — the rest just help us prepare.",
  // text / email / url single-line inputs
  fields: [
    { name: "fullName", label: "Full name", type: "text", required: true },
    { name: "jobTitle", label: "Job title", type: "text", required: true },
    { name: "email", label: "Your email", type: "email", required: true },
    { name: "linkedin", label: "LinkedIn URL", type: "url", required: false },
    { name: "company", label: "Company name", type: "text", required: false },
    { name: "website", label: "Company website", type: "url", required: false },
  ],
  category: {
    name: "category",
    label: "Category",
    placeholder: "Select a category",
    options: [
      "AI", "Analytics", "AR / VR", "Community", "Crypto / Blockchain",
      "Developer Tools", "Energy", "Financial Services", "Gaming", "Hardware",
      "Healthcare", "Infrastructure", "Investing", "Marketplace", "SaaS",
      "Security", "Wellness", "Other",
    ],
  },
  productDescription: {
    name: "product",
    label: "Description of product (3–5 sentences)",
  },
  companySize: {
    name: "companySize",
    label: "Company size",
    options: ["1–5", "6–20", "21–50", "51–100", "101–250", "251–500", "501–1000", "1001+"],
  },
  // adapted from zypsy's design-service options to The Draftory's services
  workType: {
    name: "workType",
    label: "What do you need help with?",
    options: ["LinkedIn ghostwriting", "Personal brand & positioning", "Long-form essays & newsletters", "Other"],
  },
  needs: {
    name: "needs",
    label: "Tell us about your content goals in detail",
  },
  hearAbout: {
    name: "hearAbout",
    label: "How did you hear about us?",
    placeholder: "Select an option",
    options: ["Google Search", "Referral", "Newsletter", "Social media", "Word of mouth", "Other"],
  },
  region: {
    name: "region",
    label: "What region are you based in?",
    placeholder: "Select a region",
    options: ["North America", "Latin America", "Europe", "Middle East & Africa", "Asia", "Australia & New Zealand", "Other / Not listed"],
  },
  referral: {
    name: "referral",
    label: "Were you referred by anyone?",
  },
  consent: "Yes, I agree to the Terms of Service and Privacy Policy.",
  newsletter: "Subscribe for the occasional founder-focused note. No spam.",
  submit: "Send it over",
  success: {
    title: "Thanks — we've got it.",
    body: "We read every note personally and will be in touch within a couple of days.",
  },
};

export const faqs = {
  title: "Common questions.",
  items: [
    {
      q: "How do you capture a founder's voice without it sounding generic?",
      a: [
        "We spend far more time listening than writing. Through conversations, interviews, and an evolving story bank, we learn how you think before we write a single sentence.",
        "Every piece begins with your ideas, your experiences, and your perspective. Our role is to shape them with clarity, structure, and rhythm while preserving the voice that makes them uniquely yours.",
        "If we've done our job well, the writing won't sound like us. It'll sound like you on your best day.",
      ],
    },
    {
      q: "What do you actually write?",
      a: [
        "Most partnerships include a mix of LinkedIn posts, founder blogs, newsletters, essays, and long-form thought leadership. The format changes. The thinking stays consistent.",
      ],
    },
    {
      q: "How does the process work?",
      a: [
        "We begin with a series of conversations to understand your ideas, experiences, and ambitions. From there, we build a strategy, create a story bank, draft every piece, refine it with your feedback, and manage the publishing rhythm together.",
      ],
    },
    {
      q: "How involved do I need to be?",
      a: [
        "Less than most founders expect. After the initial discovery phase, most of your involvement comes down to conversations and reviewing drafts. We handle the research, planning, writing, and iteration.",
      ],
    },
    {
      q: "Who is The Draftory best suited for?",
      a: [
        "Founders and executives with real experience, strong opinions, and long-term ambitions. We work best with people who want to build credibility over time, not chase attention for a week.",
      ],
    },
    {
      q: "What's the difference between The Draftory and a content agency?",
      a: [
        "Content agencies are built for volume. We're built for voice. Rather than producing content at scale, we help founders develop a distinctive way of thinking and communicating that compounds over time.",
      ],
    },
    {
      q: "Do you only work with LinkedIn?",
      a: [
        "No. LinkedIn is often where conversations begin, but many of our partnerships extend into founder blogs, newsletters, essays, Substack, website content, and other long-form writing.",
      ],
    },
  ],
};

export const footer = {
  big: "Words worth\nyour name.",
  blurb:
    "We bring great writing to exceptional founders — turning raw ideas into a presence that gets noticed, remembered, and trusted.",
  columns: [
    {
      heading: "Studio",
      links: [
        { label: "Approach", href: "#approach" },
        { label: "Who it's for", href: "#audience" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Elsewhere",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "X — Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "hello@thedraftory.com", href: "mailto:hello@thedraftory.com" },
      ],
    },
  ],
};
