import { ReactNode } from "react"

interface IRegularText {
  textalign?: string
  children: ReactNode
}

interface IRegularTextStyled {
  textalign?: string
}

export type { IRegularText, IRegularTextStyled}