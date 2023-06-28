import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto 5rem;
  padding: 0 10rem;

  @media (max-width: 834px) {
    padding: 0 2rem;
  }
`
