import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { AddressContextProvider } from './contexts/AddressContext'
import { CartContextProvider } from './contexts/CartContext'
import { useState } from 'react'
import { darkTheme } from './styles/themes/dark'
import { defaultTheme } from './styles/themes/default'
import { Swap } from '@phosphor-icons/react'

export const BRReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function App() {
  const [activeTheme, setActiveTheme] = useState(defaultTheme)

  function handleActiveTheme() {
    activeTheme === defaultTheme
      ? setActiveTheme(darkTheme)
      : setActiveTheme(defaultTheme)
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <label className="themeButton">
        <input type="checkbox" onClick={handleActiveTheme} />
        <Swap size={32} />
      </label>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CartContextProvider>
            <AddressContextProvider>
              <Router />
            </AddressContextProvider>
          </CartContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
