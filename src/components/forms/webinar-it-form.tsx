'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function WebinarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    it_status: '',
    topic: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xeeejyge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        window.location.href = '/webinar/rozmowny-angielski-dla-it/thank-you'
      } else {
        alert('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.')
      }
    } catch (error) {
      alert(`Wystąpił błąd: ${error}. Spróbuj ponownie.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          Imię i nazwisko<span className="text-red-500">*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="np. Jan Kowalski"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          Adres email<span className="text-red-500">*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="twoj@email.com"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          Czy pracujesz już w IT? (opcjonalne)
          <select
            name="it_status"
            value={formData.it_status}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none appearance-none bg-white text-gray-800"
          >
            <option value="">Wybierz opcję...</option>
            <option value="yes">Tak, pracuję w IT</option>
            <option value="no">Nie pracuję w IT</option>
            <option value="learning">
              Jestem w trakcie nauki / przebranżowiam się
            </option>
            <option value="student">Jestem studentem IT</option>
          </select>
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          O czym konkretnie chciałbyś/chciałabyś usłyszeć? (opcjonalne)
          <textarea
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="Jaki temat Cię najbardziej interesuje? Jakie masz oczekiwania wobec webinaru?"
            rows={4}
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none text-gray-800"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-5 rounded-xl hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Wysyłanie...
            </>
          ) : (
            <>
              Zarezerwuj miejsce teraz
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </form>
  )
}
