import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin: 5rem 0;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

/* List */
export const CoffeesSection = styled.section`
  padding: 2rem 0;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1.5rem;

  &:has(.coffeeCard:hover) .coffeeCard:not(:hover) {
    opacity: 0.7;
  }
`
