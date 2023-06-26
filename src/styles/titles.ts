import styled from 'styled-components'

const TitleBase = styled.h1`
  font-family: 'Baloo 2', cursive;
  line-height: 1.3;

  color: ${(props) => props.theme['base-title']};
`

export const TitleXL = styled(TitleBase)`
  font-size: 3rem;
  font-weight: bolder;
`

export const TitleL = styled(TitleBase)`
  font-size: 2rem;
  font-weight: bolder;
`

export const TitleM = styled(TitleBase)`
  font-size: 1.5rem;
  font-weight: bolder;
`

export const TitleS = styled(TitleBase)`
  font-size: 1.25rem;
  font-weight: bold;
`

export const TitleXS = styled(TitleBase)`
  font-size: 1.125rem;
  font-weight: bold;
`
