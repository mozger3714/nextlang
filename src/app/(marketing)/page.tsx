import { SectionAnimatedDivider } from '@/components/divider/animated-divider'
import { ComparisonSection } from '@/components/landing/comparison-section'
import { ContactSection } from '@/components/landing/contact'
import { Hero } from '@/components/landing/hero'
import { ModuleMaterialSection } from '@/components/landing/module-material'
import { PricingSection } from '@/components/landing/pricing-section'
import { ProblemsSection } from '@/components/landing/problems'
import { WhyUsSection } from '@/components/landing/why-us-section'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SpeakLab English Academy - Angielski dla IT ',
  description:
    'Ucz się angielskiego z myślą o IT. Zdobądź pracę programisty, podnieś zarobki i rozwijaj swoją karierę w branży technologicznej.',
  keywords: [
    'angielski dla IT',
    'kurs angielskiego IT',
    'angielski programista',
    'język angielski IT',
    'angielski dla programistów',
  ],
  alternates: {
    canonical: 'https://twojadomena.pl/',
  },
  openGraph: {
    title: 'Angielski dla IT – Zrób karierę, zarabiaj więcej, pracuj globalnie',
    description:
      'Zdobądź przewagę na rynku pracy dzięki skutecznej nauce angielskiego IT.',
    url: 'https://twojadomena.pl/',
    siteName: 'SpeakLab English Academy',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionAnimatedDivider />
      <ProblemsSection />
      <SectionAnimatedDivider />
      <ComparisonSection />
      <WhyUsSection />
      <ModuleMaterialSection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
