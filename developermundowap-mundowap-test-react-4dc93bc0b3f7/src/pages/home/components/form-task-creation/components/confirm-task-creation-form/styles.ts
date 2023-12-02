import styled from 'styled-components'

export const ConfirmTaskCreationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.defaultS};
  line-height: 2rem;
  color: ${({ theme }) => theme.color.orange.main};
  animation: fadeIn 1.5s ease-in-out;
  text-align: center;

  @media ${({ theme }) => theme.deviceMax.laptop} {
    font-size: ${({ theme }) => theme.font.defaultL};
  }
`

export const FormSectionContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.background.contrastText};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Description = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.defaultXS};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.fifth.main};
  text-align: center;

  @media ${({ theme }) => theme.deviceMax.laptop} {
    font-size: ${({ theme }) => theme.font.defaultM};

  }
`
