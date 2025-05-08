import { SectionAnimatedDivider } from '@/components/divider/animated-divider'
import { ComparisonSection } from '@/components/landing/comparison-section'
import { Hero } from '@/components/landing/hero'
import { ProblemsSection } from '@/components/landing/problems'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionAnimatedDivider />
      <ProblemsSection />
      <SectionAnimatedDivider />
      <ComparisonSection />
    </main>
  )
}
