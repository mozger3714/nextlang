'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export function Hero() {
  return (
    <section className="h-screen flex items-center w-full">
      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-8 ">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-bold leading-tight text-balance">
            <span className="sr-only">
              Zrób większą karierę. Osiągnij wyższe zarobki. Znajdź pracę w IT.
            </span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-hidden="true"
            >
              Zrób większą{' '}
              <span className="text-[var(--color-accent)]">karierę</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              aria-hidden="true"
            >
              Osiągnij wyższe{' '}
              <span className="text-[var(--color-accent)]">zarobki</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              aria-hidden="true"
            >
              Znajdź pracę w{' '}
              <span className="text-[var(--color-accent)]">IT</span>
            </motion.div>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-muted-foreground text-xl max-w-2xl font-normal">
              <strong>Angielski w IT</strong> to nie atut. To{' '}
              <span className="text-[var(--color-accent)] font-semibold underline">
                konieczność
              </span>
              . Ponad{' '}
              <span className="text-[var(--color-accent)] font-semibold">
                80%
              </span>{' '}
              ofert pracy w IT{' '}
              <span className="text-[var(--color-accent)] font-semibold">
                wymaga
              </span>{' '}
              znajomości angielskiego. Zbuduj swój angielski jak mistrz kodu.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <Button className="mt-4 bg-[var(--color-accent)] text-white font-bold cursor-pointer rounded-full hover:scale-105 transition-transform h-14 text-lg px-6">
              Dowiedz się więcej
            </Button>
          </motion.div>
        </div>

        {/* Right side */}
        <div className="flex">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/spite.png"
              alt="Konwersacje po angielsku"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg "
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
