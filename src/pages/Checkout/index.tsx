import { useContext, useEffect } from 'react'
import { Coffee } from '../../components/Coffee'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  AddressCardContainer,
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

export function Checkout() {
  const { coffeesOnCart, totalPrice, setCalculateTotalPrice } =
    useContext(CoffeesContext)

  const deliveryFee = 3.55

  const totalToPay = deliveryFee + totalPrice

  useEffect(() => {
    setCalculateTotalPrice()
  }, [coffeesOnCart, setCalculateTotalPrice])

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
          <form>
            <CEPCodeInput type="number" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />
            <InfoAddressContainer>
              <NumberInput type="number" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
            </InfoAddressContainer>
            <InfoAddressContainer>
              <StateInput type="text" placeholder="UF" maxLength={2} />
              <CityInput type="text" placeholder="Cidade" />
              <NeighborhoodInput type="text" placeholder="Bairro" />
            </InfoAddressContainer>
          </form>
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
              <input type="radio" name="payment" id="credit" />
              <div>
                <CreditCard size={20} />
                <ButtonTextM>Cartão de crédito</ButtonTextM>
              </div>
            </PaymentMethodItem>
            <PaymentMethodItem>
              <input type="radio" name="payment" id="debit" />
              <div>
                <Bank size={20} />
                <ButtonTextM>Cartão de débito</ButtonTextM>
              </div>
            </PaymentMethodItem>
            <PaymentMethodItem>
              <input type="radio" name="payment" id="money" />
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

          <ConfirmOrderButton>
            <ButtonTextG>Confirmar Pedido</ButtonTextG>
          </ConfirmOrderButton>
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
