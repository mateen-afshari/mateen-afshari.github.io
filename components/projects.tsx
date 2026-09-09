import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GithubIcon } from "@/components/social-icons";

interface Project {
  title: string;
  href: string;
  description: string[];
  image: string;
  imageAlt: string;
}

const PROJECTS: Project[] = [
  {
    title: "Brain Tumor Classification",
    href: "https://github.com/mateen-afshari/MRI_Classification_ML",
    description: [
      "Built SVM and logistic regression models to classify MRI brain images as meningioma, glioma, pituitary, or no tumor.",
      "Achieved 90.8% test accuracy with SVM and 67.2% with logistic regression.",
    ],
    image: "/projects/brain-tumor.png",
    imageAlt:
      "Grid of MRI brain scans with classification labels and a confusion matrix",
  },
  {
    title: "Schedule Builder Web App",
    href: "https://github.com/mateen-afshari/UVACourseScheduleMaker",
    description: [
      "Developed a course builder website for UVA students to create and share schedules, replacing the retired louslist.",
      "Stored schedules, friends, and profiles in a Postgres database on Heroku.",
    ],
    image: "/projects/schedule-builder.png",
    imageAlt:
      "Weekly calendar interface of a university course schedule builder",
  },
  {
    title: "Seam Carving",
    href: "https://github.com/mateen-afshari/Algorithms",
    description: [
      "Implemented a Python program for content-aware image resizing using the seam carving algorithm.",
    ],
    image: "/projects/seam-carving.png",
    imageAlt:
      "Visualization of seam carving energy seams traced through a photograph",
  },
  {
    title: "Portfolio Website",
    href: "https://github.com/mateen-afshari/mateen-afshari.github.io",
    description: [
      "Built with TypeScript, React, and Tailwind CSS for responsive design.",
      "Showcases projects and skills with a clean, modern UI.",
    ],
    image: "/projects/portfolio.png",
    imageAlt: "Screenshot of a minimalist dark-themed portfolio website",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            02 — Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-4 font-serif text-4xl text-balance sm:text-5xl"
          >
            Projects
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
            Check out some of the projects I&apos;ve worked on.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ScrollReveal
              key={project.title}
              as="article"
              delay={(i % 2) * 100}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-[1.5rem] border border-border/80 bg-white/[0.015] p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.02]"
              >
                <div className="overflow-hidden rounded-[1rem] border border-border/80 bg-background/60">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    width={800}
                    height={500}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl tracking-[-0.04em] transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <span className="mt-1.5 inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase transition-colors group-hover:text-primary">
                    <GithubIcon className="size-4" />
                    Repo
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  {project.description.map((line) => (
                    <p
                      key={line.slice(0, 40)}
                      className="leading-relaxed text-pretty text-muted-foreground"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
