import { AddressType } from '../reducers/address'
import { CoffeeType } from '../reducers/coffees'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  SET_COFFEE_AMOUNT_ON_CART = 'SET_COFFEE_AMOUNT_ON_CART',
  RESET_COFFEE_CART = 'RESET_COFFEE_CART',
}

export function addCoffeeToCartAction(newCoffee: CoffeeType) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function setCoffeeAmountOnCartAction(coffeeId: string, amount: number) {
  return {
    type: ActionTypes.SET_COFFEE_AMOUNT_ON_CART,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export function resetCoffeeCartAction() {
  return {
    type: ActionTypes.RESET_COFFEE_CART,
  }
}

export enum AddressActionTypes {
  SET_NEW_ADDRESS = 'SET_NEW_ADDRESS',
}

export function setNewAddressAction(newAddress: AddressType) {
  return {
    type: AddressActionTypes.SET_NEW_ADDRESS,
    payload: {
      newAddress,
    },
  }
}
