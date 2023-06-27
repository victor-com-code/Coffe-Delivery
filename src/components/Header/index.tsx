import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  CartCounterContainer,
  LocationContainer,
} from './styles'
import logoCoffee from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink className={'logoHome'} to={'/'} title="Home">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Cidade, Estado</span>
        </LocationContainer>

        <NavLink to={''} title="Carrinho">
          <ShoppingCartSimple size={22} weight="fill" />
          <CartCounterContainer>3</CartCounterContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
