import styled from 'styled-components'

export const ContainerDefaultSpaceBetweenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  margin-inline: auto;
  padding-inline: 2rem;
  padding-block: 0.5rem;

  @media ${props => props.theme.deviceMax.laptopL} {
    max-width: 1400px;
  }

  @media ${props => props.theme.deviceMax.tablet} {
    flex-direction: row;
  }
`