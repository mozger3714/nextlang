import { CheckCircle2, CalendarDays, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function WebinarThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1e1e2f] to-gray-50 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Success Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
            <CheckCircle2 className="w-16 h-16" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-full blur-xl"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Dziękujemy za zapisanie się na webinar!
        </h1>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Wysłaliśmy do Ciebie email z potwierdzeniem i wszystkimi szczegółami.
          Sprawdź folder{' '}
          <span className="font-semibold text-emerald-300">spam</span> jeśli
          wiadomość nie dotarła w ciągu kilku minut.
        </p>

        {/* Details Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CalendarDays className="w-6 h-6 text-emerald-300" />
            <h2 className="text-2xl font-bold">Szczegóły webinaru</h2>
          </div>

          <div className="space-y-4 text-lg">
            <div className="flex items-center justify-center gap-4">
              <span className="font-semibold">Data:</span>
              <span className="text-emerald-300">18 stycznia</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="font-semibold">Godzina:</span>
              <span className="text-emerald-300">18:00 (online)</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/webinar/rozmowny-angielski-dla-it"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <ArrowLeft className="w-5 h-5" />
            Wróć na stronę webinaru
          </Link>
        </div>

        <p className="mt-12 text-white/60 text-sm max-w-2xl mx-auto">
          Jeśli masz jakiekolwiek pytania dotyczące webinaru, odpowiedz na email
          który otrzymałeś/aś lub skontaktuj się z nami bezpośrednio.
        </p>
      </div>
    </main>
  )
}
