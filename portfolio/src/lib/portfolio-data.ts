import type {
  BlogPost,
  Project,
  ResourceRecord,
  Service,
  SkillGroup,
  TimelineItem,
} from "./types";

export const profile = {
  name: "Ejajul Ansari",
  headline: "AI Backend Developer, Predictive Analyst & IBM Trainer",
  shortIntro:
    "I design and build scalable backend systems with a strong focus on performance, reliability, AI-driven workflows, and cloud-ready delivery.",
  location: "Delhi, India",
  image: "/assets/myImage.JPG",
  imageAlt: "Ejajul Ansari profile photo",
  highlights: [
    "I work from Delhi as an AI backend developer and trainer",
    "I improved backend performance by up to 45%",
    "I train learners in predictive analytics using IBM SPSS Modeler",
  ],
};

export const metrics = [
  { value: "3+", label: "Years I have spent building APIs, data models, and web apps" },
  { value: "45%", label: "Performance improvement I delivered on backend work" },
  { value: "27", label: "Public GitHub repositories behind my learning and builds" },
  { value: "IBM", label: "Where I train learners in predictive analytics and full stack work" },
];

export const services: Service[] = [
  {
    title: "Backend Architecture",
    description:
      "I design REST APIs, database schemas, authentication flows, and service boundaries that stay maintainable when product requirements grow.",
    proof: "Node.js, Express.js, MongoDB, PostgreSQL, MySQL",
  },
  {
    title: "Product Engineering",
    description:
      "I turn ideas into complete full stack experiences with Next.js, React, server rendering, dashboards, and practical user workflows.",
    proof: "Next.js SSR, React, Tailwind CSS, Chart.js",
  },
  {
    title: "Cloud & Delivery",
    description:
      "I ship with deployment discipline, CI/CD thinking, and cloud choices that fit the actual product instead of adding unnecessary complexity.",
    proof: "Docker, AWS, Vercel, Netlify, Git",
  },
  {
    title: "Developer Enablement",
    description:
      "I train developers through full stack builds, predictive analytics, code reviews, and project practice that connects learning to real work.",
    proof: "IBM training, SPSS Modeler, mentoring",
  },
];

export const projects: Project[] = [
  {
    id: "silvi-player",
    title: "Silvi Player",
    category: "Learning Platform",
    summary:
      "I built Silvi Player for students and self-learners who want to reduce study time without losing comprehension.",
    challenge:
      "I wanted learners to get faster review loops and better control over long-form study videos.",
    outcome:
      "I created a focused player experience using React, Node.js, JavaScript, and the Web Audio API.",
    tech: ["React", "Node.js", "JavaScript", "Web Audio API"],
    image: "/assets/photos/silvi-player.jpg",
    imageAlt: "Silvi Player project preview",
    github: "https://github.com/Ejajkhan613/silvi-player",
    live: "https://silvi-player.vercel.app/",
  },
  {
    id: "silvi-player-npm",
    title: "Silvi Player npm Package",
    category: "Open Source Package",
    summary:
      "I published silvi-player as an npm package so any developer can add silence detection and auto-skip behavior to web video players.",
    challenge:
      "Most silence-skipping tools make users wait for full pre-processing, so I wanted playback to start immediately while audio analysis continues in the browser.",
    outcome:
      "I shipped a framework-agnostic TypeScript package with progressive silence detection, MP4 audio-byte analysis, WebCodecs support, and npm distribution.",
    tech: ["TypeScript", "Vite", "WebCodecs", "MP4Box.js", "Web Audio", "npm"],
    image: "/assets/photos/silvi-player.jpg",
    imageAlt: "Silvi Player npm package preview",
    github: "https://github.com/Ejajkhan613/silvi-player-npm",
    live: "https://www.npmjs.com/package/silvi-player",
  },
  {
    id: "tic-tac-toe-esports",
    title: "Tic Tac Toe Esports",
    category: "Real-Time Multiplayer",
    summary:
      "I built a visually rich, real-time multiplayer Tic Tac Toe game with an authoritative server and persistent player stats.",
    challenge:
      "I wanted the game to feel competitive and synchronized, with cheat-resistant server-side logic, room codes, live chat, spectators, and rematch voting.",
    outcome:
      "I created a cosmic neon UI with Framer Motion animations and paired it with a Node.js, Express, Socket.io, Mongoose, and MongoDB backend for real-time gameplay and leaderboards.",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Socket.io", "Node.js", "Express", "MongoDB"],
    image: "/assets/photos/tic-tac-toe-esports.png",
    imageAlt: "Tic Tac Toe esports project screenshot",
    github: "https://github.com/Ejajkhan613/tic-tac-toe-esports",
  },
  {
    id: "aws-drive",
    title: "AWS Glacier Drive",
    category: "Cloud Archive Tool",
    summary:
      "I built a local-first Google Drive-style archive app for storing files cheaply in Amazon S3 Glacier storage classes.",
    challenge:
      "I wanted long-term cold storage to feel easier than the AWS Console while keeping the system self-hosted, private, and infrastructure-light.",
    outcome:
      "I created a Drive-like UI with folders, uploads, deletes, restore/download flows, multi-select actions, folder ZIP upload, local JSON metadata, event logs, and S3 manifest export.",
    tech: ["React", "Vite", "Express.js", "Amazon S3", "S3 Glacier", "AWS SDK", "Local JSON"],
    image: "/assets/photos/aws-drive.png",
    imageAlt: "AWS Glacier Drive project screenshot",
    github: "https://github.com/Ejajkhan613/aws-drive",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Core",
    focus: "Where I spend most of my engineering time",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Kafka", "RabbitMQ"],
  },
  {
    title: "Frontend Product",
    focus: "How I turn backend work into complete products",
    skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3", "Chart.js"],
  },
  {
    title: "Delivery Tools",
    focus: "What I use to ship, test, and collaborate",
    skills: ["Docker", "AWS", "Vercel", "Netlify", "Git", "GitHub", "Postman", "Jest", "Jira", "Linux", "Figma"],
  },
  {
    title: "Applied Learning",
    focus: "What I teach and practice as a trainer",
    skills: ["Full Stack Training", "Predictive Analytics", "IBM SPSS Modeler", "DSA", "System Design", "Code Reviews", "Mentoring"],
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Current",
    role: "IBM Trainer",
    company: "IBM Career Education",
    description:
      "I currently train learners at IBM Career Education, specializing in predictive analytics using IBM SPSS Modeler and practical full stack learning.",
    points: [
      "I translate analytics and development concepts into buildable project milestones.",
      "I guide learners on backend structure, API thinking, and predictive analytics workflows.",
      "I connect classroom practice with the engineering habits I use in real projects.",
    ],
  },
  {
    period: "Recent",
    role: "Backend Engineer",
    company: "Full Stack Product Work",
    description:
      "I build high-performance web applications with Node.js, Express.js, MongoDB, API design, and deployment workflows.",
    points: [
      "I have built backend systems from the ground up across product-style applications.",
      "I optimize performance and reliability for workflows that need to grow cleanly.",
      "I integrate frontend delivery with React.js and Next.js when the product needs end-to-end ownership.",
    ],
  },
  {
    period: "Leadership",
    role: "IT Head / Project Lead",
    company: "Team & Client Delivery",
    description:
      "I have handled team coordination, project execution, and client communication across full project lifecycles.",
    points: [
      "I coordinate developers around clear responsibilities and delivery milestones.",
      "I keep technical decisions connected to client communication and product goals.",
      "I stay close to implementation details while managing the bigger project direction.",
    ],
  },
];

