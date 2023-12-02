import styled from 'styled-components'

interface IInputContainerProps {
  $hasError: boolean
}

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  > p {
    color: ${({ theme }) => theme.color.error.main};
  }
`

export const InputStyleContainer = styled.div<IInputContainerProps>`
  height: 2.625rem;
  border-radius: 1rem;
  border: 2px solid
    ${({ theme, $hasError }) => {
      if ($hasError) {
        return theme.color.error.main
      }
    }};
  background: ${({ theme }) => theme.color.background.main};
  transition: 0.4s;
  overflow: hidden;
  &:focus-within {
    border-color: ${({ theme }) => theme.color.success.main};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.success.main};
  }
`
export const InputStyled = styled.input`
  width: 100%;
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding: 1rem;
  height: 100%;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.black.main};

  &::placeholder {
    color: ${({ theme }) => theme.color.quaternary.main};
    opacity: 0.5;
  }

  &:focus {
    &::placeholder {
      opacity: 0.3;
    }
  }

  @media ${({ theme }) => theme.deviceMax.tablet} {
    font-size: 1rem;
  }
`
export const RightText = styled.span`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.color.alert.main};
`
