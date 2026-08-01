import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { WorkExperience } from '@/components/work-experience'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <WorkExperience />
        <Projects />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
