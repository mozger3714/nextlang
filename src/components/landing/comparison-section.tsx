import { CheckCircle, XCircle } from 'lucide-react'

const selfStudyPoints = [
  'Brak systemu i konsekwencji',
  'Trudność w ocenie własnych postępów',
  'Brak motywacji po kilku tygodniach',
  'Niepewność, czy uczysz się właściwych rzeczy',
  'Nikt nie poprawia błędów ani nie daje wskazówek',
  'Nuda i rutyna zabijają entuzjazm',
]

const withUsPoints = [
  'Krok po kroku – jasny, logiczny program',
  'Regularny feedback i korekta błędów',
  'Motywacja dzięki widocznym postępom',
  'Skupiamy się na tym, co naprawdę działa',
  'Pewność siebie w codziennych i biznesowych sytuacjach',
  'Angielski staje się przyjemnością, nie obowiązkiem',
]

export function ComparisonSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Samodzielna nauka vs. nauka{' '}
          <span className="text-[var(--color-accent)]">z nami</span>
        </h2>
        <p className=" mb-12">
          Zobacz, jak różni się nauka w pojedynkę od pracy z mentorem, który
          prowadzi Cię krok po kroku.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Self-study column */}
          <div className="bg-white rounded-2xl shadow p-6 ">
            <h3 className="text-xl font-semibold dark:text-gray-900 mb-4 flex items-center gap-2 text-destructive">
              Samodzielna nauka
            </h3>
            <ul className="space-y-3 dark:text-gray-900">
              {selfStudyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 mt-1 text-destructive" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* With us column */}
          <div className="bg-white rounded-2xl shadow p-6 border-1 border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold dark:text-gray-900 mb-4 flex items-center gap-2 text-primary">
              Z nami
            </h3>
            <ul className="space-y-3 dark:text-gray-900">
              {withUsPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
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
