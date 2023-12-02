import styled from 'styled-components'

interface IButtonDefaultStyledProps {
  // Tem que usar $ para o styled components entender que é uma propriedade boolean. Ele(navegador) não reconhece o atributo bgContrast, portanto o erro Warning: Received `false` for a non-boolean attribute é gerado.
  $bgContrast: boolean
}

export const ButtonDefaultStyled = styled.button<IButtonDefaultStyledProps>`
  background-color: ${props =>
    props.$bgContrast
      ? props.theme.color.background.contrastText
      : props.theme.color.background.main};
  color: ${props =>
    props.$bgContrast
      ? props.theme.color.background.main
      : props.theme.color.background.contrastText};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${props => props.theme.font.defaultXS};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.tertiary.main};
    color: ${props => props.theme.color.background.main};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
