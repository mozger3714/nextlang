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

   const sortedPrices = prices.data.sort((a, b) => {
  const aProduct = a.product as Stripe.Product
  const bProduct = b.product as Stripe.Product
  
  const aOrder = parseInt(aProduct.metadata?.sort_order || "999")
  const bOrder = parseInt(bProduct.metadata?.sort_order || "999")
  
  return aOrder - bOrder
})

  return NextResponse.json(sortedPrices);

}
