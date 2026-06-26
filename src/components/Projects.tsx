export type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  featured: boolean;
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: "sync-brief-generator",
    title: "Sync Brief Generator",
    tag: "AI Integration",
    description:
      "Music supervisors describe a scene; the app returns a detailed creative brief with mood, tempo, and instrumentation recommendations. Powered by the Claude API.",
    stack: ["Next.js", "Claude API", "Tailwind"],
    featured: true,
    link: "https://jackson-portfolio-bgrf6x0bc-mrjackson-bits-projects.vercel.app/",
    github: "https://github.com/mrjackson-bit/sync-brief-generator",
  },
  {
    id: "market-pulse",
    title: "Market Pulse",
    tag: "Data · Full-stack",
    description:
      "Live crypto and stock tracking dashboard integrating CoinGecko and Finnhub APIs via server-side routes. Features interactive price charts and a persistent watchlist.",
    stack: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
    featured: false,
    link: "https://market-pulse-topaz.vercel.app/",
    github: "https://github.com/mrjackson-bit/market-pulse",
  },
  {
    id: "shua-speaks",
    title: "Shua Speaks",
    tag: "Web · Freelance",
    description:
      "Personal blog and writing platform built for a client. Clean reading experience with a nature-inspired dark palette, optimized for long-form content.",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    featured: false,
    link: "https://shua-speaks.vercel.app/",
    github: "https://github.com/mrjackson-bit/shua-speaks",
  },
];