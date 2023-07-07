import styled from 'styled-components'

export const IntroContent = styled.div`
  h1 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
  }
`

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

  color: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.425rem;
  border-radius: 1000px;
`

export const IntroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  img {
    width: calc(30rem - 4px);

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`
