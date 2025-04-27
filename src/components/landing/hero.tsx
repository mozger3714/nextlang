import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="h-screen flex items-center w-full">
      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-8 ">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight space-y-2">
            <div>
              Zrób większą{' '}
              <span className="text-[var(--color-accent)]">karierę</span>
            </div>
            <div>
              Osiągnij wyższe{' '}
              <span className="text-[var(--color-accent)]">zarobki</span>
            </div>
            <div>
              Znajdź pracę w{' '}
              <span className="text-[var(--color-accent)]">IT</span>
            </div>
          </h1>
          <p className="text-muted-foreground text-lg">
            Wszystko zaczyna się od języka. Zbuduj swój angielski jak mistrz
            kodu.
          </p>
          <Button
            className="mt-4 bg-[var(--color-accent)] text-white font-bold cursor-pointer rounded-full hover:scale-105 transition-transform"
            size="lg"
          >
            Dowiedz się więcej
          </Button>
        </div>

        {/* Right side */}
        <div className="flex">
          <Image
            src="/header.jpg"
            alt="Konwersacje po angielsku"
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
