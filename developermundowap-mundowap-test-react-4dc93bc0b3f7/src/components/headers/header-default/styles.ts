import styled from 'styled-components'

import { ContainerDefaultSpaceBetweenContent } from '@components/containers/container-space-between/styles'

interface IQuantityTasksProps {
  quantityTasks: number
}

export const HeaderDefaultStyledContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  z-index: 50;
  background-color: ${props => props.theme.color.background.contrastText};
  color: ${props => props.theme.color.background.main};
  top: 0;
  left: 0;
  animation: shadowAnimationOrange 5s infinite;
`
export const ContainerContentHeader = styled(
  ContainerDefaultSpaceBetweenContent
)`
  position: relative;
  > strong {
    font-size: ${props => props.theme.font.defaultXS};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    @media ${props => props.theme.deviceMax.mobileL} {
      font-size: ${props => props.theme.font.defaultS};
    }
    @media ${props => props.theme.deviceMax.tablet} {
      font-size: ${props => props.theme.font.defaultL};
    }
  }
`
export const QuantityTasks = styled.strong<IQuantityTasksProps>`
  background-color: ${({ theme, quantityTasks }) => {
    if (quantityTasks >= 10) {
      return theme.color.error.main
    }
    if (quantityTasks <= 3) {
      return theme.color.success.main
    }

    return theme.color.tertiary.main
  }};
  color: ${props => props.theme.color.background.contrastText};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
