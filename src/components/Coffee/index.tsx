import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  AddToCartButton,
  AddToCartFormContainer,
  AmountDecreaseButton,
  AmountIncreaseButton,
  AmountInput,
  CoffeeAmount,
  CoffeeCardCatalog,
  CoffeeTags,
  ImageCoffee,
  TagContent,
} from './styles'
import { TagText, TextS } from '../../styles/text'
import { TitleS } from '../../styles/titles'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export interface CoffeeType {
  id: string
  image: string
  name: string
  description: string
  tags: string[]
  price: string
  amount: number
}

interface CoffeeProps {
  coffee: CoffeeType
}

export function Coffee({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState<number>(0)

  const { addCoffeeToCart } = useContext(CoffeesContext)

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
  }, [amount, coffee])

  function handleAddToCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    addCoffeeToCart(coffee)
  }

  const isSubmitDisabled = !amount || amount < 0

  return (
    <CoffeeCardCatalog className="catalog" key={coffee.id}>
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
          <small>R$</small> <span>{coffee.price}</span>
        </TextS>
        <form action="" onSubmit={handleAddToCart}>
          <CoffeeAmount>
            <AmountDecreaseButton type="button" onClick={handleDecreaseAmount}>
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

            <AmountIncreaseButton type="button" onClick={handleIncreaseAmount}>
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
