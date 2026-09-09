import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { TerminalCard } from "@/components/terminal-card";
import Image from "next/image";

const GITHUB_URL = "https://github.com/mateen-afshari";
const LINKEDIN_URL = "https://www.linkedin.com/in/mateen-afshari-90598022b/";

function rise(delay: number): CSSProperties {
  return { "--rise-delay": `${delay}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <header className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 lg:px-8">
      <div
        className="animate-rise glass-panel mt-6 flex items-center justify-between rounded-full px-4 py-3 sm:px-6"
        style={rise(0)}
      >
        <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase sm:text-xs">
          Arlington, VA
        </p>
        <nav
          aria-label="Social links"
          className="flex items-center gap-2 sm:gap-3"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-white/2 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-white/2 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </nav>
      </div>

      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-8">
        <div className="flex flex-col items-start">
          <div
            className="animate-rise flex items-center gap-4"
            style={rise(100)}
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary/80 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              aria-hidden="true"
            >
              <Image
                src="/profile.jpg"
                alt="MA"
                width={56}
                height={56}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-lg text-primary uppercase sm:text-xl">
                Mateen Afshari
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </div>

          <h1
            className="animate-rise mt-6 max-w-xl font-serif text-5xl leading-[0.96] tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl"
            style={rise(220)}
          >
            Full-stack &amp; mobile engineer.
          </h1>

          <p
            className="animate-rise mt-8 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-mono text-sm tracking-[0.2em] text-primary-foreground uppercase shadow-[0_14px_24px_rgba(255,166,102,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(255,166,102,0.35)]"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-2">
                Resume
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/2 px-6 py-3 font-mono text-sm tracking-[0.18em] text-foreground uppercase transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-rise w-full" style={rise(620)}>
          <TerminalCard />
        </div>
      </div>
    </header>
  );
}
