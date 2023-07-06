import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoffeeCard } from '../../components/Coffee'
import { CartContext } from '../../contexts/CartContext'
import {
  CartContainer,
  CartItemCoffee,
  CheckoutContainer,
  CoffeeInfoContainer,
  ConfirmOrderButton,
  DividerItem,
} from './styles'
import { TitleXS } from '../../styles/titles'
import { BRReal } from '../../App'
import { ButtonTextG, TextL, TextS } from '../../styles/text'

import {
  AddressContext,
  PaymentMethodType,
} from '../../contexts/AddressContext'
import { OrderInfoSection } from './components/OrderInfoSection'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressType } from '../../reducers/address'

const newOrderFormValidationSchema = zod
  .object({
    cep: zod.string().length(8),
    street: zod.string().min(1, 'Informe a Rua'),
    houseNumber: zod.number().min(1, 'Informe o número da casa'),
    complement: zod.string(),
    state: zod.string().toUpperCase().min(1, 'Informe o Estado'),
    city: zod.string().min(1, 'Informe a Cidade'),
    neighborhood: zod.string().min(1, 'Informe o Bairro'),
    payment: zod.string().min(1),
  })
  .partial({ complement: true })

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const {
    coffeesOnCart,
    totalPrice,
    setCalculateTotalPrice,
    resetCoffeesOnCart,
  } = useContext(CartContext)

  const { setNewAddress, setNewPaymentMethod } = useContext(AddressContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit, reset } = newOrderForm

  const navigate = useNavigate()

  const deliveryFee = 3.55
  const totalToPay = deliveryFee + totalPrice

  useEffect(() => {
    setCalculateTotalPrice()
  }, [coffeesOnCart, setCalculateTotalPrice])

  function handleCreateNewOrder(data: NewOrderFormData) {
    const addressInfo: AddressType = {
      cep: data.cep,
      street: data.street,
      houseNumber: data.houseNumber,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      complement: data.complement,
    }

    setNewAddress(addressInfo)
    setNewPaymentMethod({ method: data.payment })

    resetCoffeesOnCart()

    reset()

    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <FormProvider {...newOrderForm}>
        <OrderInfoSection />
      </FormProvider>

      <aside>
        <TitleXS>Cafés selecionados</TitleXS>
        <CartContainer>
          {coffeesOnCart.map((coffee) => {
            return (
              <CartItemCoffee key={coffee.name}>
                <CoffeeCard key={coffee.id} coffee={coffee} place="cart" />{' '}
                <DividerItem></DividerItem>
              </CartItemCoffee>
            )
          })}
          <CoffeeInfoContainer>
            <TextS>
              Total dos itens <span>{BRReal.format(totalPrice)}</span>
            </TextS>
            <TextS>
              Entrega <span>{BRReal.format(deliveryFee)}</span>
            </TextS>
            <TextL className="subtitle">
              Total <span>{BRReal.format(totalToPay)}</span>
            </TextL>
          </CoffeeInfoContainer>

          <ConfirmOrderButton
            onClick={handleSubmit(handleCreateNewOrder)}
            type="submit"
          >
            <ButtonTextG>Confirmar Pedido</ButtonTextG>
          </ConfirmOrderButton>
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
