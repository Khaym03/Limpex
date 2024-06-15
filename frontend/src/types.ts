export type Product = {
  id: number
  name: string
  price: number
  color: string
}

export type Client = {
  id: number
  name: string
}

export type Order = {
  id: number
  clientId: number
  total: number
  status: 'paid' | 'not-paid'
  paymentMethod: 'bio' | 'card' | 'cash' | 'pm'
  createdAt: string
}

export type OrderItem = {
  id: number
  orderId: number
  productId: number
  quantity: number
  price: number
}

export type ColorLookupType = {
  'bg-blue-400': string
  'bg-default-400': string
  'bg-orange-400': string
  'bg-danger-400': string
  'bg-success-400': string
  'bg-purple-400': string
  'bg-yellow-400': string
}

export type ProdBgColor =
  | 'bg-blue-400'
  | 'bg-default-400'
  | 'bg-orange-400'
  | 'bg-danger-400'
  | 'bg-success-400'
  | 'bg-purple-400'
  | 'bg-yellow-400'

export type ProdFields = 'name' | 'price' | 'color'
