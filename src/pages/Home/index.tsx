import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeesContainer,
  HomeContainer,
  IntroSection,
  ListContainer,
} from './styles'

import { TitleM } from '../../styles/titles'
import { Introduction } from './components/Introduction'

export function Home() {
  return (
    <HomeContainer>
      <IntroSection>
        <Introduction />
      </IntroSection>

      <CoffeesContainer>
        <TitleM>Nossos Cafés</TitleM>
        <ListContainer>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
          <div>Café 1</div>
        </ListContainer>
      </CoffeesContainer>
    </HomeContainer>
  )
}
