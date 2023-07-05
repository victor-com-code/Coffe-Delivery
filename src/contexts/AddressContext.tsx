import { ReactNode, createContext, useReducer, useState } from 'react'
import { AddressType, addressReducer } from '../reducers/address'
import { setNewAddressAction } from './actions'

export interface PaymentMethodType {
  method: string
}

interface AddressContextType {
  address: AddressType
  payment: PaymentMethodType
  setNewAddress: (data: AddressType) => void
  setNewPaymentMethod: (method: PaymentMethodType) => void
}

export const AddressContext = createContext({} as AddressContextType)

interface AddressContextProviderProps {
  children: ReactNode
}

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [addressState, dispatch] = useReducer(addressReducer, {
    address: {
      cep: '',
      street: '',
      houseNumber: 0,
      state: '',
      city: '',
      neighborhood: '',
    },
  })

  const [payment, setPayment] = useState<PaymentMethodType>({
    method: 'Dinheiro',
  })

  const { address } = addressState

  function setNewAddress(newAddress: AddressType) {
    dispatch(setNewAddressAction(newAddress))
  }

  function setNewPaymentMethod(method: PaymentMethodType) {
    setPayment(method)
  }

  return (
    <AddressContext.Provider
      value={{ address, payment, setNewAddress, setNewPaymentMethod }}
    >
      {children}
    </AddressContext.Provider>
  )
}
