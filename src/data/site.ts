export const siteConfig = {
  name: import.meta.env.VITE_APP_NAME || "site-template",
  headline: "A clean frontend-only template for AWS static sites.",
  description:
    "Start with a fast static React site today. Add API, Lambda, auth, and database later without rewriting the frontend foundation.",
  nav: [
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "Next steps", href: "#next-steps" },
  ],
};

export const features = [
  "Frontend-only phase 1",
  "React + TypeScript + Vite",
  "Tailwind-ready UI foundation",
  "SST StaticSite deploy target",
  "Future API integration point",
  "No database dependency yet",
];
