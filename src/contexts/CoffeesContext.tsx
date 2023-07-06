import { ReactNode, createContext, useState, useReducer } from 'react'
import { CoffeeType, coffeesOnCartReducer } from '../reducers/coffees'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  resetCoffeeCartAction,
  setCoffeeAmountOnCartAction,
} from './actions'

interface CoffeesContextType {
  coffees: CoffeeType[]
  coffeesOnCart: CoffeeType[]
  totalPrice: number
  setCoffeeAmount: (coffeeId: string, amount: number) => void
  setCoffeeAmountOnCart: (coffeeId: string, amount: number) => void
  setCalculateTotalPrice: () => void
  addCoffeeToCart: (data: CoffeeType) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  resetCoffeesOnCart: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([
    {
      id: '1',
      image: '/src/pages/Home/assets/expresso.png',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['Tradicional'],
      price: 9.9,
      amount: 0,
    },
    {
      id: '2',
      image: '/src/pages/Home/assets/expresso-americano.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['Tradicional'],
      price: 9.9,
      amount: 0,
    },
    {
      id: '3',
      image: '/src/pages/Home/assets/expresso-cremoso.png',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['Tradicional'],
      price: 9.9,
      amount: 0,
    },
    {
      id: '4',
      image: '/src/pages/Home/assets/expresso-gelado.png',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['Tradicional', 'Gelado'],
      price: 9.9,
      amount: 0,
    },
    {
      id: '5',
      image: '/src/pages/Home/assets/cafe-com-leite.png',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      amount: 0,
    },
    {
      id: '6',
      image: '/src/pages/Home/assets/latte.png',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['Tradicional', 'Com Leite'],
      price: 12.9,
      amount: 0,
    },
    {
      id: '7',
      image: '/src/pages/Home/assets/capuccino.png',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 12.9,
      amount: 0,
    },
    {
      id: '8',
      image: '/src/pages/Home/assets/macchiato.png',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 12.9,
      amount: 0,
    },
    {
      id: '9',
      image: '/src/pages/Home/assets/mocaccino.png',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 12.9,
      amount: 0,
    },
    {
      id: '10',
      image: '/src/pages/Home/assets/chocolate.png',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['Especial', 'Com Leite'],
      price: 19.9,
      amount: 0,
    },
    {
      id: '11',
      image: '/src/pages/Home/assets/cubano.png',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      price: 19.9,
      amount: 0,
    },
    {
      id: '12',
      image: '/src/pages/Home/assets/havaiano.png',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['Especial'],
      price: 19.9,
      amount: 0,
    },
    {
      id: '13',
      image: '/src/pages/Home/assets/arabe.png',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['Especial'],
      price: 19.9,
      amount: 0,
    },
    {
      id: '14',
      image: '/src/pages/Home/assets/irlandes.png',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['Especial', 'Alcoólico'],
      price: 19.9,
      amount: 0,
    },
  ])

  const [cartState, dispatch] = useReducer(coffeesOnCartReducer, {
    coffeesOnCart: [],
  })

  const [totalPrice, setTotalPrice] = useState(0)

  const { coffeesOnCart } = cartState

  function setCoffeeAmount(coffeeId: string, amount: number) {
    setCoffees((state) => {
      return state.map((coffee) => {
        if (coffee.id === coffeeId) {
          return {
            ...coffee,
            amount,
          }
        }

        return coffee
      })
    })
  }

  function addCoffeeToCart(data: CoffeeType) {
    dispatch(addCoffeeToCartAction(data))
  }

  function setCoffeeAmountOnCart(coffeeId: string, amount: number) {
    dispatch(setCoffeeAmountOnCartAction(coffeeId, amount))
  }

  function removeCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  function setCalculateTotalPrice() {
    setTotalPrice(
      coffeesOnCart.reduce((sum: number, coffee: CoffeeType) => {
        return (sum += coffee.price * coffee.amount)
      }, 0),
    )
  }

  function resetCoffeesOnCart() {
    dispatch(resetCoffeeCartAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesOnCart,
        totalPrice,
        setCoffeeAmount,
        setCoffeeAmountOnCart,
        setCalculateTotalPrice,
        addCoffeeToCart,
        removeCoffeeFromCart,
        resetCoffeesOnCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
