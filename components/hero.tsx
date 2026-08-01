import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { TerminalCard } from "@/components/terminal-card";

const GITHUB_URL = "https://github.com/mateen-afshari";
const LINKEDIN_URL = "https://www.linkedin.com/in/mateen-afshari-90598022b/";

function rise(delay: number): CSSProperties {
  return { "--rise-delay": `${delay}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <header className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 lg:px-8">
      {/* Top bar */}
      <div
        className="animate-rise flex items-center justify-between border-b border-border py-5"
        style={rise(0)}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Arlington, VA
        </p>
        <nav aria-label="Social links" className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </nav>
      </div>

      {/* Main hero content */}
      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-8">
        <div className="flex flex-col items-start">
          <div
            className="animate-rise flex items-center gap-4"
            style={rise(100)}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-sm text-muted-foreground"
              aria-hidden="true"
            >
              MA
            </div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Mateen Afshari
            </p>
          </div>

          <h1
            className="animate-rise mt-6 font-serif text-5xl leading-[1.08] text-balance sm:text-6xl lg:text-7xl"
            style={rise(220)}
          >
            Full-stack &amp; mobile engineer.
          </h1>

          <p
            className="animate-rise mt-8 max-w-md leading-relaxed text-pretty text-muted-foreground"
            style={rise(360)}
          >
            I'm a Software Engineer at Capital One and a UVA grad with a
            Master's in Computer Science. I love building things, whether it's a
            secure SDK at work or a side project for fun.
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={rise(480)}
          >
            <a
              href="https://drive.google.com/file/d/1Z3AP1Fedrk2hlWuCAAICBtbzsqEezat9/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Resume
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm tracking-wide text-foreground uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Living terminal card */}
        <div className="animate-rise w-full" style={rise(620)}>
          <TerminalCard />
        </div>
      </div>
    </header>
  );
}
