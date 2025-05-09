import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const moduleAreas = [
  {
    value: 'start',
    title: '🚀 Start & przełamywanie bariery',
    items: [
      'Powitania, pytania o dzień, samopoczucie',
      'Mówienie o sobie bez zastanowienia',
      'Opisywanie miejsca pracy, zespołu, codziennych obowiązków',
    ],
  },
  {
    value: 'team',
    title: '🎙 Codzienna komunikacja w zespole',
    items: [
      'Standupy, taski, problemy techniczne',
      'Zgłaszanie błędów, proszenie o pomoc',
      'Chwalenie innych, feedback',
    ],
  },
  {
    value: 'clients',
    title: '💼 Rozmowy z klientami i interesariuszami',
    items: [
      'Omawianie wymagań i postępów',
      'Tłumaczenie decyzji projektowych',
      'Przyjmowanie i zadawanie pytań',
    ],
  },
  {
    value: 'technical',
    title: '👨‍💻 Rozmowy techniczne (front, back, UX)',
    items: [
      'Opisywanie działania aplikacji',
      'Słownictwo do code review, pair programmingu',
      'Tłumaczenie flowu użytkownika / logiki API',
    ],
  },
  {
    value: 'interview',
    title: '🎤 Rozmowy rekrutacyjne (symulacje)',
    items: [
      'Mówienie o doświadczeniu i projektach',
      'Typowe pytania techniczne w uproszczonej formie',
      'Feedback i autoprezentacja',
    ],
  },
  {
    value: 'subconscious',
    title: '🧠 Angielski podświadomy',
    items: [
      'Powtarzalne struktury zdań (np. “I’d rather…”, “What I mean is…”)',
      'Nauka schematów językowych przez praktykę',
      '„Zautomatyzuj” mówienie bez gramatycznego stresu',
    ],
  },
]

export function ModuleMaterialSection() {
  return (
    <section className="py-20 bg-muted/50 dark:bg-[#1e1e2f]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Jakie obszary są{' '}
            <span className="text-[var(--color-accent)]">przerabiane</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kompleksowe moduły dostosowane do potrzeb technicznych specjalistów
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {moduleAreas.map((module) => (
            <AccordionItem
              key={module.value}
              value={module.value}
              className="group border-0"
            >
              <AccordionTrigger className="flex items-center justify-between w-full p-6 text-left hover:no-underline cursor-pointer rounded-xl bg-white/70 dark:bg-[#2d2d42]/70 backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-all hover:border-[var(--color-accent)]/30 group-hover:shadow-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {module.title}
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 pt-0 border-0">
                <div className="mt-4 pl-2">
                  <ul className="space-y-3">
                    {module.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 text-gray-700 dark:text-gray-300 before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--color-accent)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
