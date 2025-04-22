import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: Request) {
  const body = await req.formData()
  const priceId = body.get('priceId') as string

  if (!priceId) {
    return NextResponse.json({ error: 'Missing price ID' }, { status: 400 })
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    success_url: 'http://localhost:3000/dashboard?success=true',
    cancel_url: 'http://localhost:3000/pricing?canceled=true',
  })

  return NextResponse.redirect(session.url!, 303)
}
