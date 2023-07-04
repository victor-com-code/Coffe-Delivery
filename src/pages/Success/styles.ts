import styled from 'styled-components'

export const SuccessContainer = styled.main`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .subtitle {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderBoard = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const OrderBoardModule = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-dark']},
    ${(props) => props.theme.purple}
  );
  padding: 3px;
  border-radius: 6px 36px;
  width: 32rem;
`

export const OrderBoardInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  background: ${(props) => props.theme.background};
  padding: 2.5rem 2.5rem 4rem 2.5rem;
  border-radius: 6px 36px;
`

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['base-text']};
  }
`

const ICON_COLORS = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  purple: 'purple',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const InfoItemIcon = styled.span<IconProps>`
  background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 1000px;
`
