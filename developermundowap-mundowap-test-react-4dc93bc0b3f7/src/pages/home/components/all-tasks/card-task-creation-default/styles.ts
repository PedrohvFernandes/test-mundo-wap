import styled from 'styled-components'

import { Trash2, Pen } from '@assets/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  @media ${({ theme }) => theme.deviceMax.mobileL} {
    flex-direction: row;
    gap: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media ${({ theme }) => theme.deviceMax.mobileL} {
    justify-content: space-between;
    padding: 1rem;
  }
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
  text-align: center;
  color: ${({ theme }) => theme.color.alert.main};
  @media ${({ theme }) => theme.deviceMax.mobileL} {
    font-size: ${({ theme }) => theme.font.defaultXS};
    text-align: start;
  }
`

export const ButtonDelete = styled(Trash2)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.color.black.contrastText};
  &:hover {
    color: ${({ theme }) => theme.color.error.main};
  }
`

export const ButtonEdit = styled(Pen)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.color.black.contrastText};
  &:hover {
    color: ${({ theme }) => theme.color.tertiary.main};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`
