import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin: 5.75rem 0;

  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

export const IntroContent = styled.div``

    color: ${(props) => props.theme['base-subtitle']};
  }
`

/* */
export const CoffeesContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  padding: 2rem 0;
`

export const ListContainer = styled.div`
  display: flex;
`
