import CountdownTimer from '@/components/countdown/countdown'
import WebinarForm from '@/components/forms/webinar-it-form'
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

export default function WebinarITPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3f] to-[#1a1a2e] text-white ">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

          {/* Dot pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-8 lg:py-32 text-center space-y-6 lg:space-y-8 z-10">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 font-bold text-blue-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Dołącz na darmowy webinar</span>
          </div>

          <h1 className="text-3xl lg:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Rozmowny angielski dla IT — jak{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                przełamać barierę
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 blur-xl"></span>
            </span>{' '}
            w mówieniu i{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                zacząć mówić płynnie
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-300/20 blur-xl"></span>
            </span>
            <span className="block mt-4 text-xl lg:text-2xl text-blue-200/70 font-normal">
              Bez stresu, bez wkuwania na pamięć
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed bg-gradient-to-r from-white/5 to-transparent p-3 lg:p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            Darmowy webinar, podczas którego pokażę Ci{' '}
            <span className="font-semibold text-cyan-300">
              praktyczne metody ćwiczenia mówienia po angielsku
            </span>{' '}
            — gotowe do użycia od zaraz, bez wymówek i teorii.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
              <CalendarDays className="w-6 h-6 text-blue-300" />
              <div className="text-left">
                <div className="font-semibold text-white">18 stycznia 2026</div>
                <div className="text-white/70 text-sm">18:00 • online</div>
              </div>
            </div>

            <div className="hidden sm:block text-white/30">•</div>

            <div className="flex flex-col items-center gap-4">
              <CountdownTimer startDate="2026-01-18T18:00:00+01:00" />

              {/* <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-[#1e1e2f]"
                    ></div>
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  Już{' '}
                  <span className="font-bold text-green-300">
                    kilkadziesiąt osób
                  </span>{' '}
                  zapisało się na webinar
                </span>
              </div> */}
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#signup"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Zapisz się za darmo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-white/60 text-sm">
              ⚡ Natychmiastowy dostęp po zapisie • Żadnych opłat
            </p>
          </div>
        </div>

        {/* Wave divider - enhanced */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 40"
            className="absolute bottom-0 left-0 w-full h-8 md:h-10"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(1px)' }}
          >
            <path
              fill="white"
              d="M0,20L60,24C120,28,240,36,360,36C480,36,600,28,720,24C840,20,960,20,1080,24C1200,28,1320,36,1380,40L1440,44L1440,40L0,40Z"
            />
          </svg>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 lg:py-24 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #4f46e5 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 space-y-16 z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Wartość bez zobowiązań</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Co otrzymasz{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                zupełnie za darmo?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ten webinar to{' '}
              <span className="font-semibold text-gray-900">
                konkretna wiedza i narzędzia
              </span>
              , które możesz wdrożyć od zaraz — nawet jeśli nigdy nie dołączysz
              do żadnego programu.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Dlaczego wkuwanie słówek nie działa',
                desc: 'To jak próbować nauczyć się pływać czytając książki o pływaniu',
              },
              {
                title: 'Dlaczego appki do nauki języków to za mało',
                desc: 'Albo czemu ludzie uczą się latami i nadal nie mówią',
              },
              {
                title: 'Jak mówić bez tłumaczenia w głowie',
                desc: 'Metoda eliminująca polskie myśli podczas mówienia po angielsku',
              },
              {
                title: 'Błędy Polaków w komunikacji IT',
                desc: 'Najczęstsze pułapki językowe w środowisku technicznym',
              },
              {
                title: 'Przełamywanie bariery językowej w mówieniu',
                desc: 'Techniki sprawdzone u osób po latach nauki',
              },
              {
                title: 'Samodzielna praktyka mówienia',
                desc: 'Jak ćwiczyć mówienie bez nauczyciela i drogich kursów, samemu w domu',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-4 lg:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 lg:p-12 border border-blue-100">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-4 py-2 rounded-full text-sm">
                🎁 Bonus specjalny
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Darmowy zestaw materiałów do nauki Business English, potrzebny
                również w IT
              </h3>
              <p className="text-xl text-gray-600">
                Po webinarze otrzymasz gotową listę najważniejszych słów i
                zwrotów Business English, który jest potrzebny również w IT –{' '}
                <span className="font-semibold text-gray-900">
                  całkowicie za darmo
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SIGNUP ================= */}
      <section
        id="signup"
        className="py-12 xl:py-24 bg-gradient-to-b from-gray-50 to-white relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl shadow-blue-100 border border-gray-200 p-6 lg:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full text-sm">
                ⏳ Miejsca ograniczone
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Zarezerwuj swoje miejsce
                <span className="block text-lg text-gray-600 font-normal mt-2">
                  Zapisz się teraz, a otrzymasz natychmiastowy dostęp
                </span>
              </h3>
            </div>

            <WebinarForm />

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Bezpieczne dane
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Zero spamu
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">
                Po zapisie natychmiast otrzymasz email z potwierdzeniem, linkiem
                do webinaru i bonusowymi materiałami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
