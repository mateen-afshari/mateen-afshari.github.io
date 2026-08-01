import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  bullets: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "Capital One",
    role: "Software Engineer",
    period: "Feb 2025 — Present",
    location: "Tysons, VA",
    logo: "/logos/capital-one.png",
    bullets: [
      "Backend engineer on the marketing and personalization team, building scalable and efficient systems to deliver personalized experiences to millions of users.",
      "Frontend mobile engineer for the Capital One banking app, focusing on enhancing user experience and performance.",
    ],
  },
  {
    company: "Microstrategy",
    role: "Software Engineer Intern",
    period: "May 2024 — Aug 2024",
    location: "Tysons, VA",
    logo: "/logos/microstrategy.png",
    bullets: [
      "Developed and implemented an AI-powered assistant to automate the creation of advanced metrics, achieving over 80% partial accuracy and significantly improving data analysis efficiency and accuracy for business intelligence reports.",
      "Implemented retrieval augmented generation (RAG) models to enhance the assistant's ability to generate natural language explanations for complex metrics, improving user understanding and trust in the generated insights.",
    ],
  },
  {
    company: "RoomMe",
    role: "Software Engineer",
    period: "May 2023 — Mar 2024",
    location: "Charlottesville, VA",
    logo: "/logos/roomme.png",
    bullets: [
      "Constructed and implemented a dynamic marketing script, enabling daily outreach to a diverse audience of 18,000 individuals. This no-cost solution resulted in a 400% increase in total followers and bolstered brand loyalty and engagement.",
      "Developed and maintained mobile applications using the Flutter framework and Firebase backend, ensuring smooth performance across platforms.",
    ],
  },
  {
    company: "Global Teaching Project",
    role: "Teaching Assistant",
    period: "Oct 2022 — May 2024",
    location: "Charlottesville, VA",
    logo: "/logos/global-teaching-project.png",
    bullets: [
      "Collaborated with the Global Teaching Project to deliver advanced computer science coursework to students and schools in communities where teacher shortages are most acute.",
    ],
  },
  {
    company: "VA-CNIP",
    role: "Cybersecurity Intern",
    period: "Jun 2023 — Aug 2023",
    location: "Charlottesville, VA",
    logo: "/logos/va-cnip.png",
    bullets: [
      "Increased adherence to the LESS standards from 86.8% to nearly 100%.",
      "Configured and deployed security software, ensuring compliance with industry best practices to enhance the security of local registrar offices' systems.",
    ],
  },
];

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <ScrollReveal>
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          01 — Career
        </p>
        <h2
          id="experience-heading"
          className="mt-4 font-serif text-4xl text-balance sm:text-5xl"
        >
          Experience
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          See my impact across various roles.
        </p>
      </ScrollReveal>

      <ol className="mt-16 border-l border-border">
        {EXPERIENCES.map((exp, i) => (
          <ScrollReveal
            key={exp.company}
            as="li"
            delay={i * 80}
            className="relative pb-14 pl-8 last:pb-0 sm:pl-12"
          >
            {/* Timeline marker */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] size-[9px] rounded-full border border-primary bg-background"
            />

            <article className="grid gap-6 sm:grid-cols-[auto_1fr]">
              <Image
                src={exp.logo || "/placeholder.svg"}
                alt={`${exp.company} logo`}
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-md border border-border object-cover"
              />
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-serif text-2xl">{exp.company}</h3>
                  <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
                    {exp.period}
                  </p>
                </div>
                <p className="mt-1 font-mono text-sm text-primary">
                  {exp.role}
                  <span className="text-muted-foreground">
                    {" "}
                    · {exp.location}
                  </span>
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex gap-3 leading-relaxed text-pretty text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[11px] h-px w-4 shrink-0 bg-primary/60"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
