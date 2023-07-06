import { produce } from 'immer'
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
      return produce(state, (draft) => {
        draft.coffeesOnCart.push(action.payload.newCoffee)
      })

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = state.coffeesOnCart.filter((coffee) => {
          return coffee.id !== action.payload.coffeeId
        })
      })

    case ActionTypes.SET_COFFEE_AMOUNT_ON_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = state.coffeesOnCart.map((item) => {
          if (item.id === action.payload.coffeeId) {
            return { ...item, amount: action.payload.amount }
          } else {
            return item
          }
        })
      })

    case ActionTypes.RESET_COFFEE_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = []
      })

    default:
      return state
  }
}
