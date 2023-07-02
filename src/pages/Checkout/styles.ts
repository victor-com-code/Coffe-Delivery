import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
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

const CheckoutCardContainerBase = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  width: 100%;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const AddressCardContainer = styled(CheckoutCardContainerBase)`
  header svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const PaymentCardContainer = styled(CheckoutCardContainerBase)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

const InfoInputBase = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};

  padding: 0.75rem;
  display: flex;
  align-items: center;
`

export const CEPCodeInput = styled(InfoInputBase)``
export const StreetInput = styled(InfoInputBase)`
  width: 100%;
`
export const NumberInput = styled(InfoInputBase)`
  width: 12.5rem;
`
export const ComplementInput = styled(InfoInputBase)`
  flex: 100%;
`
export const StateInput = styled(InfoInputBase)`
  text-transform: uppercase;
  width: 3.75rem;
`
export const CityInput = styled(InfoInputBase)`
  flex: 1;
`
export const NeighborhoodInput = styled(InfoInputBase)`
  width: 12.5rem;
`

const InfoContainerBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const InfoAddressContainer = styled(InfoContainerBase)``

export const InfoPaymentContainer = styled(InfoContainerBase)`
  justify-content: center;
`

export const PaymentMethodItem = styled.label`
  cursor: pointer;
  border-radius: 6px;
  flex: 1 0 0;
  width: 100%;

  input[type='radio'] {
    display: none;

    &:checked + div {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
      color: ${(props) => props.theme.purple};
    }
  }

  div {
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    width: 100%;
    text-transform: uppercase;

    transition: all 0.3s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
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
