import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font: 400 1rem ${props => props.theme.font.fontFamily.roboto};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.background.main};
    color: ${({ theme }) => theme.color.background.contrastText};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes shadowAnimationOrange {
    0% {
      box-shadow: ${props => props.theme.color.orangeRGBA.main} 0px 5px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented3} 0px
          10px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented2} 0px
          15px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented1} 0px
          20px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented5} 0px
          25px;
    }
    25% {
      box-shadow: none;
    }
    50% {
      box-shadow: ${props => props.theme.color.orangeRGBA.main} 0px 5px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented3} 0px
          10px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented2} 0px
          15px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented1} 0px
          20px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented5} 0px
          25px;
    }
    75% {
      box-shadow: none;
    }
    100% {
      box-shadow: ${props => props.theme.color.orangeRGBA.main} 0px 5px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented3} 0px
          10px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented2} 0px
          15px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented1} 0px
          20px,
        ${props => props.theme.color.orangeRGBA.decremented.decremented5} 0px
          25px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
