import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { AddressContextProvider } from './contexts/AddressContext'
import { CartContextProvider } from './contexts/CartContext'

export const BRReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
