import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;

  gap: 1.5rem;
`

export const OrderInfoContainer = styled.div`
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

export const DividerItem = styled.span`
  background: ${(props) => props.theme['base-button']};
  align-self: stretch;
  height: 1px;
`
