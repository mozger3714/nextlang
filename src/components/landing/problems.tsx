'use client'
import { useRef } from 'react'
import { useInView, motion } from 'motion/react'

interface Problem {
  id: number
  title: React.ReactNode
  description: string
}

export function ProblemsSection() {
  const problems: Problem[] = [
    {
      id: 1,
      title: (
        <>
          Trudno mówić bez nadmiernego{' '}
          <span className="text-[var(--color-accent)]">zastanawiania się</span>?
        </>
      ),
      description:
        'Wiesz, co chcesz powiedzieć, ale analizujesz każde słowo i blokujesz się, zanim wypowiesz zdanie.',
    },
    {
      id: 2,
      title: (
        <>
          Paraliżuje Cię{' '}
          <span className="text-[var(--color-accent)]">strach</span> przed
          błędami?
        </>
      ),
      description:
        'Unikasz mówienia po angielsku, bo boisz się, że ktoś wyłapie błąd gramatyczny lub złe słowo.',
    },
    {
      id: 3,
      title: (
        <>
          Nie wiesz co powiedzieć na{' '}
          <span className="text-[var(--color-accent)]">
            rozmowie rekrutacyjnej
          </span>
          ?
        </>
      ),
      description:
        'W domu wszystko brzmi dobrze, ale w stresującej sytuacji w głowie pojawia się pustka.',
    },
    {
      id: 4,
      title: (
        <>
          Masz wrażenie, że Twoje{' '}
          <span className="text-[var(--color-accent)]">słownictwo</span> jest
          zbyt proste?
        </>
      ),
      description:
        'Powtarzasz te same zwroty i czujesz, że Twój język nie odzwierciedla Twojego poziomu wiedzy.',
    },
    {
      id: 5,
      title: (
        <>
          Nie rozumiesz, gdy ktoś mówi{' '}
          <span className="text-[var(--color-accent)]">szybko</span>?
        </>
      ),
      description:
        'Kiedy Anglik lub Amerykanin przyspiesza, gubisz się po kilku sekundach i odcinasz się od rozmowy.',
    },
    {
      id: 6,
      title: (
        <>
          Nie wiesz, jak brzmieć{' '}
          <span className="text-[var(--color-accent)]">naturalnie</span>?
        </>
      ),
      description:
        'Twoje zdania są poprawne, ale brzmią jak z podręcznika. Brakuje Ci swobody i autentyczności.',
    },
    {
      id: 7,
      title: (
        <>
          Brakuje Ci{' '}
          <span className="text-[var(--color-accent)]">pewności siebie</span> na
          spotkaniach?
        </>
      ),
      description:
        'Wiesz, co chcesz powiedzieć, ale w anglojęzycznym środowisku czujesz się niepewnie i biernie.',
    },
    // {
    //   id: 8,
    //   title: 'Unikasz rozmów z obawy przed oceną?',
    //   description:
    //     'Masz coś do powiedzenia, ale rezygnujesz, bo boisz się, że zabrzmisz "głupio" lub nienaturalnie.',
    // },
  ]

  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <section className="w-full py-28 px-6 sm:px-10 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Title */}
        <div className="lg:w-1/3">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sticky md:top-36 p-6 bg-gray-50 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl sm:text-4xl font-bold leading-12 dark:text-gray-900 mb-4 text-center lg:text-left">
              Coś z tego wydaje się{' '}
              <span className="text-[var(--color-accent)]">znajome</span>
              🤔?
            </h2>
            <p className="text-gray-600 text-center lg:text-left mb-4">
              Nie jesteś sam! Wiele osób zmaga się z podobnymi problemami i my
              dobrze wiemy jak z nimi poradzić.
            </p>
            <div className="absolute -bottom-7 left-8 w-0 h-0 border-l-[16px] border-r-[25px] border-t-[30px] border-l-transparent border-r-transparent border-t-gray-50  "></div>
          </motion.div>
        </div>

        {/* Timeline Area */}
        <div className="relative lg:w-2/3 pl-8 sm:pl-16">
          <div className="space-y-16">
            {problems.map((problem, index) => (
              <ProblemItem key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProblemItemProps {
  problem: Problem
  index: number
}

const ProblemItem = ({ problem, index }: ProblemItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-20% 0px -20% 0px',
    amount: 0.3,
  })

  return (
    <div ref={ref} className="relative">
      {/* Dot */}
      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white border-2 dark:border-0"
          animate={{
            borderColor: isInView ? 'var(--color-accent)' : 'white',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[var(--color-accent)] origin-center"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{
              duration: 0.5,
              delay: isInView ? index * 0.15 : 0,
              ease: 'backOut',
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="p-6 rounded-lg bg-gray-50 shadow-sm ml-8 hover:shadow-md transition-shadow"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          {problem.title}
        </h3>
        <p className="text-gray-600">{problem.description}</p>
      </motion.div>
    </div>
  )
}
