import { TextL, TextM } from '../../styles/text'
import { TitleL } from '../../styles/titles'
import {
  InfoItemContainer,
  InfoItemIcon,
  OrderBoard,
  OrderBoardInfos,
  OrderBoardModule,
  SuccessContainer,
} from './styles'

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import illustration from './assets/illustration.svg'
import { useContext } from 'react'
import { AddressContext } from '../../contexts/AddressContext'

export function Success() {
  const { address } = useContext(AddressContext)

  return (
    <SuccessContainer>
      <header>
        <TitleL>Uhu! Pedido confirmado</TitleL>
        <TextL className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </TextL>
      </header>

      <OrderBoard>
        <OrderBoardModule>
          <OrderBoardInfos>
            <InfoItemContainer>
              <InfoItemIcon iconColor="purple">
                <MapPin size={20} weight="fill" />
              </InfoItemIcon>
              <div>
                <TextM>
                  Entrega em{' '}
                  <strong>
                    Rua {address.street}, {address.houseNumber}{' '}
                    {address.complement && address.complement}
                  </strong>
                </TextM>
                <TextM>
                  {address.neighborhood} - {address.city}, {address.state}
                </TextM>
              </div>
            </InfoItemContainer>
            <InfoItemContainer>
              <InfoItemIcon iconColor="yellow">
                <Timer size={20} weight="fill" />
              </InfoItemIcon>
              <div>
                <TextM>Previsão de entrega</TextM>
                <TextM>
                  <strong>20 min - 30 min</strong>
                </TextM>
              </div>
            </InfoItemContainer>
            <InfoItemContainer>
              <InfoItemIcon iconColor="orange">
                <CurrencyDollar size={20} weight="fill" />
              </InfoItemIcon>
              <div>
                <TextM>Pagamento na entrega</TextM>
                <TextM>
                  <strong>
                    {/* {address.cep.includes('-card') && 'Cartão de'} */}
                    Cartão de Crédito
                  </strong>
                </TextM>
              </div>
            </InfoItemContainer>
          </OrderBoardInfos>
        </OrderBoardModule>

        <img src={illustration} alt="" />
      </OrderBoard>
    </SuccessContainer>
  )
}
