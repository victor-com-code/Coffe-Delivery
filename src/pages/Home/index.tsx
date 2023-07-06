import {
  CoffeesSection,
  HomeContainer,
  IntroSection,
  ListContainer,
} from './styles'

import { TitleM } from '../../styles/titles'
import { CoffeeCard } from '../../components/Coffee'
import { Introduction } from './components/Introduction'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Home() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <HomeContainer>
      <IntroSection>
        <Introduction />
      </IntroSection>

      <CoffeesSection>
        <TitleM>Nossos Cafés</TitleM>
        <ListContainer>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </ListContainer>
      </CoffeesSection>
    </HomeContainer>
  )
}
