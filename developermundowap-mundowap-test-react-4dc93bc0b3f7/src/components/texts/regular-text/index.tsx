import { IRegularText } from '../typings'
import { Text } from './styles'

export function RegularText({ children, textalign }: Readonly<IRegularText>) {
  return <Text textalign={textalign}>{children}</Text>
}
