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

interface CoffeesState {
  coffees: CoffeeType[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  if (action.type === ActionTypes.SET_COFFEE_AMOUNT) {
    return produce(state, (draft) => {
      draft.coffees = state.coffees.map((item) => {
        if (item.id === action.payload.coffeeId) {
          return { ...item, amount: action.payload.amount }
        } else {
          return item
        }
      })
    })
  }

  return state
}
