import { IRegularText } from '../../typings'
import { Title as TitleStyled } from './styles'

export function RegularTitle({ children, textalign }: Readonly<IRegularText>) {
  return <TitleStyled textalign={textalign}>{children}</TitleStyled>
}
