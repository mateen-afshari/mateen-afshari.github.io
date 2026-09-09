import { ScrollReveal } from "@/components/scroll-reveal";

const SKILL_GROUPS: { label: string; skills: string[] }[] = [
  {
    label: "Frontend & Mobile",
    skills: ["React", "TypeScript", "Flutter", "Tailwind CSS", "Next.js"],
  },
  {
    label: "Backend & Data",
    skills: ["Python", "SQL / Postgres", "Firebase", "Node.js", "Heroku"],
  },
  {
    label: "AI / ML",
    skills: [
      "RAG Pipelines",
      "scikit-learn",
      "SVM / Regression",
      "LLM Tooling",
    ],
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-8 lg:py-32">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            03 — Toolkit
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-serif text-4xl text-balance sm:text-5xl"
          >
            About &amp; skills
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-pretty text-muted-foreground">
            From accessible mobile banking flows to RAG-powered analytics
            assistants, I care about the full stack of a product — the schema,
            the API, the interaction, and the polish. These are the tools I
            reach for most.
          </p>
        </ScrollReveal>

        <div className="flex flex-col divide-y divide-border">
          {SKILL_GROUPS.map((group, i) => (
            <ScrollReveal
              key={group.label}
              delay={i * 100}
              className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <h3 className="font-mono text-[10px] leading-6 tracking-[0.2em] text-muted-foreground uppercase sm:text-xs">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border/70 bg-white/[0.02] px-3 py-1.5 font-mono text-sm text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
