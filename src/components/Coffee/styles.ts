import styled from 'styled-components'

const CoffeeCard = styled.div`
  display: flex;

  background: ${(props) => props.theme['base-card']};

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCardCatalog = styled(CoffeeCard)`
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  max-width: 15rem;
  padding: 0 1.5rem 1.25rem;

  .description {
    color: ${(props) => props.theme['base-label']};
    margin: 0.5rem 0 2rem;
    text-align: center;
  }
`

export const ImageCoffee = styled.img`
  margin-top: calc(0px - 1rem - 4px);
`

export const CoffeeTags = styled.div`
  display: inline-flex;
  gap: 1.25rem;
  margin: 0.75rem 0 1rem;
`

export const TagContent = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddToCartFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  form {
    display: flex;
    gap: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};

    span {
      font-weight: bolder;
    }
  }
`

export const CoffeeAmount = styled.div`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

const AmountButtonBase = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.purple};
`

export const AmountDecreaseButton = styled(AmountButtonBase)`
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const AmountIncreaseButton = styled(AmountButtonBase)`
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const AmountInput = styled.input`
  border: none;
  background: transparent;
  width: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme['base-title']};

  -webkit-appearance: none;
  -moz-appearance: textfield;
`

export const AddToCartButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
