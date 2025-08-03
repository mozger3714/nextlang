'use client'

import { useRef, useState } from 'react'

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)

    await fetch('https://formspree.io/f/xblyqyen', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    form.reset()
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 4000)
  }
  return (
    <section
      id="contact"
      className="pt-12 pb-28 bg-muted/50 dark:bg-[#1e1e2f]/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Masz <span className="text-[var(--color-accent)]">pytanie</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Skontaktuj się z nami, jeśli potrzebujesz więcej informacji, np. o
            kursie Business English albo żebyśmy przygotowali spersonalizowaną
            ofertę dla Ciebie lub Twojej firmy!
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className="w-full px-4 py-3 bg-white/70 dark:bg-[#2d2d42]/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all peer"
              />
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:hidden peer-focus:text-[var(--color-accent)] -translate-y-6 peer-focus:-translate-y-6 text-sm">
                Imię
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                required
                className="w-full px-4 py-3 bg-white/70 dark:bg-[#2d2d42]/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all peer"
              />
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:hidden peer-focus:text-[var(--color-accent)] -translate-y-6 peer-focus:-translate-y-6 text-sm">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder=" "
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/70 dark:bg-[#2d2d42]/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all peer min-h-[120px]"
              />
              <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:hidden peer-focus:text-[var(--color-accent)] -translate-y-6 peer-focus:-translate-y-6 text-sm">
                Twoja wiadomość
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-accent)] text-white font-medium py-4 px-6 rounded-xl hover:bg-[var(--color-accent)]/90 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Wyślij wiadomość
          </button>
          {submitted && (
            <p className="text-center text-green-600 font-semibold text-lg pt-4">
              Dziękujemy! Wiadomość została wysłana.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
