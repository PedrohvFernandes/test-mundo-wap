import { IRegularText } from '../../typings'
import { Title as TitleStyled } from './styles'

export function Title({ children, textalign }: Readonly<IRegularText>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
