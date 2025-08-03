import { CheckCircle, XCircle } from 'lucide-react'

const selfStudyPoints = [
  'Brak systemu i konsekwencji',
  'Brak możliwości rozwoju mówienia',
  'Trudność w ocenie własnych postępów',
  'Brak motywacji po kilku tygodniach',
  'Niepewność, czy uczysz się właściwych rzeczy',
  'Nikt nie poprawia błędów ani nie daje wskazówek',
  'Czujesz się samotny(-a) i brak wsparcia',
]

const withUsPoints = [
  'Krok po kroku – jasny, logiczny program',
  'Akcent na mówienie i praktykę',
  'Regularny feedback i korekta błędów',
  'Pewność siebie w codziennych i biznesowych sytuacjach',
  'Przygotowanie do rozmów rekrutacyjnych',
  'Luźna atmosfera i poczucie przynajależności do grupy',
  'Poza lekcjami online – dostęp do użytecznych materiałów',
]

export function ComparisonSection() {
  return (
    <section className="py-8 xl:py-16">
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Samodzielna nauka vs. nauka{' '}
          <span className="text-[var(--color-accent)]">z nami</span>
        </h2>
        <p className="mb-12 text-md lg:text-lg">
          Zobacz, jak różni się nauka w pojedynkę od pracy z nami, kiedy wiemy
          dokładnie, co działa i prowadzimy Cię krok po kroku. Nasz program jest
          przemyślany, a każdy krok jest zaplanowany tak, abyś mógł osiągnąć
          płynność mówienia i pewność siebie w temacie, a najlepsze —
          <b> przelamanie bariery językowej</b>!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Self-study column */}
          <div className="bg-white rounded-2xl shadow p-6 ">
            <h3 className="text-xl font-semibold dark:text-gray-900 mb-4 flex items-center gap-2 text-destructive ml-6">
              Samodzielna nauka 📚
            </h3>
            <ul className="space-y-3 dark:text-gray-900">
              {selfStudyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-4 h-4 mt-1 text-destructive " />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* With us column */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[var(--color-accent)] shadow-[0_0_5px_var(--color-accent)]">
            <h3 className="text-xl font-semibold dark:text-gray-900 mb-4 flex items-center gap-2 text-primary ml-6">
              Z nami 👨‍🏫
            </h3>
            <ul className="space-y-3 dark:text-gray-900">
              {withUsPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 font-semibold">
                  <CheckCircle className="w-4 h-4 mt-1 text-emerald-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
