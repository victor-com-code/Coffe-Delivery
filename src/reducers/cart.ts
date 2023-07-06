import { produce } from 'immer'
import { CartActionTypes } from '../contexts/actions'
import { CoffeeType } from './coffees'

interface CartState {
  coffeesOnCart: CoffeeType[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart.push(action.payload.newCoffee)
      })

    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = state.coffeesOnCart.filter((coffee) => {
          return coffee.id !== action.payload.coffeeId
        })
      })

    case CartActionTypes.SET_COFFEE_AMOUNT_ON_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = state.coffeesOnCart.map((item) => {
          if (item.id === action.payload.coffeeId) {
            return { ...item, amount: action.payload.amount }
          } else {
            return item
          }
        })
      })

    case CartActionTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.coffeesOnCart = []
      })

    default:
      return state
  }
}
