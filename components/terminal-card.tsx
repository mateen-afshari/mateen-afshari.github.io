"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "mateen-afshari — full-stack & mobile engineer" },
  { prompt: true, text: "cat ./education.txt" },
  {
    prompt: false,
    text: "Master of Computer Science · University of Virginia",
  },
  { prompt: true, text: "ls ./stack" },
  { prompt: false, text: "react  typescript  flutter  python  kotlin" },
  { prompt: true, text: "ship --whole-product" },
];

const TYPE_SPEED = 34;
const LINE_PAUSE = 420;

export function TerminalCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    const current = LINES[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        current.prompt ? TYPE_SPEED : TYPE_SPEED / 3,
      );
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  const done = lineIndex >= LINES.length;

  return (
    <div
      aria-hidden="true"
      className="glass-panel w-full overflow-hidden rounded-[1.5rem]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="size-2.5 rounded-full bg-muted-foreground/35" />
        <span className="size-2.5 rounded-full bg-muted-foreground/50" />
        <span className="ml-3 font-mono text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          mateen — zsh
        </span>
      </div>

      <div className="min-h-64 bg-[radial-gradient(circle_at_top,rgba(255,175,124,0.08),transparent_25%)] px-4 py-4 font-mono text-[13px] leading-relaxed sm:px-5">
        {LINES.slice(0, lineIndex + 1).map((line, i) => {
          const isCurrent = i === lineIndex;
          const text = isCurrent ? line.text.slice(0, charIndex) : line.text;
          if (i >= LINES.length) return null;
          return (
            <div key={`${i}-${line.text}`} className="flex gap-2">
              {line.prompt ? (
                <span className="shrink-0 text-primary">{">"}</span>
              ) : (
                <span className="shrink-0 text-transparent select-none">
                  {">"}
                </span>
              )}
              <span
                className={
                  line.prompt ? "text-foreground" : "text-muted-foreground"
                }
              >
                {text}
                {isCurrent && !done && (
                  <span className="animate-cursor ml-px inline-block h-[1em] w-[7px] translate-y-[2px] bg-primary" />
                )}
              </span>
            </div>
          );
        })}
        {done && (
          <div className="flex gap-2">
            <span className="shrink-0 text-primary">{">"}</span>
            <span className="animate-cursor inline-block h-[1em] w-[7px] translate-y-[2px] bg-primary" />
          </div>
        )}
      </div>
    </div>
  );
}
