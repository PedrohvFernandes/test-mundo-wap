import { ReactNode } from 'react'

import { Title as TitleStyled } from './styles'

interface ISubtitleProps {
  children: ReactNode
  textalign?: string
}

export function SubTitle({ children, textalign }: Readonly<ISubtitleProps>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
