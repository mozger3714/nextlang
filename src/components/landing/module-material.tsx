import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const moduleAreas = [
  {
    value: 'start',
    title: '🚀 Start & przełamywanie bariery',
    items: [
      'Powitania, pytania o dzień, samopoczucie',
      'Jak brzmieć lepiej po angielsku',
      'Mówienie o sobie bez zastanowienia',
      'Mówienie o doświadczeniu i projektach',
      'Opisywanie miejsca pracy, zespołu, codziennych obowiązków',
      'Podstawowa gramatyka i niezbędne angielskie czasy',
    ],
  },
  {
    value: 'team',
    title: '🎙 Codzienna komunikacja w zespole',
    items: [
      'Business English – codzienne rozmowy w pracy',
      'Standupy, taski, problemy techniczne',
      'Zgłaszanie błędów, proszenie o pomoc',
      'Chwalenie innych, feedback',
      'Opisywanie statusu prac',
      'Rozszerzanie gramatyki i czasów przez kontekst pracy',
    ],
  },
  {
    value: 'clients',
    title: '💼 Rozmowy z klientami i interesariuszami',
    items: [
      'Omawianie wymagań i postępów',
      'Tłumaczenie decyzji projektowych',
      'Zadawanie pytań i doprecyzowywanie informacji',
      'Small talk w sytuacjach zawodowych',
    ],
  },
  {
    value: 'technical',
    title: '👨‍💻 Rozmowy techniczne',
    items: [
      'Zagadnienia techniczne (np. algorytmy, architektura, bazy danych)',
      'Opisywanie działania aplikacji',
      'Zagadnienia z zakresu programowania',
      'Zagadnienia z zakresu designu',
      'Zagadnienia z zakresu testowania',
      'Trening komentowania kodu i code review',
      'Tłumaczenie flowu użytkownika i UX',
      'Rozmowy z innymi programistami o kodzie i strukturze projektu',
    ],
  },
  {
    value: 'scrum',
    title: '📈 Metodologia pracy SCRUM',
    items: [
      'Podstawowe pojęcia (backlog, sprint, user story, review)',
      'Udział w sprint planningu i retrospektywach',
      'Rola Product Ownera i Scrum Mastera – jak z nimi rozmawiać',
      'Mówienie o zależnościach, blockerach i priorytetach',
    ],
  },
  {
    value: 'interview',
    title: '🎤 Rozmowy rekrutacyjne (symulacje)',
    items: [
      'Mówienie o doświadczeniu i projektach',
      'Typowe pytania techniczne – wersja angielska uproszczona',
      'Rozmowa o technologiach i decyzjach projektowych',
      'Trening autoprezentacji i elevator pitch',
      'Feedback i omawianie swoich mocnych i słabych stron',
    ],
  },
  {
    value: 'automation',
    title: '🎯 Automatyzacja językowa i schematy mówienia',
    items: [
      'Gotowe struktury zdań (np. “The reason is that...”, “What I’d suggest is…”)',
      'Trening powtarzalnych zwrotów i klisz zawodowych',
      'Wypowiadanie się płynnie bez analizy gramatycznej',
      'Idiomy angielskie w kontekście IT',
      'Budowanie naturalnych wypowiedzi z automatu',
    ],
  },
]

export function ModuleMaterialSection() {
  return (
    <section
      className="py-20 bg-muted/50 dark:bg-[#1e1e2f]/80"
      id="module-material"
    >
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
                <span className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {module.title}
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-6 py-6 border-0 bg-white/70 dark:bg-[#2d2d42]/70 shadow-sm rounded-xl mt-5 mb-6">
                <div className="pl-2">
                  <ul className="space-y-3">
                    {module.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="font-semibold relative pl-6 text-[18px] text-gray-700 dark:text-gray-300 before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:rounded-full before:bg-[var(--color-accent)]"
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
