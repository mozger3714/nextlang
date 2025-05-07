import { SectionAnimatedDivider } from '@/components/divider/animated-divider'
import { Hero } from '@/components/landing/hero'
import { ProblemsSection } from '@/components/landing/problems'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionAnimatedDivider />
      <ProblemsSection />
      <SectionAnimatedDivider />
    </main>
  )
}
