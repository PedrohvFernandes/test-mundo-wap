import { IRegularTextStyled } from '@components/texts/typings'
import styled from 'styled-components'

export const Text = styled.p<IRegularTextStyled>`
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
