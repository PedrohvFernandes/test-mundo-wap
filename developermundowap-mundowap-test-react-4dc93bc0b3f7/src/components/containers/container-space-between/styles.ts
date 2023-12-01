import styled from "styled-components";

export const ContainerDefaultSpaceBetweenContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  width: 100%;
  margin-inline: auto;
  padding-inline: 2rem;
  padding-block: 0.5rem;

  @media ${props => props.theme.deviceMax.laptopL} {
    max-width: 1400px;
  }
`