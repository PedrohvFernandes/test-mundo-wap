import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  background-color: ${({ theme }) =>
    theme.color.background.backgroundOpacity.opacity8};
  > p {
    color: ${({ theme }) => theme.color.black.contrastText};
  }
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    color: ${({ theme }) => theme.color.black.contrastText};
  } 
`

export const CheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover + ${Content} {
    background-color: ${({ theme }) => theme.color.success.main};
  }

  &:checked + ${Content} {
    background-color: ${({ theme }) => theme.color.success.main};
  }

  &:checked:hover + ${Content} {
    background-color: ${({ theme }) =>
      theme.color.background.backgroundOpacity.opacity8};
  }
  /* > p {
    &:hover + ${Content} {
      background-color: lightcoral; 
    }
  } */
`

export const DescriptionTask = styled.p`
  font-size: ${({ theme }) => theme.font.default};
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.color.alert.main};
  @media ${({ theme }) => theme.deviceMax.tablet} {
    font-size: ${({ theme }) => theme.font.defaultXS};
  }
`
