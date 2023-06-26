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

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 4.125rem 0;
  gap: 1.25rem 2.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICONS_COLORS = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  purple: 'purple',
  grey: 'base-text',
} as const

interface IconsProps {
  iconsColor: keyof typeof ICONS_COLORS
}

export const ItemIcons = styled.span<IconsProps>`
  background: ${(props) => props.theme[ICONS_COLORS[props.iconsColor]]};

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.425rem;
  border-radius: 1000px;
`

export const ImageCoffee = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 30vw;

    @media (max-width: 834px) {
      width: 60vw;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
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
