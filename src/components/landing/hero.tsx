'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="h-screen flex items-center w-full">
      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8 ">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-bold leading-tight text-balance">
              Popraw swój{' '}
              <span className="text-[var(--color-accent)]">angielski</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            aria-hidden="true"
          >
            <p className="text-lg lg:text-2xl 2xl:text-3xl font-thin mt-[-1rem]">
              Specjalnie dla branży IT.
            </p>
            <p className="mt-3">{'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'}</p>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold leading-tight text-balance space-y-2">
            <span className="sr-only">
              Zrób większą karierę. Osiągnij wyższe zarobki. Znajdź pracę w IT.
            </span>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              aria-hidden="true"
            >
              💼 Zrób większą{' '}
              <span className="text-[var(--color-accent)]">karierę</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              aria-hidden="true"
            >
              💰 Osiągnij wyższe{' '}
              <span className="text-[var(--color-accent)]">zarobki</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              aria-hidden="true"
            >
              👨‍💻 Znajdź pracę w{' '}
              <span className="text-[var(--color-accent)]">IT</span>
            </motion.div>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <Link href="#module-material">
              <Button className="bg-[var(--color-accent)] text-white font-bold cursor-pointer rounded-full hover:scale-105 transition-transform h-14 text-lg px-6">
                Dowiedz się więcej
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
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
        </div>

        {/* Right side */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/header-1.gif"
              alt="Konwersacje po angielsku w IT"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
