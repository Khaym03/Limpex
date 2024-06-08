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
