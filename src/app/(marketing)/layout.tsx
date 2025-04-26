import Header from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import { Container } from '@/components/container/container'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  )
}
