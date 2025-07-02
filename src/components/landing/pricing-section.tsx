'use client'

import { useEffect, useState } from 'react'
import type { StripePrice } from '@/constants/types'
import { Button } from '@/components/ui/button'

export function PricingSection() {
  const [prices, setPrices] = useState<StripePrice[]>([])

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('/api/prices')
      const data = await res.json()
      setPrices(data)
    }
    fetchPrices()
  }, [])

  return (
    <section id="pricing" className="my-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold leading-12 dark:text-gray-100 mb-4">
            Cennik
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg font-semibold mx-auto">
            Wybierz plan dopasowany do{' '}
            <span className="text-[var(--color-accent)] font-bold">
              Twoich potrzeb
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {prices.map((price) => (
            <div
              key={price.id}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[var(--background)] to-[#f0e8dd] dark:from-[#1a1a2e] dark:to-[#23233a]"
            >
              {/* Glass card background */}
              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 rounded-2xl shadow-xl" />

              {/* 3D effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-accent)]/30 rounded-2xl transition-all duration-300" />

              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)',
                }}
              />

              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {price.product.metadata?.emoji && (
                    <span className="text-3xl">
                      {price.product.metadata.emoji}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {price.product.name}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {price.product.description}
                </p>

                <div className="mb-8 flex-grow">
                  {price.product.metadata?.features && (
                    <ul className="space-y-3">
                      {price.product.metadata.features
                        .split('|')
                        .map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="p-0.5 rounded-full bg-[var(--color-accent)]/10 mr-3">
                              <svg
                                className="w-5 h-5 text-[var(--color-accent)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-gray-800 dark:text-gray-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {(price.unit_amount / 100).toFixed(0)}{' '}
                    <span className="text-[var(--color-accent)]">
                      {price.currency.toUpperCase()}
                    </span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    / {price.recurring?.interval}
                  </p>
                </div>

                <form action="/api/create-checkout-session" method="POST">
                  <input type="hidden" name="priceId" value={price.id} />
                  <button
                    type="submit"
                    className="w-full py-4 px-6 font-bold rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[#ff8c6b] hover:from-[#ff6b00] hover:to-[#ff8c6b] text-white shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Zapisz się →
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <details className="inline-block">
                      <summary className="cursor-pointer hover:text-[var(--color-accent)] transition-colors">
                        Gwarancja zwrotu pieniędzy
                      </summary>
                      <p className="mt-2 p-2 bg-white/30 dark:bg-black/30 rounded-lg text-gray-700 dark:text-gray-300">
                        Pełny zwrot pieniędzy w ciągu 7 dni, jeśli nie jesteś
                        zadowolony/a.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-5">
            <p className="text-xl">
              Dalej się zastanawiasz? Umów się na darmową lekcje próbną! ➡️
            </p>
            <Button
              className="cursor-pointer text-md font-semibold border-2 border-dashed border-white rounded-full py-2 bg-[var(--color-accent)] text-white hover:scale-110 transition-transform"
              onClick={() =>
                window.open('https://calendly.com/mr-smeett/darmowa-lekcja')
              }
            >
              Darmowa lekcja próbna
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
