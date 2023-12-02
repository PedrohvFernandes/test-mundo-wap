import { ReactNode } from 'react'

import { Title as TitleStyled } from './styles'

interface IRegularTitleProps {
  children: ReactNode
  textalign?: string
}

export function RegularTitle({ children, textalign }: Readonly<IRegularTitleProps>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
