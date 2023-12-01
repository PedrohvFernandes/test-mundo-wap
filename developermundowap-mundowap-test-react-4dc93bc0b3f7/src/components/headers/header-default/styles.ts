import styled from 'styled-components'

export const HeaderDefaultStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 50;
  background-color: ${props => props.theme.color.background.contrastText};
  color: ${props => props.theme.color.background.main};
  padding: 0.5rem;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: shadowAnimationOrange 5s infinite;
`

export const Content = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 2rem;
  padding-block: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > strong {
    font-size: ${props => props.theme.font.defaultS};
    @media ${props => props.theme.deviceMax.tablet} {
      font-size: ${props => props.theme.font.defaultL};
    }
  }
`
