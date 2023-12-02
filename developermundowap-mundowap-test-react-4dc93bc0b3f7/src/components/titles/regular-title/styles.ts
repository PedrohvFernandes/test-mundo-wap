import styled from 'styled-components'

interface IRegularTitle {
  textalign?: string
}

export const Title = styled.h3<IRegularTitle>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.defaultXS};
  line-height: 2rem;
  color: ${({ theme }) => theme.color.background.contrastText};
  text-align: center;

  @media ${({ theme }) => theme.deviceMax.mobileL} {
    font-size: ${({ theme }) => theme.font.defaultS};
    text-align: ${({ textalign }) => textalign ?? 'center'};
  }
`
