import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { ButtonTextM, TextM, TextS } from '../../../../styles/text'
import { TitleXS } from '../../../../styles/titles'
import {
  AddressCardContainer,
  AddressFields,
  CEPCodeInput,
  CityInput,
  ComplementInput,
  InfoAddressContainer,
  InfoPaymentContainer,
  NeighborhoodInput,
  NumberInput,
  OrderInfoSectionContainer,
  PaymentCardContainer,
  PaymentMethodItem,
  StateInput,
  StreetInput,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function OrderInfoSection() {
  const { register } = useFormContext()

  return (
    <OrderInfoSectionContainer>
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
          <CEPCodeInput type="number" placeholder="CEP" {...register('cep')} />
          <StreetInput type="text" placeholder="Rua" {...register('street')} />
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
            <CityInput type="text" placeholder="Cidade" {...register('city')} />
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
              value={'Cartão de Crédito'}
            />
            <div>
              <CreditCard size={20} />
              <ButtonTextM>Cartão de Crédito</ButtonTextM>
            </div>
          </PaymentMethodItem>
          <PaymentMethodItem>
            <input
              type="radio"
              id="debit"
              {...register('payment')}
              value={'Cartão de Débito'}
            />
            <div>
              <Bank size={20} />
              <ButtonTextM>Cartão de Débito</ButtonTextM>
            </div>
          </PaymentMethodItem>
          <PaymentMethodItem>
            <input
              type="radio"
              id="money"
              {...register('payment')}
              value={'Dinheiro'}
            />
            <div>
              <Money size={20} />
              <ButtonTextM>Dinheiro</ButtonTextM>
            </div>
          </PaymentMethodItem>
        </InfoPaymentContainer>
      </PaymentCardContainer>
    </OrderInfoSectionContainer>
  )
}
