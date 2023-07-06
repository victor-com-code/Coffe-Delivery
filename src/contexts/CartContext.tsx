import { ReactNode, createContext, useReducer, useState } from 'react'
import { CoffeeType } from '../reducers/coffees'
import { cartReducer } from '../reducers/cart'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  resetCoffeesOnCartAction,
  setCoffeeAmountOnCartAction,
} from './actions'

interface CartContextType {
  coffeesOnCart: CoffeeType[]
  totalPrice: number
  addCoffeeToCart: (coffee: CoffeeType) => void
  setCoffeeAmountOnCart: (coffeeId: string, amount: number) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  resetCoffeesOnCart: () => void
  setCalculateTotalPrice: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffeesOnCart: [],
  })

  const [totalPrice, setTotalPrice] = useState(0)

  const { coffeesOnCart } = cartState

  function addCoffeeToCart(coffee: CoffeeType) {
    const coffeeIsAlreadyOnCart =
      coffeesOnCart.findIndex((item) => item.id === coffee.id) !== -1

    if (coffeeIsAlreadyOnCart) {
      dispatch(setCoffeeAmountOnCartAction(coffee.id, coffee.amount))
    } else {
      dispatch(addCoffeeToCartAction(coffee))
    }
  }

  function setCoffeeAmountOnCart(coffeeId: string, amount: number) {
    dispatch(setCoffeeAmountOnCartAction(coffeeId, amount))
  }

  function removeCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function resetCoffeesOnCart() {
    dispatch(resetCoffeesOnCartAction())
  }

  function setCalculateTotalPrice() {
    setTotalPrice(
      coffeesOnCart.reduce((sum, coffee) => {
        return (sum += coffee.price * coffee.amount)
      }, 0),
    )
  }

  return (
    <CartContext.Provider
      value={{
        coffeesOnCart,
        totalPrice,
        addCoffeeToCart,
        setCoffeeAmountOnCart,
        removeCoffeeFromCart,
        resetCoffeesOnCart,
        setCalculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
