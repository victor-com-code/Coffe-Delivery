import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  aside {
    width: 27.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px 44px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;

  gap: 1.5rem;
`

export const CartItemCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const DividerItem = styled.span`
  background: ${(props) => props.theme['base-button']};
  align-self: stretch;
  height: 1px;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    text-align: right;
    width: 100%;

    &.subtitle {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: bold;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  width: 100%;

  transition: background-color 0.3s;

  span {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-weight: bold;
  }

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
