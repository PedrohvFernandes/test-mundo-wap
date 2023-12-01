import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding-block: 1.5rem;
  font-size: ${props => props.theme.font.defaultXS};
  line-height: 1rem;
  background-color: ${props => props.theme.color.background.contrastText};
  color: ${props => props.theme.color.background.main};
  @media ${props => props.theme.deviceMax.tablet} {
    font-size: ${props => props.theme.font.defaultS};
    line-height: 1.5rem;
  }
`

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.5;

  /* > img {
    width: 2rem;
  } */

  > span {
    font-weight: 700;
  }
`

export const LinkGithub = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
    color: ${props => props.theme.color.background.main};
  }
`
