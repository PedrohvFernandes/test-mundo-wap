import styled from 'styled-components'

interface ISubtitle {
  textalign?: string
}

export const Title = styled.h2<ISubtitle>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.defaultS};
  line-height: 2rem;
  color: ${({ theme }) => theme.color.orange.main};
  animation: fadeIn 1.5s ease-in-out;
  text-align: ${({ textalign }) => textalign ?? 'center'};

  @media ${({ theme }) => theme.deviceMax.tablet} {
    font-size: ${({ theme }) => theme.font.defaultL};
  }
`
