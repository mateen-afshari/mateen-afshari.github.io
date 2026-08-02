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

const HIGHLIGHTS = ["Full-stack", "Mobile", "AI systems", "Secure products"];

export function Hero() {
  return (
    <header className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 py-4 lg:px-8">
      <div
        className="animate-rise flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl"
        style={rise(0)}
      >
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
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

      <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-10">
        <div className="flex flex-col items-start">
          <div
            className="animate-rise flex items-center gap-3 rounded-full border border-white/10 bg-card/60 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            style={rise(100)}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-primary/10"
              aria-hidden="true"
            >
              <Image
                src="/profile.jpeg"
                alt="MA"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-sm text-primary uppercase">
                Mateen Afshari
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </div>

          <div
            className="animate-rise mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.24em] text-primary uppercase"
            style={rise(180)}
          >
            Building thoughtful products for people
          </div>

          <h1
            className="animate-rise mt-6 max-w-2xl font-serif text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl"
            style={rise(240)}
          >
            Designing software that feels effortless.
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl leading-relaxed text-pretty text-muted-foreground"
            style={rise(360)}
          >
            I’m a software engineer at Capital One and a UVA grad with a
            Master’s in Computer Science. I enjoy building secure, polished
            products across web, mobile, and AI-powered experiences.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-3"
            style={rise(480)}
          >
            <a
              href="https://drive.google.com/file/d/1Z3AP1Fedrk2hlWuCAAICBtbzsqEezat9/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-sm tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-200 hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-mono text-sm tracking-[0.2em] text-foreground uppercase transition-colors hover:border-primary/40 hover:text-primary"
            >
              Get in touch
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex flex-wrap gap-2"
            style={rise(560)}
          >
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-rise w-full" style={rise(620)}>
          <div className="glass-panel rounded-[1.75rem] p-2">
            <TerminalCard />
          </div>
        </div>
      </div>
    </header>
  );
}
