import { ReactNode } from 'react'

import { Text } from './styles'

interface IRegularTextProps {
  children: ReactNode
  textalign?: string
}

export function RegularText({ children, textalign }: Readonly<IRegularTextProps>) {
  return <Text textalign={textalign}>{children}</Text>
}
