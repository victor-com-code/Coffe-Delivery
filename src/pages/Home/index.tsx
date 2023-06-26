import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeesContainer,
  HomeContainer,
  IntroSection,
  IntroContent,
  ItemIcons,
  Item,
  ItemsContainer,
  ListContainer,
  ImageCoffee,
} from './styles'
import introCoffee from '../../assets/intro-coffee.svg'
import { TextL, TextM } from '../../styles/text'

import { TitleM, TitleXL } from '../../styles/titles'

export function Home() {
  return (
    <HomeContainer>
      <IntroSection>
        <IntroContent>
          <TitleXL>Encontre o café perfeito para qualquer hora do dia</TitleXL>
          <TextL>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextL>

          <ItemsContainer>
            <Item>
              <ItemIcons iconsColor="orange">
                <ShoppingCart size={16} weight="fill" />
              </ItemIcons>
              <TextM>Compra simples e segura</TextM>
            </Item>

            <Item>
              <ItemIcons iconsColor="grey">
                <Package size={16} weight="fill" />
              </ItemIcons>
              <TextM>Embalagem mantém o café intacto</TextM>
            </Item>

            <Item>
              <ItemIcons iconsColor="yellow">
                <Timer size={16} weight="fill" />
              </ItemIcons>
              <TextM>Entrega rápida e rastreada</TextM>
            </Item>

            <Item>
              <ItemIcons iconsColor="purple">
                <Coffee size={16} weight="fill" />
              </ItemIcons>
              <TextM>O café chega fresquinho até você</TextM>
            </Item>
          </ItemsContainer>
        </IntroContent>
        <ImageCoffee>
          <img src={introCoffee} alt="Coffee Delivery" />
        </ImageCoffee>
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
export { ListContainer }
