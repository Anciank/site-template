import { ArrowRight, Cloud, Database, Layers, Rocket } from "lucide-react";
import { features, siteConfig } from "./data/site";

export function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between gap-6">
          <a href="#" className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <Rocket className="h-4 w-4" />
              Phase 1: static frontend only
            </div>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
              >
                View template
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                See architecture
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              <ArchitectureCard icon={<Cloud />} title="CloudFront" text="Global CDN for static assets." />
              <ArchitectureCard icon={<Layers />} title="S3 Static Assets" text="Built output from Vite." />
              <ArchitectureCard icon={<Database />} title="Future Backend" text="API, Lambda, and RDS can be added later." muted />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-slate-900/80 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What this template includes</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold tracking-tight">Architecture</h2>
          <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-300">
{`User
  ↓
CloudFront
  ↓
S3 static site

Future:
Static site → API Gateway / Lambda → RDS Proxy → RDS`}
          </pre>
        </div>
      </section>

      <section id="next-steps" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">Next steps</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Customize the content in src/data/site.ts, add reusable components in src/components, and keep backend calls behind src/lib/api.ts when phase 2 begins.
          </p>
        </div>
      </section>
    </main>
  );
}

function ArchitectureCard({ icon, title, text, muted = false }: { icon: React.ReactNode; title: string; text: string; muted?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${muted ? "border-dashed border-white/10 text-slate-400" : "border-white/10 bg-slate-950/40 text-white"}`}>
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{text}</p>
    </div>
  );
}
