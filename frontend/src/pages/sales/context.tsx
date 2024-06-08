import React, { useState } from 'react'
import { Product } from '../../types'

type SelectedProductContextType = {
  selectedProduct: Product | null
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>
}

const defaultContextValue: SelectedProductContextType = {
  selectedProduct: null,
  setSelectedProduct: () => {}
}

export const Ctx = React.createContext<SelectedProductContextType>(defaultContextValue)

export default function Context({ children }: any) {
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null)

  return (
    <Ctx.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </Ctx.Provider>
  )
}
