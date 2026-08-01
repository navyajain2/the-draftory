/* ------------------------------------------------------------------ *
 *  All site copy lives here.  Edit text without touching components.
 * ------------------------------------------------------------------ */

export const brand = {
  name: "The Draftory",
  email: "navya@thedraftory.com",
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Who it's for", href: "#audience" },
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
      tag: "Playbook",
      date: "July 1, 2025",
      title: "The founder's guide to LinkedIn ghostwriting.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/the-founders-guide-to-linkedin-ghostwriting",
    },
    {
      tag: "Essay",
      date: "June 25, 2025",
      title: "LinkedIn ghostwriting for YC founders: why the best operators get help writing.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/linkedin-ghostwriting-for-yc-founders",
    },
    {
      tag: "Essay",
      date: "June 20, 2025",
      title: "How VC-backed founders build thought leadership without writing it themselves.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1100&auto=format&fit=crop",
      href: "/blog/how-vc-backed-founders-build-thought-leadership",
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
  | { type: "list"; items: string[] }
  | { type: "html"; html: string };

export type BlogPost = {
  slug: string;
  tag: string;
  date: string; // display date
  isoDate: string; // ISO 8601 for schema / OG
  readingTime: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  author: { name: string; role: string };
  body: BlogBlock[];
};

export const blog = {
  eyebrow: "",
  title: "Notes on writing,\nfounders, and trust.",
  intro:
    "Field notes, playbooks, and the occasional argument: what we've learned drafting the words founders put their name to.",
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
      isoDate: "2025-06-18",
      readingTime: "6 min read",
      title:
        "Why most founder LinkedIn sounds the same, and how to escape it.",
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
      isoDate: "2025-05-30",
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
      isoDate: "2025-05-12",
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
      isoDate: "2025-04-28",
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
    {
      slug: "the-founders-guide-to-linkedin-ghostwriting",
      tag: "Playbook",
      date: "July 1, 2025",
      isoDate: "2025-07-01",
      readingTime: "9 min read",
      title: "The Founder's Guide to LinkedIn Ghostwriting.",
      excerpt:
        "Everything you actually need to know before hiring a ghostwriter for LinkedIn — what good looks like, what it costs, how the process works, and the one question that separates ghostwriters worth working with from everyone else.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
      alt: "Founder at desk writing on laptop",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "LinkedIn ghostwriting has gone from a whispered secret to an open industry in about three years. Founders use it. Executives use it. Investors use it. And yet the quality of what's out there varies so wildly that 'hiring a ghostwriter' can mean anything from transformative to catastrophic.",
        },
        {
          type: "p",
          text: "This guide is for founders who are thinking seriously about it: what you should know before you start, what good looks like, what it costs, how the process actually works, and how to avoid the very common mistakes that waste both time and money.",
        },
        { type: "h2", text: "Why founders hire ghostwriters in the first place" },
        {
          type: "p",
          text: "The honest answer is time — but it's rarely just time. Most founders we speak to have plenty of opinions. They talk compellingly in meetings. They know exactly what they want to be known for. What they lack is the bandwidth to turn those raw thoughts into something publishable, consistently, week after week.",
        },
        {
          type: "p",
          text: "The word 'consistently' is doing the heavy lifting in that sentence. The real value of a ghostwriter isn't a single great post. It's thirty great posts over six months, at a cadence that builds a real audience rather than one that forgets you between sporadic appearances.",
        },
        {
          type: "quote",
          text: "The best LinkedIn ghostwriting is invisible. The reader should never suspect the founder didn't write it themselves.",
        },
        { type: "h2", text: "What a good ghostwriting process actually looks like" },
        {
          type: "p",
          text: "Any ghostwriter worth hiring will spend more time listening than writing, especially at the start. Expect a series of long-form conversations — not a questionnaire, not a brief, actual conversations — where the ghostwriter is trying to understand how you think, not just what you think.",
        },
        {
          type: "list",
          items: [
            "Voice discovery: 2–4 hours of structured conversation before a single word is drafted. The output is a working voice guide and a bank of story prompts drawn directly from your experience.",
            "Draft and calibrate: The first few pieces are test drafts — the ghostwriter is tuning to your register, your vocabulary, your tolerance for opinion. Expect to give detailed feedback. This is where the voice actually gets built.",
            "Buffer and publish: Before going live, you should have 3–4 weeks of content ready. Publishing from a buffer removes the panic and lets you maintain quality under real-world pressure.",
            "Iteration: A good ghostwriter tracks what resonates and adjusts the strategy, not just the writing. Voice, format, topics, timing — all of it gets refined over months.",
          ],
        },
        { type: "h2", text: "How much does a LinkedIn ghostwriter cost?" },
        {
          type: "p",
          text: "The market for founder ghostwriting ranges from about $1,500/month (content mills, offshore teams, AI-assisted) to $15,000+/month (senior strategists working with a small number of high-profile clients). Most reputable boutique operations land between $3,000 and $8,000/month for three to five posts per week, with a minimum commitment of three months.",
        },
        {
          type: "p",
          text: "That three-month minimum isn't arbitrary. The first month is almost entirely investment — you're paying for voice research, not output. The second and third months are where the calibration starts paying off and the writing actually improves. If a ghostwriter offers a one-month trial, they're optimising for their business model, not your results.",
        },
        { type: "h2", text: "The one question that separates good ghostwriters from bad ones" },
        {
          type: "p",
          text: "Ask them: 'What's a piece of content you've talked a client out of?' If they can answer with a specific story — a post that would have been off-brand, a viral angle that would have felt hollow, a topic the audience wouldn't have cared about — you're talking to someone who understands their job. If they can't, they're an order-taker, not a partner.",
        },
        {
          type: "p",
          text: "The best ghostwriting relationships are ones where the ghostwriter occasionally pushes back. Your brand has a logic to it. Someone should be protecting that logic, not just producing content to fill a calendar.",
        },
        { type: "h2", text: "What to send a ghostwriter before you start" },
        {
          type: "list",
          items: [
            "Three to five posts or pieces of writing you genuinely like — your own or someone else's. Not because the ghostwriter will copy them, but because they reveal your aesthetic sensibility faster than any brief.",
            "The last three LinkedIn posts you published, with your honest notes on what felt right and wrong about each one.",
            "One paragraph on what you want to be known for in five years — not your company, you specifically.",
            "Any subjects you consider off-limits or wouldn't be comfortable defending publicly.",
          ],
        },
        {
          type: "p",
          text: "A ghostwriter who doesn't ask you for any of this before starting is not going to write in your voice. They're going to write in a voice, and hope you like it.",
        },
      ],
    },
    {
      slug: "linkedin-ghostwriting-for-yc-founders",
      tag: "Essay",
      date: "June 25, 2025",
      isoDate: "2025-06-25",
      readingTime: "7 min read",
      title: "LinkedIn Ghostwriting for YC Founders: Why the Best Operators Get Help Writing.",
      excerpt:
        "Y Combinator teaches you to build fast, talk to users, and launch. It doesn't teach you to build an audience. Here's why more YC founders are turning to ghostwriters — and what makes the great ones different from everyone else.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop",
      alt: "Founder in a meeting room",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "YC teaches you to move fast. Demo Day teaches you to pitch. Neither teaches you to build an audience — and that gap shows up clearly in the LinkedIn feeds of most YC founders, where incredible companies are represented by writing that does them no justice.",
        },
        {
          type: "p",
          text: "The irony is that YC founders have more to say than almost anyone. They've chosen hard problems. They've made unusual bets. They've learned things in twelve weeks that most people never learn. The audience is there if they can reach it. The writing is the bottleneck.",
        },
        { type: "h2", text: "What makes YC founders different to ghostwrite for" },
        {
          type: "p",
          text: "The strongest thing a YC founder has is credibility — the batch, the company, the problem they've chosen to work on. But credibility alone doesn't build an audience. Credibility plus consistent, specific, honest writing does.",
        },
        {
          type: "p",
          text: "The YC founders who break through on LinkedIn aren't the ones with the flashiest companies. They're the ones willing to write about the specifics: the mistake they made in batch, the counterintuitive thing they learned from a user call, the reason they turned down an acquisition offer. Specificity is the differentiator, and it's exactly what most ghostwriters flatten out.",
        },
        {
          type: "quote",
          text: "A YC badge is a beginning, not a strategy. The founders who build real audiences do it with the details everyone else is too polished to share.",
        },
        { type: "h2", text: "The three types of YC founder content that actually work" },
        {
          type: "list",
          items: [
            "The founder-as-customer story. You built this because you had the problem yourself. That origin story, told with specific detail, is more powerful than any pitch deck summary.",
            "The counter-narrative. YC is full of people with strong opinions that cut against conventional wisdom. 'Everyone said X. We did Y. Here's what happened.' This is the format that earns followers and trust simultaneously.",
            "The build-in-public update. Not a metrics dump, but a specific account of what you tried, what worked, and what surprised you. The goal isn't transparency for its own sake — it's the kind of honesty that makes people want to follow your journey.",
          ],
        },
        { type: "h2", text: "Why YC founders use ghostwriters" },
        {
          type: "p",
          text: "The honest answer is bandwidth. Batch is brutal. Post-batch is more brutal. There are users to talk to, hires to make, investors to update, and a product to build. Writing LinkedIn posts is the thing that falls off the list first — not because it isn't valuable, but because it isn't urgent.",
        },
        {
          type: "p",
          text: "The problem with that calculation is that the best time to build an audience is before you need one. A YC founder who starts posting consistently during batch, or in the months immediately after, will have a meaningfully larger platform by the time they raise their Series A than one who waits until the company is established.",
        },
        { type: "h2", text: "What to look for in a ghostwriter as a YC founder" },
        {
          type: "p",
          text: "Not all ghostwriters understand the startup world. Many are trained on B2B SaaS templates or marketing-speak that will make you sound like a press release. What you need is someone who reads Hacker News without prompting, understands why founders talk the way they do, and won't try to polish you into a LinkedIn influencer.",
        },
        {
          type: "p",
          text: "The right ghostwriter for a YC founder makes you sound like your sharpest self on a long Zoom call — not like you hired someone to write your posts. If you read a draft and immediately want to change it to sound more like how you'd actually say it in conversation, that's not the right ghostwriter.",
        },
        {
          type: "p",
          text: "The right one makes you read it and think: I couldn't have said it better myself.",
        },
      ],
    },
    {
      slug: "how-vc-backed-founders-build-thought-leadership",
      tag: "Essay",
      date: "June 20, 2025",
      isoDate: "2025-06-20",
      readingTime: "6 min read",
      title: "How VC-Backed Founders Build Thought Leadership (Without Writing It Themselves).",
      excerpt:
        "Founders backed by Sequoia, a16z, Benchmark, and the top-tier funds share one thing beyond great companies: consistent, specific, trusted voices online. Almost none of them write alone. Here's how it works.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop",
      alt: "Two founders in conversation",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "There's a common assumption that the best-known founders write their own content. A few do. Most don't — or more precisely, most don't write it alone. Behind the LinkedIn posts, the Substack essays, and the long-form threads that go viral is usually some combination of a ghostwriter, a chief of staff, a comms lead, or a trusted editor who shapes the raw material into something worth reading.",
        },
        {
          type: "p",
          text: "This isn't a secret. It's a system. And for founders backed by Sequoia, a16z, Benchmark, Accel, and the other top-tier firms, building that system early is increasingly considered part of the job.",
        },
        { type: "h2", text: "Why investors want founders online" },
        {
          type: "p",
          text: "The best investors understand that a founder's personal brand is a company asset. A founder with 50,000 followers and a reputation for insightful writing attracts better candidates, earlier. It attracts press attention without a PR agency. It gives investors a distribution advantage when they want to amplify a portfolio announcement. And it builds the kind of trust with potential customers that no amount of paid acquisition can buy.",
        },
        {
          type: "quote",
          text: "The best investors don't just fund companies. They fund founders who can bring others along for the journey — and writing is how you bring people along at scale.",
        },
        { type: "h2", text: "What the best-known VC-backed founders have in common" },
        {
          type: "p",
          text: "Consistency is the most obvious pattern. The founders who've built real audiences online don't post in bursts — they show up steadily, at a cadence their audience learns to expect. That consistency is almost impossible to maintain alone while running a company, which is exactly why support structures exist.",
        },
        {
          type: "p",
          text: "The second pattern is specificity. The content that travels from these founders isn't high-level strategy or motivational filler. It's specific: a decision they made and why, a number they watched change and what it taught them, an assumption they held that turned out to be wrong. The specificity is what makes it credible, and credibility is what makes people follow you rather than just like a post once.",
        },
        {
          type: "list",
          items: [
            "Sequoia's portfolio has produced some of the most-followed founders on LinkedIn — not by accident, but because the firm has actively encouraged founders to invest in their online presence as part of the company-building process.",
            "a16z founders routinely publish essays and long-form posts that are clearly the product of a content team or editor — polished, argued, and on-message in ways that casual posting rarely achieves.",
            "Benchmark's approach tends to favour depth over frequency: fewer posts, more substance, a higher bar for what goes out. The result is a different kind of authority — one that signals rigour rather than reach.",
          ],
        },
        { type: "h2", text: "The content team model for VC-backed founders" },
        {
          type: "p",
          text: "For early-stage founders (pre-Series B), the typical model is a single ghostwriter or editorial partner who works closely with the founder: conducting regular voice sessions, building a bank of story material, drafting everything from LinkedIn posts to newsletter issues, and iterating based on what the audience responds to.",
        },
        {
          type: "p",
          text: "For later-stage founders, the structure often grows: a comms lead, a ghostwriter for long-form content, a separate person managing distribution and analytics. But even at that stage, the foundation is the same — a trusted partner who understands how the founder thinks and can translate that into writing.",
        },
        { type: "h2", text: "The one thing that doesn't scale" },
        {
          type: "p",
          text: "The raw material. No ghostwriter, no AI tool, no content team can manufacture the ideas, the experiences, and the specific opinions that make a founder's writing worth reading. What they can do is make it much easier for those ideas to get out of the founder's head and into the world — consistently, clearly, and in a voice that actually sounds like them.",
        },
        {
          type: "p",
          text: "The founders who do this well don't think of it as outsourcing their voice. They think of it as building a system so their voice can reach more people, more often, without requiring them to become a content creator.",
        },
      ],
    },
    {
      slug: "how-much-does-a-ghostwriter-cost",
      tag: "Field notes",
      date: "June 10, 2025",
      isoDate: "2025-06-10",
      readingTime: "5 min read",
      title: "How Much Does a Ghostwriter Cost? (A Founder's Pricing Guide for 2025).",
      excerpt:
        "Ghostwriting prices vary by a factor of ten and the difference isn't always quality. Here's what the market actually looks like in 2025, what drives the price, and what to watch out for at each tier.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
      alt: "Writing and notes on a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "The ghostwriting market has no standard pricing. You can find someone to write LinkedIn posts for $300/month or $30,000/month, and the surface-level promise is often identical. Here's a clear breakdown of what the market actually looks like — and what you're actually buying at each level.",
        },
        { type: "h2", text: "The four price tiers" },
        {
          type: "list",
          items: [
            "$500–$1,500/month — Content mills, AI-assisted services, offshore teams. High volume, low customisation. Posts may be on-topic but they won't be in your voice. Fine for filling a calendar; bad for building a brand.",
            "$2,000–$4,000/month — Freelance ghostwriters or small studios working with multiple clients. Quality varies significantly by individual. At this tier you can find genuinely good writing, but you'll need to vet carefully and expect more revision cycles while the voice is calibrated.",
            "$4,000–$8,000/month — Boutique studios and senior ghostwriters working with a small client roster. This is where real voice development happens: structured discovery, a proper process, someone invested in your long-term results. Most founders who take this seriously eventually land here.",
            "$10,000+/month — High-profile ghostwriters, agency retainers with comms strategy included, or teams managing multiple content formats simultaneously. Warranted for founders who have an existing large audience and need serious strategic and editorial support.",
          ],
        },
        { type: "h2", text: "What drives the price beyond quality" },
        {
          type: "p",
          text: "The biggest price driver is scope, not skill. A ghostwriter charging $2,000/month may be just as talented as one charging $6,000 — they're simply doing less. The higher-end engagement typically includes content strategy, editorial direction, platform analytics, and a higher volume of content across multiple formats.",
        },
        {
          type: "p",
          text: "The second driver is process rigour. Building a real voice requires sustained investment in discovery: long conversations, a story bank, an evolving brief. Ghostwriters who skip this are faster to start and cheaper to run, but the output rarely holds up over time.",
        },
        {
          type: "quote",
          text: "You don't pay for the words. You pay for the thinking behind the words — the ability to sound like you without you having to write it.",
        },
        { type: "h2", text: "What to watch out for at each tier" },
        {
          type: "p",
          text: "At the low end: generic content that could have been written by anyone, for anyone. The tell is templates — posts that follow the same structure every week, regardless of what you actually have to say.",
        },
        {
          type: "p",
          text: "At the mid tier: inconsistent voice, especially in the first few months. The ghostwriter is still calibrating, which is normal — but be wary of anyone who doesn't have a structured process for doing so. If they're not asking you good questions, the writing will reflect that.",
        },
        {
          type: "p",
          text: "At the high end: make sure you're paying for output, not just access. Premium ghostwriting relationships should have clear deliverables, regular feedback cycles, and evidence of an evolving strategy — not just a monthly invoice and the occasional draft.",
        },
        { type: "h2", text: "The commitment question" },
        {
          type: "p",
          text: "Almost every serious ghostwriting engagement has a minimum commitment, usually three months. This isn't a cash grab — it's a structural requirement. The first month is discovery. The second is calibration. The third is where you see the first real results. If you're unwilling to commit three months, you're unlikely to see meaningful results regardless of who you hire.",
        },
      ],
    },
    {
      slug: "should-founders-write-their-own-content",
      tag: "Essay",
      date: "June 3, 2025",
      isoDate: "2025-06-03",
      readingTime: "5 min read",
      title: "Should Founders Write Their Own Content?",
      excerpt:
        "The most common question we get asked — and the most misunderstood one. Here's the honest answer, which is more nuanced than either the 'authenticity' crowd or the 'just outsource it' crowd will tell you.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
      alt: "Person writing in a notebook",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        {
          type: "p",
          text: "The question comes up almost every time we speak to a new founder: should I be writing this myself? And the honest answer is that it's the wrong question. The right question is: what does 'writing it myself' actually mean — and what are you optimising for?",
        },
        { type: "h2", text: "What 'authentic' content actually requires" },
        {
          type: "p",
          text: "Authentic content doesn't mean unassisted content. Every published author has an editor. Every speechmaker has a speechwriter. What makes writing feel authentic is whether it sounds like the person who's putting their name to it — not whether they typed every word.",
        },
        {
          type: "p",
          text: "The founders who produce the most trusted content aren't necessarily the ones writing alone. They're the ones whose writing reflects how they actually think: their priorities, their vocabulary, their specific opinions. Whether they wrote it themselves or worked with a ghostwriter is beside the point.",
        },
        {
          type: "quote",
          text: "No one asks whether a CEO wrote their own earnings call. They ask whether it reflects the company's actual thinking. The same logic applies to LinkedIn.",
        },
        { type: "h2", text: "When you should write your own content" },
        {
          type: "list",
          items: [
            "You genuinely enjoy writing and have the time to do it consistently. Not occasionally — consistently, week after week, for months.",
            "You're in the early stages of finding your voice and need the repetition to understand what you actually want to say.",
            "Your content strategy depends on real-time commentary — reacting to news, posting in the moment, engaging in fast-moving conversations. A ghostwriter can't match that speed.",
          ],
        },
        { type: "h2", text: "When you should get help" },
        {
          type: "list",
          items: [
            "You have lots to say but writing is the bottleneck — not ideas, not experience, not opinions. Just the act of getting it onto the page.",
            "You've tried writing consistently and failed. Not once, but repeatedly. The intention is always there; the execution isn't.",
            "You're at a stage where your time is worth more than the cost of a ghostwriter. A Series A founder spending four hours a week on LinkedIn posts is making a strange trade.",
          ],
        },
        { type: "h2", text: "The version most founders end up at" },
        {
          type: "p",
          text: "In practice, the best content relationships aren't ones where the founder disappears from the process. They're collaborative: the founder brings the thinking, the experience, the opinions. The ghostwriter brings structure, consistency, and the editorial discipline to turn raw material into something worth reading.",
        },
        {
          type: "p",
          text: "You're not outsourcing your voice. You're building a system so your voice can reach more people, more often, without consuming the hours you don't have.",
        },
      ],
    },
    {
      slug: "pre-conversation-credibility-why-leaders-are-chosen-on-linkedin",
      tag: "Essay",
      date: "July 22, 2026",
      isoDate: "2026-07-22",
      readingTime: "13 min read",
      title: "Pre-Conversation Credibility: Why Leaders Are Chosen on LinkedIn Before They Speak.",
      excerpt:
        "Every important decision has two moments: the one in the room, and the one before it, when someone sat with a screen and decided how the room was going to go. Almost no one prepares for the second — even though the second is usually where the outcome gets set.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      alt: "Two people in conversation at a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        { type: "p", text: "Every important decision has two moments: the one in the room, and the one before it, when someone sat with a screen and decided how the room was going to go. People prepare for the first moment. Almost no one prepares for the second, even though the second is usually where the outcome gets set." },
        { type: "p", text: "A website tells people what you built. LinkedIn tells them how you think. And by the time anyone actually speaks to you, they are rarely deciding from scratch. They are checking a picture they already put together against the person now sitting in front of them." },
        { type: "p", text: "This is not unique to LinkedIn, and it is not only a founder's problem. People read the reviews before booking the restaurant, check the profile before the first date, and read what a possible podcast guest has said off the cuff before the invitation goes out. Checking has become the opening move in most decisions that used to begin with a conversation. LinkedIn is the room where it happens for founders." },
        { type: "html", html: 'There is evidence behind this. In the <a href="https://www.edelman.com/expertise/Business-Marketing/2025-b2b-thought-leadership-report" target="_blank" rel="noopener noreferrer">2025 Edelman-LinkedIn B2B Thought Leadership study</a>, seven in ten senior executives said that a single piece of a company\'s published thinking had, at some point, made them reconsider a supplier they were already using. No pitch and no meeting, just one essay moving a decision that looked closed.' },
        { type: "p", text: "Picture two founders raising from the same investor. One shows up with an immaculate deck. The other shows up with a year of unremarkable posts, thinking out loud about the problem she is trying to solve. The deck is better, and it does not matter. The investor spent twenty minutes the night before reading the second founder's writing and walked in feeling she already knew how this person thinks, while the first founder is still a stranger with good slides. The meeting only confirmed what the reading had already settled." },
        { type: "h2", text: "Three questions nobody realizes they are asking" },
        { type: "p", text: "Underneath the posting schedules and the engagement advice, the reader is running three checks. Can I find you. Can I predict you. Can I trust your judgment." },
        { type: "p", text: "Most advice answers the first one and stops. Post more, stay visible, feed the algorithm. That is fine as far as it goes, but being easy to find has never been the same thing as being easy to trust, and the second and third questions are where trust is actually decided." },
        { type: "p", text: "There is a reason those two matter more than they look. People believe a person more readily than they believe a company, which is why a founder's own voice tends to outrun the company page. The page is an institution and collects the skepticism institutions have earned. The founder is a person, and people extend more benefit of the doubt to a person. What you are building, post by post, is less a message than a reputation. Most reputation is not manufactured; it is accumulated memory, the conclusion everyone else has already reached from the fragments they have seen. You do not write it directly. You supply the material other people build it from." },
        { type: "h2", text: "The constraint is what makes it work" },
        { type: "p", text: "A lot of founders treat LinkedIn as Twitter in a blazer, and it costs them. On Twitter, a person can be someone other than their job. The alias, the sharper second self, the opinion you would never say aloud in a Monday meeting are all permitted there, and nobody expects the two versions to reconcile. LinkedIn does not offer that gap. Your job and your voice are the same object, read by the same people who will decide whether to fund you, hire you, or buy from you." },
        { type: "p", text: "Founders tend to experience this as a limitation, and it is closer to a form of protection. Twitter rewards speed, novelty, and a good fight, and it forgets you by the evening. LinkedIn is slower, and the person reading it is behaving more like a due-diligence analyst than an audience. Being slow only hurts if the ambition was to go viral. If the ambition was to be trusted, being slow helps, because a slow platform does not punish you for being the same person in June that you were in January." },
        { type: "h2", text: "Repetition is not the same as being dull" },
        { type: "p", text: "One finding tends to offend people's instincts. Founders who circle the same core belief across dozens of posts, framed a dozen different ways, over months, end up trusted more than founders who produce something new every time. On Twitter, saying a thing twice earns you the word repetitive. On LinkedIn it earns you authority, and the difference has less to do with the platform than with how people form trust." },
        { type: "p", text: "Stated plainly, it is not mysterious. The second time you hear a true thing, it costs less to believe than the first, because you no longer have to wonder whether this week's version of the person is the real one. Psychologists have spent decades on why familiarity gets read as trustworthiness, going back to research from the late 1960s on repeated exposure, but the short version does the job here. Consistency is not the timid alternative to originality; it is the evidence being weighed." },
        { type: "p", text: "There is a stronger version of this, and it goes by a phrase worth borrowing: documented, not announced. To announce is to declare a conclusion. To document is to show the reasoning as you actually work through it, including the parts you have not settled. Announced posts age badly, because the day the conclusion turns out wrong, the whole post looks foolish. Documented posts hold up, because even when the conclusion changes, the reasoning is the thing people came to trust. When Edelman and LinkedIn surveyed close to 2,000 decision-makers in 2025, nine in ten said they grew more receptive to a company whose leaders kept making the same case consistently, rather than more cleverly. The weight of that finding sits on the word consistently. And consistency here does not mean repeating your content. It means repeating your judgment until people can predict it." },
        { type: "h2", text: "The obvious objection" },
        { type: "p", text: "Here is the counterargument, and it deserves a real answer. If repetition builds trust, why doesn't Coca-Cola run one advertisement forever? If sameness paid off on its own, the most recognized brand alive would have frozen its advertising sometime in the 1980s." },
        { type: "p", text: "Coca-Cola does repeat, constantly, just not at the level people look for. The identity repeats: the red, the warmth, the small promise of a shared moment. The execution changes with every spot. That does not undercut the argument so much as sharpen it. A person can wear a different outfit every day and stay unmistakably themselves, because the outfit was never what people were recognizing. A founder telling one true belief through five different stories across a year is doing the same thing Coca-Cola does. What costs a founder trust is not variety in how they say it, but holding a different belief every month while insisting it is the same person underneath." },
        { type: "h2", text: "Write for the people who are not ready" },
        { type: "p", text: "Founders tend to write as though the reader is about to decide today. Almost none of them are. The most useful result in all of Edelman's research is that strong thinking works on people who are not yet in the market, the ones not hiring, not investing, not buying, and that it is close to the only thing that reaches them at all. Everyone enters a buying window eventually, and almost nobody enters it blank. They arrive carrying impressions they picked up months earlier, from things they read when they wanted nothing. If you write for the person who is not ready, yours is the name already in their head on the day they suddenly are." },
        { type: "h2", text: "What a comment actually proves" },
        { type: "p", text: "The third check, can I trust your judgment, is the hardest to satisfy through your own posts, because anyone can write a confident post about their own judgment. Much harder to fake is a specific, useful comment on someone else's work, with nothing to gain except being seen thinking clearly." },
        { type: "p", text: "This is one of the most underused moves on the platform, and the reason is ordinary economics. A good comment borrows an audience instead of building one from scratch. A sharp reply under someone else's well-read post puts your thinking in front of a crowd that already exists and already trusts the person you are replying to, which is a very different position from shouting into your own feed and hoping. The wrong way fails in public: a comment that pulls the subject back to you, the \"great post, this is exactly what I help my clients with\" move, spends the author's goodwill and gets nothing for it. A useful comment adds what the post left out, and borrows the room's trust instead of spending it." },
        { type: "h2", text: "One structure beats ten tips" },
        { type: "p", text: "There is a kind of post that reliably underdelivers on the effort behind it: the list of ten quick tips. It feels generous, it writes itself, and it teaches very little, because actions without the reasoning behind them give the reader a checklist rather than judgment. Judgment is the thing actually being assessed here." },
        { type: "p", text: "A single structure, walked through with the reason each part exists, does far more. Open on one specific, arguable claim rather than a soft observation, because a claim stops the scroll and an observation does not. Support it with something that actually happened, because a real detail is what convinces a reader you earned the opinion. Name the cost the claim carries, because a claim with no downside reads as marketing, and marketing does not build trust. Then close on what changed, or on what you still cannot resolve. Explaining why the structure holds, instead of handing someone \"do this, then this,\" is itself the point of the whole piece, because on LinkedIn the reasoning is the thing worth reading." },
        { type: "h2", text: "Founders are not interchangeable" },
        { type: "p", text: "Agencies make one expensive mistake over and over: writing every founder in the same register. A technical infrastructure founder and a consumer-app founder are not doing the same job on LinkedIn, and should not read as though they were. The infrastructure founder is read by careful, skeptical buyers who trust precision and get suspicious of hype, so credibility comes from being exact. The consumer founder is read by a broader, faster crowd that responds to energy and story, so credibility comes from being vivid. Swap the two voices and both break." },
        { type: "p", text: "The same context-dependence is why \"be vulnerable\" is only half-right. When an employee admits a doubt, it reads as honesty and costs them little. When a founder admits the wrong kind of doubt, it unsettles the exact people reading to decide whether to trust the company with money, careers, or a signature. Admitting you got a decision wrong and showing what you learned earns trust. Admitting you are not sure the company survives the quarter does the opposite, however honest it is. Founders carry a weight employees do not, and ignoring that is how \"just be real\" advice turns on the people who take it to heart." },
        { type: "h2", text: "Most founders do not have an audience problem" },
        { type: "p", text: "They have an identity problem. A different person online every week, chasing whatever worked last time, which means the reader running the second check gets a fresh answer on every visit." },
        { type: "p", text: "Nearly every familiar LinkedIn mistake grows from that one root. Overexplaining the obvious, which lands as filler or a mild insult. Jumping on every trend to stay current, which makes a founder forgettable rather than memorable, because reacting to everything signals a stand on nothing. Lifting someone else's format or opinion without adding an angle, which reads as the borrowed credibility it is. Generic advice with no example and nothing at stake, which asks nothing of the reader and gives nothing back. The eighteen-hours-of-grind post, which stopped reading as dedication a while ago and now mostly reads as a sign the work does not last." },
        { type: "p", text: "Negativity deserves its own line, because it wears the costume of honesty while doing quiet damage. Even when every point is factually correct, a steady stream of criticism does not read as candor; it reads as bitterness. People rarely argue back in public. They stop engaging, and that is worse than an argument, because an argument at least gives you something to answer." },
        { type: "h2", text: "Does ghostwriting count?" },
        { type: "p", text: "Since this is the work we do, we should face the obvious objection to all of it. If someone else drafts a founder's posts, is any of this real? The thinking has to be the founder's; the words can be helped. A founder who hands over a genuine belief, a real decision, a specific thing they watched happen, and gets help shaping it into something readable, has faked nothing. A founder who outsources the thinking itself, who could not tell you what went out under their name, has faked all of it, and it surfaces fast, usually the first time someone asks them about their own post in a meeting and they have no answer. The line was never who typed it. The line is whose judgment it carries." },
        { type: "h2", text: "Why this weighs more in 2026 than it did two years ago" },
        { type: "html", html: 'The case for visibly thinking in your own voice has grown stronger lately, and not out of nostalgia. The web has filled with writing no human produced, and on LinkedIn it is stranger than the general trend: <a href="https://richardvanderblom.com/" target="_blank" rel="noopener noreferrer">Richard van der Blom\'s 2026 analysis</a> found that roughly 80 percent of the comments a popular post collects in its first five minutes are now written by AI. That is not a statistic about the internet in the abstract; it describes the space directly beneath your own posts. A founder plainly doing their own thinking, on repeat, is now doing something rare, not because the idea is new but because the noise around it multiplied so quickly.' },
        { type: "html", html: 'The platform itself has moved the same way. In March 2026, <a href="https://www.linkedin.com/blog/engineering/feed/engineering-the-next-generation-of-linkedins-feed" target="_blank" rel="noopener noreferrer">LinkedIn\'s own engineering team</a> described its rebuilt feed as one that rewards sustained engagement over raw reach, which is why the first hour after you post now matters more than your follower count. What began as a database of credentials is now built, at the mechanical level, to reward the second and third checks rather than only the first.' },
        { type: "h2", text: "The choice that was always being made" },
        { type: "p", text: "The three checks were always running, across restaurants and hires and dates and podcast guests and the founder about to receive a wire. What has changed is that you can now watch yourself answer them, one post at a time, whether or not you meant to. The only real decision left is whether the person running those checks on you, someone you will never see doing it, gets the same answer twice." },
        { type: "p", text: "A website tells people what you built. What you write, week after week, tells them whether to trust you to build the next thing." },
      ],
    },
    {
      slug: "why-leaders-are-moving-their-best-thinking-to-substack",
      tag: "Essay",
      date: "July 15, 2026",
      isoDate: "2026-07-15",
      readingTime: "10 min read",
      title: "Why Leaders Are Moving Their Best Thinking to Substack.",
      excerpt:
        "Attention comes in two forms. One is captured, taken from a person in the two or three seconds before they scroll on. The other is committed, handed over by a person before a single word has loaded. The rarity is what makes the second valuable — and it is the reason Substack works.",
      img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1600&auto=format&fit=crop",
      alt: "Open notebook on a desk with morning light",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        { type: "p", text: "Attention comes in two forms. One is captured, taken from a person in the two or three seconds before they scroll on. The other is committed, handed over by a person before a single word has loaded. Almost everything online is built to win the first kind, and almost nothing is built to deserve the second. The rarity is what makes the second valuable, and it is the reason Substack works." },
        { type: "h2", text: "A subscribe button is a small promise" },
        { type: "p", text: "People still call Substack \"just newsletters,\" which describes it about as well as calling a printing press a stapler. The format is not the interesting part. The reader's state of mind on arrival is." },
        { type: "p", text: "Someone opening Instagram wants to spend a few minutes, and the choice to keep scrolling or move on takes two or three seconds, all day. Someone opening an email from a newsletter they subscribed to arrives in a different state altogether. They are not spending time; they are trying to learn something, and they have set aside five or ten minutes to do it. They also made a decision before the email opened. They subscribed once, which was a small commitment, and they are opening it now, which is a second and smaller one. People do not like breaking small promises to themselves, even the ones no one else would notice, and that pressure to stay consistent with an earlier choice is the same force behind a small early yes making a bigger later yes far more likely." },
        { type: "html", html: 'The clearest proof of how real the commitment has become is what happened once paying for a newsletter turned ordinary. Paid subscriptions on Substack climbed from roughly 2 million in 2023 to a disclosed 5 million by early 2025, a figure the company announced and outlets such as <a href="https://www.tubefilter.com/2025/03/12/substack-five-million-paid-subscribers-journalist-reporter-newsletter/" target="_blank" rel="noopener noreferrer">Tubefilter</a> covered independently. Following an Instagram account costs nothing and signals about as much. Paying every month for someone\'s writing is a small but genuine vote that it is worth money, a far higher bar than a follow, and it means the people who subscribe actually care what you have to say.' },
        { type: "p", text: "Picture a founder who spends three hours on a LinkedIn post and thirty minutes on her newsletter. The post reaches twelve thousand people; the newsletter reaches forty-seven. Six months later, none of the twelve thousand have turned into anything, and two of the forty-seven are paying customers who first trusted her because of that email. Reach told her the post won. Revenue disagreed. That is the discomfort of a newsletter, and part of why founders avoid it. A feed lets you hide behind reach. A newsletter tells you exactly how many people actually care." },
        { type: "h2", text: "Long-form is a moat, not a tax" },
        { type: "p", text: "Most founders treat writing at length as a cost to be minimized, a tax on the calendar. On Substack, length works in the other direction, as a form of defense, and the reason is buried in the numbers. Paid subscribers are only a small single-digit slice of all the subscriptions on the platform. That looks like a weakness until you consider who those people are. The person who pays has already filtered themselves for seriousness; they are not the passive scroller, they are the one who decided your thinking was worth money. Deep writing is what earns and keeps that reader, and it is exactly the writing your competitors avoid, because it is slow and hard and moves no vanity metric. Anyone can fire off a hot take, and very few will build a real body of sustained thinking, which is why the ones who do become hard to replace." },
        { type: "h2", text: "The obvious objection" },
        { type: "p", text: "If committed attention is so much better, why did short-form video swallow the rest of the internet? Because short-form and long-form are not competing for the same prize. Short-form wins the captured game: enormous reach, no commitment asked, an audience that owes nothing and leaves in half a second. Long-form wins the committed game: far less reach, real commitment required, an audience that already paid the price of showing up. Neither is the failed version of the other. They keep different scoreboards, and plenty of founders abandon a newsletter early because they graded it on the wrong one, the way you would misjudge a marathon by checking who leads at the first mile." },
        { type: "h2", text: "Depth without the compression tax" },
        { type: "p", text: "A reader who opened your email is not being interrupted. They are being met. That changes what is worth writing, because the pressure to crush an idea down to a caption or a ninety-second script only exists when the audience might leave at any second. Take that pressure away, and the writing can match the actual shape of the thing being explained, instead of being flattened before anyone has checked whether the flat version is even true." },
        { type: "p", text: "It also lets you sound like a person still thinking. LinkedIn rewards the polished post that lands a clean verdict in six lines; Substack tolerates, and often prefers, the reverse, working an idea out in public and admitting the part you have not solved. That is not a lower standard. Performing certainty is easy, and reasoning honestly in front of an audience is not, and readers on a platform where they committed real time would rather watch the thinking happen. A piece that sounds a little unfinished is often the sign you are doing the real work." },
        { type: "h2", text: "Reputation compounds in public" },
        { type: "p", text: "The mechanism underneath all this is old. It is the trust email newsletters built for marketers for decades: land in the inbox, show up on schedule, be useful, and let the relationship compound. What is new is that it stopped being private. A Substack post sits at a public link anyone can pass along, so the trust no longer stays sealed inside one person's inbox; it compounds into reputation, and the one-to-one relationship a newsletter used to build now doubles as a one-to-many signal. This is why Substack writers get known for a way of thinking rather than for a single viral hit, the same thing happening to founders on LinkedIn on a different platform. The writer and the founder are running the same play, making their thinking visible and consistent enough that people recognize it before they have met the person behind it." },
        { type: "h2", text: "The archive keeps working after you stop" },
        { type: "p", text: "A LinkedIn post lives for a day or two before the feed buries it and it effectively stops existing. A Substack archive does the opposite. Every essay stays at a permanent link, searchable and shareable, adding to your credibility for years. Two or three years in, the back catalogue becomes an asset of its own, the thing a prospective client, hire, or investor reads through in one sitting to work out who you are, long after you wrote it. Feed platforms rent you a day of attention, and an archive compounds." },
        { type: "h2", text: "What a founder actually owns" },
        { type: "p", text: "An inbox is one of the few pieces of an audience a founder owns outright, rather than renting it from a platform that can rewrite its ranking rules overnight. A following on any feed platform, LinkedIn included, lives inside someone else's system, gated by an algorithm, and can lose value the moment that system changes its mind about what to promote. An email list survives whatever the platform decides, and it leaves with the writer if it has to. For anyone thinking in years rather than weeks about where to spend their effort, that is the difference between building on land you own and land you lease." },
        { type: "h2", text: "Cadence beats inspiration" },
        { type: "p", text: "The unglamorous part most founders skip is this. The newsletters that work are not the ones written when inspiration lands; they are the ones that arrive on a rhythm the reader can predict, whether or not the writer felt like it that week. A reader who committed to you is also, in the background, expecting you, and an irregular \"whenever something big hits me\" schedule breaks that expectation until the commitment fades. You do not need to write daily; you need to write predictably. A steady pace a founder can hold for a year beats a brilliant issue that shows up once a quarter, because consistency is what turns a subscription into a habit, and habits are what compound." },
        { type: "h2", text: "Most founders who quit did not run out of ideas" },
        { type: "p", text: "They quit because they wanted an audience, and what they had actually built, if they were honest about the early numbers, was a practice. An audience arrives fast and rewards volume. A practice arrives slowly and rewards showing up on the weeks it does not feel worth it. The two ask for different kinds of patience, and confusing them is why so many newsletters go quiet around the third or fourth month, right when a practice would still be finding its shape." },
        { type: "p", text: "Because paying is the sharpest form of committed attention, it is tempting to assume every founder should put up a paywall, and most should not. For a founder, the newsletter is usually not the business; it is the thing that builds trust in the business, which makes reach worth more than subscription revenue. The exception is narrow: a founder solving a specific, expensive problem for a small expert audience can charge without hesitation, because there the paywall is a signal of seriousness the right reader respects. Building an audience, keep it free. Serving a small specialized one that is paying for an edge, charge. Most founders are doing the first while pricing it like the second." },
        { type: "h2", text: "Why this weighs more in 2026 than it did two years ago" },
        { type: "html", html: 'Committed attention is getting rarer, and 2026 is making it rarer faster. The <a href="https://contentmarketinginstitute.com/press-room/new-b2b-research-finds-winning-marketing-teams-are-building-fundamentals-not-just-playing-with-prompts" target="_blank" rel="noopener noreferrer">Content Marketing Institute\'s 2026 research</a> found nine in ten B2B marketers already using AI to produce content, while fewer than four in ten said it improved anything, which is volume rising while quality holds flat. More writing, chasing the same finite attention. A reader who decided to give you ten real minutes before the email even opened is not a nice-to-have in that world; it is the scarcest thing you have.' },
        { type: "h2", text: "Why the platform still carries this tension" },
        { type: "html", html: 'Substack was founded in 2017 by Chris Best, Jairaj Sethi, and Hamish McKenzie, who met working together at the messaging app Kik, and has credited Ben Thompson\'s Stratechery, one of the first successful paid tech newsletters, as its founding inspiration. For its first several years the company stayed out of the way, hosting the email and taking its cut without trying to be a feed. That changed in <a href="https://on.substack.com/p/introducing-notes" target="_blank" rel="noopener noreferrer">April 2023 with the launch of Notes</a>, a feed-based discovery feature, which added the exact kind of algorithmic, captured-attention layer this essay argues Substack\'s core product is an alternative to. The platform now competes on captured attention to grow its reach, even while the subscription at its center runs entirely on committed attention. If anything, that confirms the point, since even a company built on earned attention needed a way to capture some. Capturing is how people find you, and earning is how they stay.' },
        { type: "h2", text: "Closing" },
        { type: "p", text: "Captured attention scrolls past you. Committed attention chose you before you had written a word. The follower count was never the real asset. The willingness to keep reading past the first sentence always was, and it is the one number the rest of the internet has spent a decade optimizing away." },
      ],
    },
    {
      slug: "ghostwriting-for-founders-what-a-writer-can-give-you-and-what-they-cant",
      tag: "Essay",
      date: "July 20, 2026",
      isoDate: "2026-07-20",
      readingTime: "9 min read",
      title: "Ghostwriting for Founders: What a Writer Can Give You, and What They Can't.",
      excerpt:
        "A founder posts something that does well. A few weeks later, in a meeting, someone brings it up. The founder nods, thanks them, and changes the subject as quickly as they can — because they cannot remember writing it, cannot remember the argument, and could not defend it if the room pushed.",
      img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1600&auto=format&fit=crop",
      alt: "Person writing in a notebook at a desk",
      author: { name: "The Draftory", role: "Studio" },
      body: [
        { type: "p", text: "A founder posts something that does well. A few weeks later, in a meeting, someone brings it up. \"I loved your piece on pricing,\" they say, and wait for more. The founder nods, thanks them, and changes the subject as quickly as they can, because they cannot remember writing it, cannot remember the argument, and could not defend it if the room pushed. That pause, the half-second of nothing, is the only moment in this entire essay that matters. It is where ghostwriting either holds up or falls apart, and it has almost nothing to do with who typed the post." },
        { type: "p", text: "Most conversations about ghostwriting get stuck on the wrong question. People ask whether the founder wrote it themselves, as though the keyboard were the ethical center of the whole thing. It is not. The question worth asking is whether the writing is true to how the person actually thinks, and those two questions come apart more often than people expect." },
        { type: "h2", text: "A ghostwriter can give you words. A ghostwriter cannot give you a point of view." },
        { type: "p", text: "This is the distinction the whole subject turns on. Words are the cheap part. Anyone can be taught to write a clean sentence, and lately a machine will do it for free. A point of view is the expensive part, because it comes from having actually thought about something, been wrong about it, changed your mind, and arrived somewhere you can defend. A ghostwriter can supply the first thing in an afternoon. The second thing cannot be supplied at all. It can only be found, in the founder, and translated." },
        { type: "p", text: "That is the honest version of what good ghostwriting does. It does not invent a mind. It carries one that already exists across the gap between having a thought and being able to say it well." },
        { type: "h2", text: "None of this is new, and the panic about it is oddly recent" },
        { type: "p", text: "We have never actually expected leaders to write their own words. Kings had scribes. Presidents have speechwriters, and nobody watching an inauguration believes the president drafted it alone at a desk the night before. Most business memoirs on the airport shelf were written by someone whose name is not on the cover." },
        { type: "html", html: 'The clearest case is one of the most admired books in American politics. John F. Kennedy published <a href="https://en.wikipedia.org/wiki/Profiles_in_Courage" target="_blank" rel="noopener noreferrer"><em>Profiles in Courage</em></a> in 1956, and it won the Pulitzer Prize for biography. His aide Ted Sorensen, in his own 2008 memoir, acknowledged that he had drafted most of the chapters and helped choose the words of many of the sentences. Kennedy was defensive about the book\'s authorship for the rest of his life. And yet almost nobody now calls the book a fraud, because the judgment in it, the choice of which senators to profile, the argument about political courage, the point of view, was Kennedy\'s, even where the sentences were Sorensen\'s. The discomfort was always about who owned the words. The legitimacy was always about who owned the thinking. Those are different things, and we have agreed, for centuries, that only the second one counts.' },
        { type: "h2", text: "Two kinds of ghostwriting, and only one of them is a problem" },
        { type: "p", text: "There is ghostwriting that transcribes a mind, and ghostwriting that manufactures one." },
        { type: "p", text: "The first kind starts with a founder who has genuine beliefs, real scars, specific opinions they have earned, and a writer whose job is to get those out of the founder's head and onto the page without flattening them. The founder is the source. The writer is the translator. Everything published is something the founder actually thinks and could defend in any room." },
        { type: "p", text: "The second kind starts with nothing. There is no belief, no lived detail, no opinion the founder holds strongly enough to remember a week later. The writer is not translating a mind; they are assembling a costume. It can look identical to the first kind on the day it is published. It comes apart the first time the founder is asked, in person, to go one layer deeper than the post, because there is no deeper layer. That meeting, the one from the opening of this essay, is the test the costume always eventually fails." },
        { type: "h2", text: "The obvious objection" },
        { type: "p", text: "Someone will say the whole thing is dishonest regardless. If the words are not literally yours, the reader has been misled, full stop." },
        { type: "p", text: "But look at what the reader actually assumes, because it is not what this objection claims. Nobody believes the CEO personally wrote the annual report. Nobody thinks the keynote was composed, alone, by the person delivering it. Readers have always understood that public figures work with writers, and they have never treated that as a betrayal. What they assume, and what they are genuinely owed, is not that every word was typed by the named author. It is that the words represent that person's real thinking. Disclosure of who held the pen is mostly a red herring. The actual contract is simpler and stricter: this is what I believe, and I will stand behind it. Break that contract and it does not matter how honest you were about your process. Keep it and it does not matter that you had help." },
        { type: "h2", text: "The reason ghostwriting has a bad name is bad ghostwriting" },
        { type: "html", html: 'The genre earned its reputation, and it is worth being honest about why. Most ghostwritten founder content is not the careful translation of a real mind. It is filler, produced on a schedule, saying nothing anyone will remember. The <a href="https://contentmarketinginstitute.com/press-room/new-b2b-research-finds-winning-marketing-teams-are-building-fundamentals-not-just-playing-with-prompts" target="_blank" rel="noopener noreferrer">Content Marketing Institute\'s 2026 research</a> found that 96 percent of B2B organizations say they produce thought leadership, while in many of those companies fewer than 5 percent of employees actually contribute to it. Most of what carries an executive\'s name was written by someone else, and a great deal of it is a content team trying to look clever rather than a person with something to say.' },
        { type: "p", text: "That is the real complaint people have with ghostwriting, even when they misname it. The problem was never that someone else held the pen. The problem is that, too often, there was nothing worth holding it for." },
        { type: "h2", text: "What good ghostwriting actually is" },
        { type: "p", text: "It is extraction, not invention. The writer's job is to find the thing the founder already believes and cannot get out of their own head, and to keep it from dying in a Slack message or a half-finished draft nobody will ever see. Founders do not usually need better ideas. They need better articulation, which is a completely different problem with a completely different solution." },
        { type: "p", text: "Most founders are not bad writers, either, which is the assumption the word \"ghostwriting\" smuggles in. They are people with good judgment, a real point of view, and no time, whose thinking is currently trapped in voice notes and long tangents on calls. A good ghostwriter is not there to think for them. A good ghostwriter is there so that the thinking they already do stops disappearing." },
        { type: "h2", text: "Why this matters more in 2026 than it ever has" },
        { type: "p", text: "For most of the history of ghostwriting, the writer's value was in the words, in the craft of turning a rough idea into a clean paragraph. That is precisely the part a machine now does instantly and for free. Anyone can generate fluent, competent, forgettable prose in seconds, which means fluent, competent, forgettable prose is now worth almost nothing." },
        { type: "p", text: "What that leaves is the part no tool can produce: the specific point of view of one particular person who has actually been through something. AI made the ghostwriter's old job obsolete and the real one more valuable at the same time. A writer who supplies sentences is now competing with something free. A writer who can find and articulate a founder's genuine judgment is doing the one thing the free tool cannot do, because the tool has no founder inside it. In a world drowning in generated words, the scarce thing is a real mind, clearly expressed." },
        { type: "p", text: "There is a second thing the tool cannot do, and it matters as much as the first. Ask a machine to write a post and it writes a post, in isolation, with no memory of what you argued last month and no view of where you are trying to end up. It answers the prompt in front of it and stops. A ghostwriter who is any good is barely thinking about the single post. They are deciding which belief to repeat until it sticks and which to retire, what to say now and what to hold back, what to leave unpublished because it helps this week and costs you next quarter, how the same line reads to an investor and to a customer who will both see it. A post is an output. A position built on purpose, over months, out of dozens of posts pointing the same direction, is a strategy, and strategy is judgment spread across time rather than applied to a single blank page. AI gives you the output. It was never in a position to give you the strategy." },
        { type: "h2", text: "The only test that matters" },
        { type: "p", text: "Go back to the meeting. Someone brings up the founder's post, and this time the founder leans in, because they remember exactly what they argued and why, and they have three more things to say that would not fit in the original. Someone else may have shaped the sentences. It does not matter. The judgment was theirs, they can defend it, and the room can feel that instantly." },
        { type: "p", text: "You can borrow a voice. You cannot borrow a mind, and everyone can tell, eventually, which one you did." },
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
  eyebrow: "",
  title: "Let's talk.",
  body: "Tell us more about what you're building and how we can help.",
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
    options: ["LinkedIn posts & threads", "Essays & long-form", "Newsletters / Substack", "Founder blog & website content", "Personal brand & positioning", "Other"],
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
    name: "country",
    label: "Which country are you based in?",
    placeholder: "Select a country",
    options: ["India", "United States", "United Kingdom", "Canada", "Australia", "Singapore", "UAE", "Germany", "France", "Netherlands", "Other"],
  },
  referral: {
    name: "referral",
    label: "Were you referred by anyone?",
  },
  consent: "Yes, I agree to the Terms of Service and Privacy Policy.",
  newsletter: "Subscribe for the occasional founder-focused note. No spam.",
  submit: "Send it over",
  success: {
    title: "Thanks, we've got it.",
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
  newsletterHeading: "Sign up for our\nnewsletter",
  newsletterBlurb:
    "We partner with founders and operators, turning raw ideas into writing that earns attention, trust, and lasting momentum.",
  blurb:
    "We bring great writing to exceptional founders — turning raw ideas into a presence that gets noticed, remembered, and trusted.",
  columns: [
    {
      heading: "Studio",
      links: [
        { label: "Approach", href: "#approach" },
        { label: "Who it's for", href: "#audience" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Elsewhere",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "X / Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "navya@thedraftory.com", href: "mailto:navya@thedraftory.com" },
      ],
    },
  ],
};
