import { Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react'
import {
  AddToCartButton,
  AddToCartFormContainer,
  AmountDecreaseButton,
  AmountIncreaseButton,
  AmountInput,
  CoffeeAmount,
  CoffeeCardCart,
  CoffeeCardCatalog,
  CoffeeTags,
  ImageCoffee,
  ImageCoffeeCart,
  RemoveFromCartButton,
  RemoveFromCartFormContainer,
  TagContent,
} from './styles'
import { ButtonTextM, TagText, TextM, TextS } from '../../styles/text'
import { TitleS } from '../../styles/titles'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { BRReal } from '../../App'
import { CoffeeType } from '../../reducers/coffees'

interface CoffeeProps {
  coffee: CoffeeType
  place?: string
}

export function Coffee({ coffee, place = 'catalog' }: CoffeeProps) {
  const [amount, setAmount] = useState<number>(coffee.amount)

  const { addCoffeeToCart, removeCoffeeFromCart, setCalculateTotalPrice } =
    useContext(CoffeesContext)

  function handleDecreaseAmount() {
    setAmount((state) => {
      return (state -= 1)
    })
  }

  function handleIncreaseAmount() {
    setAmount((state) => {
      return (state += 1)
    })
  }

  useEffect(() => {
    coffee.amount = amount
    setCalculateTotalPrice()
  }, [amount, coffee, setCalculateTotalPrice])

  function handleAddToCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    addCoffeeToCart(coffee)
  }

  function handleRemoveFromCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    removeCoffeeFromCart(coffee.id)
  }

  const isSubmitDisabled =
    place === 'catalog' ? !amount || amount < 0 : amount < 2

  let card

  if (place === 'cart') {
    card = (
      <CoffeeCardCart key={coffee.id}>
        <ImageCoffeeCart src={coffee.image} alt="" />

        <RemoveFromCartFormContainer>
          <TextM>{coffee.name}</TextM>
          <form onSubmit={handleRemoveFromCart}>
            <CoffeeAmount>
              <AmountDecreaseButton
                type="button"
                onClick={handleDecreaseAmount}
                disabled={isSubmitDisabled}
              >
                <Minus size={16} />
              </AmountDecreaseButton>

              <AmountInput
                type="number"
                placeholder="1"
                min={1}
                max={99}
                value={amount}
                readOnly
              />

              <AmountIncreaseButton
                type="button"
                onClick={handleIncreaseAmount}
              >
                <Plus size={16} />
              </AmountIncreaseButton>
            </CoffeeAmount>

            <RemoveFromCartButton type="submit">
              <Trash size={22} />
              <ButtonTextM>Remover</ButtonTextM>
            </RemoveFromCartButton>
          </form>
        </RemoveFromCartFormContainer>

        <TextM className="price">
          <span>{BRReal.format(coffee.price)}</span>
        </TextM>
      </CoffeeCardCart>
    )
  } else {
    card = (
      <CoffeeCardCatalog key={coffee.id}>
        <ImageCoffee src={coffee.image} alt="" />

        <CoffeeTags>
          {coffee.tags.map((tag) => {
            return (
              <TagContent key={`${coffee.id}-${tag}`}>
                <TagText>{tag}</TagText>
              </TagContent>
            )
          })}
        </CoffeeTags>

        <TitleS>{coffee.name}</TitleS>
        <TextS className="description">{coffee.description}</TextS>

        <AddToCartFormContainer>
          <TextS>
            <span>{BRReal.format(coffee.price)}</span>
          </TextS>
          <form onSubmit={handleAddToCart}>
            <CoffeeAmount>
              <AmountDecreaseButton
                type="button"
                onClick={handleDecreaseAmount}
                disabled={isSubmitDisabled}
              >
                <Minus size={16} />
              </AmountDecreaseButton>

              <AmountInput
                type="number"
                placeholder="1"
                min={1}
                max={99}
                value={amount}
                readOnly
              />

              <AmountIncreaseButton
                type="button"
                onClick={handleIncreaseAmount}
              >
                <Plus size={16} />
              </AmountIncreaseButton>
            </CoffeeAmount>

            <AddToCartButton type="submit" disabled={isSubmitDisabled}>
              <ShoppingCart size={22} weight="fill" />
            </AddToCartButton>
          </form>
        </AddToCartFormContainer>
      </CoffeeCardCatalog>
    )
  }

  return card
}
