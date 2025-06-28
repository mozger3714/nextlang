'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 1000)
    }
  }, [])

  const handleConsent = (choice: 'accepted' | 'declined') => {
    setIsClosing(true)
    setTimeout(() => {
      localStorage.setItem('cookie-consent', choice)
      setVisible(false)
      setIsClosing(false)
    }, 300)

    if (choice === 'accepted') {
      // Optionally trigger analytics setup here
    }
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed bottom-6 left-6 right-6 sm:right-auto bg-white/80 dark:bg-[#2d2d42]/90 backdrop-blur-sm',
        'border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-5 sm:p-6 max-w-sm z-50',
        'text-sm text-gray-800 dark:text-gray-200 transition-all duration-300',
        isClosing ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100',
        'transform-gpu' // For smoother animations
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-medium text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            Pliki cookies
          </h3>
          <button
            onClick={() => handleConsent('declined')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-muted-foreground">
          Używamy plików cookies w celu działania strony oraz (za Twoją zgodą)
          do analityki. Możesz zaakceptować wszystkie lub odrzucić nieistotne.
        </p>

        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleConsent('declined')}
            className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50"
          >
            Odrzuć
          </Button>
          <Button
            size="sm"
            onClick={() => handleConsent('accepted')}
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90"
          >
            Akceptuj
          </Button>
        </div>
      </div>
    </div>
  )
}
