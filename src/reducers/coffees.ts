import { ActionTypes } from '../contexts/actions'

export interface CoffeeType {
  id: string
  image: string
  name: string
  description: string
  tags: string[]
  price: number
  amount: number
}

interface CoffeesOnCartState {
  coffeesOnCart: CoffeeType[]
}

export function coffeesOnCartReducer(state: CoffeesOnCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return {
        coffeesOnCart: [...state.coffeesOnCart, action.payload.newCoffee],
      }

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return {
        coffeesOnCart: state.coffeesOnCart.filter((coffee) => {
          return coffee.id !== action.payload.coffeeId
        }),
      }

    case ActionTypes.SET_COFFEE_AMOUNT_ON_CART:
      return {
        coffeesOnCart: state.coffeesOnCart.map((item) => {
          if (item.id === action.payload.data.id) {
            return { ...item, amount: action.payload.coffee.amount }
          } else {
            return item
          }
        }),
      }

    case ActionTypes.RESET_COFFEE_CART:
      return {
        coffeesOnCart: [],
      }

    default:
      return state
  }
}
