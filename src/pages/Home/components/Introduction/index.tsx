import { TextL, TextM } from '../../../../styles/text'
import { TitleXL } from '../../../../styles/titles'
import {
  IntroContent,
  ItemIcons,
  Item,
  ItemsContainer,
  IntroImage,
} from './styles'

import {
  Coffee as IconCoffee,
  Package,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'

import introCoffee from './assets/intro-coffee.svg'

export function Introduction() {
  return (
    <>
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
              <IconCoffee size={16} weight="fill" />
            </ItemIcons>
            <TextM>O café chega fresquinho até você</TextM>
          </Item>
        </ItemsContainer>
      </IntroContent>
      <IntroImage>
        <img src={introCoffee} alt="Coffee Delivery" />
      </IntroImage>
    </>
  )
}
