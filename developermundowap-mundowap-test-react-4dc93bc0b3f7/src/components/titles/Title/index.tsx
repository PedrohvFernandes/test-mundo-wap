import { ReactNode } from 'react'

import { Title as TitleStyled } from './styles'

interface ITitleProps {
  children: ReactNode
  textalign?: string
}

export function Title({ children, textalign }: Readonly<ITitleProps>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