export const fallbackPosts: BlogPost[] = [
  {
    title: "How I Design Backend APIs That Stay Calm Under Feature Growth",
    slug: "how-i-design-backend-apis-that-stay-calm-under-feature-growth",
    excerpt:
      "My practical approach to keeping Node.js and Express APIs readable, versionable, and easy to extend as product requirements move.",
    content: `# How I Design Backend APIs That Stay Calm Under Feature Growth

Good API design starts before I write routes. I like to separate business rules, validation, persistence, and response shaping early because those boundaries keep the codebase understandable when new features arrive.

## My default shape

- I keep controllers thin.
- I move business rules into services.
- I treat database models as persistence details, not the whole application.
- I return consistent error shapes from one place.
- I name routes around product language, not temporary implementation details.

This approach helps me move quickly without creating a backend that becomes difficult to test or explain later.`,
    tags: ["Node.js", "Express", "API Design"],
    coverImage: "/assets/photos/server.jpg",
    status: "published",
    seoTitle: "How I Design Scalable Node.js APIs",
    seoDescription:
      "My practical backend engineering approach for designing Node.js and Express APIs that remain maintainable as features grow.",
    readingMinutes: 2,
    createdAt: "2026-05-21T00:00:00.000Z",
    updatedAt: "2026-05-21T00:00:00.000Z",
    publishedAt: "2026-05-21T00:00:00.000Z",
  },
  {
    title: "What I Watch When Optimizing MongoDB-Backed Products",
    slug: "what-i-watch-when-optimizing-mongodb-backed-products",
    excerpt:
      "Indexes, document shape, query ownership, and the small habits I use to keep MongoDB applications predictable.",
    content: `# What I Watch When Optimizing MongoDB-Backed Products

MongoDB performance is rarely about one trick. For me, it usually comes from designing document shape around the product's read patterns, adding indexes intentionally, and measuring queries before guessing.

## Useful habits

- I start with the screens and APIs that read the data most often.
- I keep frequently queried fields indexable and predictable.
- I avoid returning large documents when a list view only needs a summary.
- I review slow queries during feature work, not only after launch.

The goal is not to over-engineer early. The goal is to leave the team with data access that is easy to reason about.`,
    tags: ["MongoDB", "Performance", "Databases"],
    coverImage: "/assets/photos/data.webp",
    status: "published",
    seoTitle: "My MongoDB Performance Notes for Product Teams",
    seoDescription:
      "The MongoDB performance habits I use when building backend APIs and product workflows.",
    readingMinutes: 2,
    createdAt: "2026-05-21T00:00:00.000Z",
    updatedAt: "2026-05-21T00:00:00.000Z",
    publishedAt: "2026-05-21T00:00:00.000Z",
  },
];

export const defaultResources: ResourceRecord[] = [
  {
    _id: "resume",
    title: "My Backend Developer Resume",
    description: "My current backend developer resume PDF.",
    category: "Resume",
    tags: ["PDF", "Career"],
    originalName: "Ejajul_Ansari_Backend_Developer_Resume.pdf",
    storedName: "Ejajul_Ansari_Backend_Developer_Resume.pdf",
    mimeType: "application/pdf",
    size: 82568,
    createdAt: "2026-05-21T00:00:00.000Z",
    downloadUrl: "/Ejajul_Ansari_Backend_Developer_Resume.pdf",
  },
];
