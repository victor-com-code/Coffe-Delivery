import { ReactNode, createContext, useState } from 'react'

export interface PaymentMethodType {
  method: string
}

export interface AddressType {
  cep: string
  street: string
  houseNumber: number
  complement?: string
  state: string
  city: string
  neighborhood: string
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
  const [address, setAddress] = useState<AddressType>({
    cep: '',
    street: '',
    houseNumber: 0,
    state: '',
    city: '',
    neighborhood: '',
  })
  const [payment, setPayment] = useState<PaymentMethodType>({
    method: 'Dinheiro',
  })

  function setNewAddress(data: AddressType) {
    setAddress(data)
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
