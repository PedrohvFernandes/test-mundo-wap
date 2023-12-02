import styled from 'styled-components'

export const Container = styled.div`
  min-height: 34rem;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.defaultS};
  line-height: 2rem;
  color: ${({ theme }) => theme.color.orange.main};
  animation: fadeIn 1.5s ease-in-out;

  @media ${({ theme }) => theme.deviceMax.laptop} {
    font-size: ${({ theme }) => theme.font.defaultL};
  }
`
