import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      setIsProductDetailOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}