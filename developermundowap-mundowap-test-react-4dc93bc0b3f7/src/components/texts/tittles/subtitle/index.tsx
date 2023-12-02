import { IRegularText } from '../../typings'
import { Title as TitleStyled } from './styles'

export function SubTitle({ children, textalign }: Readonly<IRegularText>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
