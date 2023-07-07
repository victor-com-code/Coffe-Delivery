import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
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
  const [addressState, dispatch] = useReducer(
    addressReducer,
    {
      address: {},
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:address-state-1.0.0',
      )

      if (storedStateAsJson) return JSON.parse(storedStateAsJson)

      return initialState
    },
  )

  const [payment, setPayment] = useState<PaymentMethodType>({
    method: 'Dinheiro',
  })

  const { address } = addressState

  useEffect(() => {
    const stateJSON = JSON.stringify(addressState)

    localStorage.setItem('@coffee-delivery:address-state-1.0.0', stateJSON)
  }, [addressState])

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
