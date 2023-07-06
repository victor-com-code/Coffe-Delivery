import { AddressType } from '../reducers/address'
import { CoffeeType } from '../reducers/coffees'

export enum ActionTypes {
  SET_COFFEE_AMOUNT = 'SET_COFFEE_AMOUNT',
}

export function setCoffeeAmountAction(coffeeId: string, amount: number) {
  return {
    type: ActionTypes.SET_COFFEE_AMOUNT,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SET_COFFEE_AMOUNT_ON_CART = 'SET_COFFEE_AMOUNT_ON_CART',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToCartAction(newCoffee: CoffeeType) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function setCoffeeAmountOnCartAction(coffeeId: string, amount: number) {
  return {
    type: CartActionTypes.SET_COFFEE_AMOUNT_ON_CART,
    payload: {
      coffeeId,
      amount,
    },
  }
}

export function resetCoffeesOnCartAction() {
  return {
    type: CartActionTypes.RESET_CART,
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
