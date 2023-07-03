import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  .logoHome {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.08);
    }
  }

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      padding: 0.5rem;
      border-radius: 6px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;
      position: relative;

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};

        span {
          background: ${(props) => props.theme.yellow};
        }
      }
    }
  }
`

export const CartCounterContainer = styled.span`
  background: ${(props) => props.theme['yellow-dark']};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  position: absolute;
  right: calc(0px - 0.52rem);
  top: calc(0px - 0.5rem);

  border-radius: 1000px;

  color: ${(props) => props.theme.white};
  text-align: center;
  font-size: 0.75rem;
  font-weight: bolder;
  line-height: 1.3;

  transition: background-color 0.2s;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};

  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.3;

  :first-child {
    text-transform: capitalize;
  }
`
