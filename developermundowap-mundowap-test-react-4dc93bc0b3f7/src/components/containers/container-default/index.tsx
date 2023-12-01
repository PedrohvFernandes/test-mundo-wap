import { ContainerDefault as Container } from './styles'

interface IContainerDefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ContainerDefault({
  children,
  ...rest
}: Readonly<IContainerDefaultProps>) {
  return <Container {...rest}>{children}</Container>
}
