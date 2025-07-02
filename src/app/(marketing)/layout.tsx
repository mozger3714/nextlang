import { Header, Container, CookieConsent, Footer } from '@/components'
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
