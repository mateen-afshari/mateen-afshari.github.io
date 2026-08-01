import { ArrowUpRight, Mail } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'

const GITHUB_URL = 'https://github.com/mateen-afshari'
const LINKEDIN_URL = 'https://www.linkedin.com/in/mateen-afshari-90598022b/'
const EMAIL = 'mailto:mateen.afshari@gmail.com'

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            04 — Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s build something{' '}
            <span className="text-muted-foreground italic">
              worth shipping.
            </span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-pretty text-muted-foreground">
            Whether it&apos;s a product idea, a role, or just a good
            engineering conversation — my inbox is open.
          </p>

          <div className="mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Get in touch
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Mateen Afshari
          </p>
          <nav aria-label="Footer social links" className="flex items-center gap-5">
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
            <a
              href={EMAIL}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
