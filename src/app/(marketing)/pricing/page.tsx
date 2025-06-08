'use client'

import { Button } from '@/components/ui/button'
import { StripePrice } from '@/constants/types'
import { useEffect, useState } from 'react'

export default function PricingPage() {
  const [prices, setPrices] = useState<StripePrice[]>([])

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('/api/prices')
      const data = await res.json()
      setPrices(data)
    }
    fetchPrices()
  }, [])

  console.log(prices)

  return (
    <main className="max-w-2xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-lg text-gray-500 mb-10">
        Access premium lessons for developers. One plan, one price.
      </p>
      {prices.length === 0 ? (
        <div>Loading....</div>
      ) : (
        prices.map((price) => (
          <div key={price.id} className="border rounded-2xl p-6 mb-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{price.product.name}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {price.product.description}
            </p>
            <p className="text-2xl font-bold">
              {(price.unit_amount / 100).toFixed(2)}{' '}
              {price.currency.toUpperCase()} / {price.recurring?.interval}
            </p>
            <form
              action="/api/create-checkout-session"
              method="POST"
              className="mt-4"
            >
              <input type="hidden" name="priceId" value={price.id} />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        ))
      )}
    </main>
  )
}
