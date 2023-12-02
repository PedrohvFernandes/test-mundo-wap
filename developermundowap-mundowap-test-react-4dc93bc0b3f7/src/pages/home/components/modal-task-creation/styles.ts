import styled from 'styled-components'
import { X } from '@assets/icons'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.color.background.backgroundOpacity.opacity8};
  /* opacity: 0.8; */
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;

  @media ${({ theme }) => theme.deviceMax.mobileL} {
    padding: 0 2rem;
  }
  
  @media ${({ theme }) => theme.deviceMax.mobileS} {
    padding: 0 1rem;
  }
`

export const ModalWrapper = styled.div`
  height: 100%;
  box-shadow: ${({ theme }) => theme.color.tertiary.contrastText} 0px 0px 0px
    3px;
  background-color: ${({ theme }) => theme.color.background.main};
  color: ${({ theme }) => theme.color.background.contrastText};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  border-top-left-radius: 1rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;

  @media ${({ theme }) => theme.deviceMax.mobileS} {
    height: 35rem;
  }
`

export const CloseModalButton = styled(X)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.error.contrastText};
    transform: scale(1.1);
  }
`
