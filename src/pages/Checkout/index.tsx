import { useContext, useEffect } from 'react'
import { Coffee } from '../../components/Coffee'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  CartContainer,
  CheckoutContainer,
  DividerItem,
  OrderInfoContainer,
} from './styles'
import { TitleXS } from '../../styles/titles'
import { BRReal } from '../../App'
import { TextL, TextS } from '../../styles/text'

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
        {/* PaymentContainer */}
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
        </CartContainer>
      </aside>
    </CheckoutContainer>
  )
}
