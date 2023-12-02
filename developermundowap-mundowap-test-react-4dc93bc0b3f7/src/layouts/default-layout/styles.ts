import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 10.5rem;
  margin-bottom: 6rem;
  @media ${props => props.theme.deviceMax.tablet} {
    padding-top: 6rem;
  }
`
