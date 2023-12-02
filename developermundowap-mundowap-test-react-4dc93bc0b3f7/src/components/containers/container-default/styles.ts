import styled from 'styled-components'

export const ContainerDefault = styled.section`
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
  padding-block: 0.5rem;

  @media ${({ theme }) => theme.deviceMax.tablet} {
    padding-inline: 2rem;
  }
`
