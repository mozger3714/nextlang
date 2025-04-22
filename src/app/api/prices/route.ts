import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function GET() {
  const prices = await stripe.prices.list({
    active: true,
    expand: ['data.product'],
  })

  return NextResponse.json(prices.data)
}
