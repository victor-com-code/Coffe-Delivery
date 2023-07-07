import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  HeaderContainer,
  CartCounterContainer,
  LocationContainer,
} from './styles'
import logoCoffee from '../../assets/logo.svg'
import logoCoffeeLight from '../../assets/logo-light.svg'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { AddressContext } from '../../contexts/AddressContext'
import { useTheme } from 'styled-components'

export function Header() {
  const { coffeesOnCart } = useContext(CartContext)
  const { address } = useContext(AddressContext)

  const isLightTheme = useTheme().background === '#FAFAFA'

  const totalItemsInCart = coffeesOnCart.length

  return (
    <HeaderContainer>
      <NavLink className={'logoHome'} to={'/'} title="Home">
        <img src={isLightTheme ? logoCoffee : logoCoffeeLight} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          {address.city !== '' && (
            <span>{`${address.city}, ${address.state}`}</span>
          )}
        </LocationContainer>

        <NavLink to={'/checkout'} title="Carrinho">
          <ShoppingCartSimple size={22} weight="fill" />
          {totalItemsInCart > 0 && (
            <CartCounterContainer>{totalItemsInCart}</CartCounterContainer>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
