import {
  Briefcase,
  Users,
  Presentation,
  Mic,
  Compass,
  Puzzle,
} from 'lucide-react'

const features = [
  {
    icon: <Mic className="w-8 h-8 mx-auto  text-[var(--color-accent)]" />,
    title: 'Główny nacisk na mówienie',
    description:
      'Odblokuj się, przełamaj barierę i zacznij wreszcie mówić płynnie',
  },
  {
    icon: <Compass className="w-8 h-8 mx-auto  text-[var(--color-accent)]" />,
    title: 'Trening rozmów rekrutacyjnych',
    description:
      'Dowiesz się, jak się wyróżnić, co mówić i czego unikać podczas rekrutacji.',
  },
  {
    icon: <Briefcase className="w-8 h-8 mx-auto text-[var(--color-accent)]" />,
    title: 'Business English od praktyków',
    description:
      'Ucz się języka, którego faktycznie używa się w pracy – bez zbędnej teorii.',
  },
  {
    icon: <Users className="w-8 h-8 mx-auto  text-[var(--color-accent)]" />,
    title: 'Małe grupy, duże efekty',
    description:
      'Zajęcia w kameralnych grupach sprzyjają interakcji i budowaniu pewności siebie.',
  },
  {
    icon: (
      <Presentation className="w-8 h-8 mx-auto text-[var(--color-accent)]" />
    ),
    title: 'Symulacje realnych sytuacji',
    description:
      'Spotkania, maile, prezentacje, negocjacje – ćwiczymy je razem krok po kroku.',
  },
  {
    icon: <Puzzle className="w-8 h-8 mx-auto  text-[var(--color-accent)]" />,
    title: 'Indywidualne podejście',
    description:
      'Analizujemy Twoje potrzeby i dostosowujemy materiały oraz tempo pracy.',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Dlaczego <span className="text-[var(--color-accent)]">my</span>?
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Bo łączymy skuteczność, praktykę i ludzkie podejście. Zobacz, co nas
          wyróżnia:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-[#3a3a55] hover:border-[var(--color-accent)]/30 hover:dark:border-[var(--color-accent)]/30 group overflow-hidden"
            >
              {/* Glass background with visible gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 dark:from-[#2d2d42]/80 dark:to-[#3a3a55]/50 backdrop-blur-sm z-0" />

              {/* Subtle gradient accent */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent)]/5 via-transparent to-transparent opacity-70 z-0" />

              {/* Card content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="text-3xl p-3 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/20 transition-colors duration-300 mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center w-full text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
