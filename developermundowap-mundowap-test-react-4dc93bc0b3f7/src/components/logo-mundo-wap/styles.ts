import styled from 'styled-components'

interface ILogoMundoWapStyledProps {
  width?: number
  widthMobile?: number
}

export const LogoMundoWapStyled = styled.div<ILogoMundoWapStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: ${(props) => props.widthMobile ?? 1.5}rem;
    @media ${props => props.theme.deviceMax.tablet} {
      width: ${(props) => props.width ?? 2}rem;
    }
  }
`
