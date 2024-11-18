import { createContext, useState } from 'react';

const ShoppingCartContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}