import Header from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import { Container } from '@/components/container/container'
import CookieConsent from '@/components/cookie-consent/cookie-consent'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <CookieConsent />
      <Footer />
    </>
  )
}
