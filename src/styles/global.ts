import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    --webkit-font-smooth: antialisied;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  input[type="number"]{
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  .themeButton {
    background: ${(props) => props.theme['reverse-background']};
    color: ${(props) => props.theme.background};

    cursor: pointer;
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    border: 1px solid transparent;
    border-radius: 1000px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    transition: all 0.5s;

    input {
      display: none;
    }

    &:hover {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme['reverse-background']};;
      border-color: ${(props) => props.theme['reverse-background']};
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
