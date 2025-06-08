export type StripePrice = {
  id: string
  unit_amount: number
  currency: string
  recurring?: {
    interval: string
  }
  product: {
    name: string
    description: string
    metadata: Record<string, string>
  }
}