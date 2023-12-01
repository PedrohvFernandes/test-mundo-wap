import { ButtonDefaultStyled } from './styles'

interface IButtonDefaultProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  $bgContrast: boolean
}

export function ButtonDefault({
  children,
  $bgContrast,
  ...rest
}: Readonly<IButtonDefaultProps>) {
  return (
    <ButtonDefaultStyled {...rest} $bgContrast={$bgContrast}>
      {children}
    </ButtonDefaultStyled>
  )
}
