import { useContext, useEffect } from 'react'
import { Coffee } from '../../components/Coffee'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  AddressCardContainer,
  AddressFields,
  CEPCodeInput,
  CartContainer,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  ConfirmOrderButton,
  DividerItem,
  InfoAddressContainer,
  InfoPaymentContainer,
  NeighborhoodInput,
  NumberInput,
  OrderInfoContainer,
  PaymentCardContainer,
  PaymentMethodItem,
  StateInput,
  StreetInput,
} from './styles'
import { TitleXS } from '../../styles/titles'
import { BRReal } from '../../App'
import {
  ButtonTextG,
  ButtonTextM,
  TextL,
  TextM,
  TextS,
} from '../../styles/text'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { AddressContext } from '../../contexts/AddressContext'

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
  const { coffeesOnCart, totalPrice, setCalculateTotalPrice } =
    useContext(CoffeesContext)

  const { setNewAddress } = useContext(AddressContext)

  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const deliveryFee = 3.55

  const totalToPay = deliveryFee + totalPrice

  useEffect(() => {
    setCalculateTotalPrice()
  }, [coffeesOnCart, setCalculateTotalPrice])

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)

    setNewAddress({
      cep: data.cep,
      houseNumber: data.houseNumber,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      complement: data.complement,
    })

    // reset()

    // navigate('/')
  }

  return (
    <CheckoutContainer>
      <section>
        <TitleXS>Complete seu pedido</TitleXS>
        <AddressCardContainer>
          <header>
            <MapPinLine size={24} />
            <div>
              <TextM>Endereço de Entrega</TextM>
              <TextS>Informe o endereço onde deseja receber seu pedido</TextS>
            </div>
          </header>
          <AddressFields>
            <CEPCodeInput
              type="number"
              placeholder="CEP"
              {...register('cep')}
            />
            <StreetInput
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
            <InfoAddressContainer>
              <NumberInput
                type="number"
                placeholder="Número"
                {...register('houseNumber', { valueAsNumber: true })}
              />
              <ComplementInput
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </InfoAddressContainer>
            <InfoAddressContainer>
              <StateInput
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register('state')}
              />
              <CityInput
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <NeighborhoodInput
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
            </InfoAddressContainer>
          </AddressFields>
        </AddressCardContainer>
        <PaymentCardContainer>
          <header>
            <CurrencyDollar size={24} />
            <div>
              <TextM>Pagamento</TextM>
              <TextS>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextS>
            </div>
          </header>
          <InfoPaymentContainer>
            <PaymentMethodItem>
              <input
                type="radio"
                id="credit"
                {...register('payment')}
                value={'credit'}
              />
              <div>
                <CreditCard size={20} />
                <ButtonTextM>Cartão de crédito</ButtonTextM>
              </div>
            </PaymentMethodItem>
            <PaymentMethodItem>
              <input
                type="radio"
                id="debit"
                {...register('payment')}
                value={'debit'}
              />
              <div>
                <Bank size={20} />
                <ButtonTextM>Cartão de débito</ButtonTextM>
              </div>
            </PaymentMethodItem>
            <PaymentMethodItem>
              <input
                type="radio"
                id="money"
                {...register('payment')}
                value={'money'}
              />
              <div>
                <Money size={20} />
                <ButtonTextM>Dinheiro</ButtonTextM>
              </div>
            </PaymentMethodItem>
          </InfoPaymentContainer>
        </PaymentCardContainer>
      </section>

      <aside>
        <TitleXS>Cafés selecionados</TitleXS>
        <CartContainer>
          {coffeesOnCart.map((coffee) => {
            return (
              <>
                <Coffee key={coffee.id} coffee={coffee} place="cart" />{' '}
                <DividerItem></DividerItem>
              </>
            )
          })}
          <OrderInfoContainer>
            <TextS>
              Total dos itens <span>{BRReal.format(totalPrice)}</span>
            </TextS>
            <TextS>
              Entrega <span>{BRReal.format(deliveryFee)}</span>
            </TextS>
            <TextL className="subtitle">
              Total <span>{BRReal.format(totalToPay)}</span>
            </TextL>
          </OrderInfoContainer>

          <ConfirmOrderButton onClick={handleSubmit(handleCreateNewOrder)}>
            <ButtonTextG>Confirmar Pedido</ButtonTextG>
          </ConfirmOrderButton>
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
