import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - Speaklab English Academy',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <section className="my-16 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold">
          Dziękujemy i witamy na pokładzie!
        </h1>
        <p className="text-lg text-muted-foreground">
          Twoja opłata została pomyślnie przetworzona. Cieszymy się, że
          dołączyłeś do SpeakLab English Academy! Teraz możesz rozpocząć swoją
          przygodę z nauką logując się do panela klienta albo załóż konto żeby
          mieć dostęp!
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button className="bg-white text-gray-950 cursor-pointer">
              Do Panelu Klienta
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="cursor-pointer">
              Do strony głównej
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" className="cursor-pointer">
              Rejestracja
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
