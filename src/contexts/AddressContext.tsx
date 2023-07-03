import { ReactNode, createContext, useState } from 'react'

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
  setNewAddress: (data: AddressType) => void
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

  function setNewAddress(data: AddressType) {
    setAddress(data)
  }

  return (
    <AddressContext.Provider value={{ address, setNewAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
