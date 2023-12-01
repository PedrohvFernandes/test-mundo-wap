import { ContainerDefaultSpaceBetweenContent as ContainerContent } from './styles'

interface IContainerDefaultSpaceBetweenProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ContainerDefaultSpaceBetweenContent({
  children,
  ...rest
}: Readonly<IContainerDefaultSpaceBetweenProps>) {
  return <ContainerContent {...rest}>{children}</ContainerContent>
}
