import styled from 'styled-components'

export const OrderInfoSectionContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
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
`

export const PaymentCardContainer = styled(CheckoutCardContainerBase)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const AddressFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const InfoInputBase = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  padding: 0.75rem;
  display: flex;
  align-items: center;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CEPCodeInput = styled(InfoInputBase)``
export const StreetInput = styled(InfoInputBase)`
  width: 100%;
  text-transform: capitalize;
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
  text-transform: capitalize;
`
export const NeighborhoodInput = styled(InfoInputBase)`
  width: 12.5rem;
  text-transform: capitalize;
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
