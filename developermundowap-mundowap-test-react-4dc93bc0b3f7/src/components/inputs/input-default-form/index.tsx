import { InputHTMLAttributes, forwardRef, useEffect } from 'react'
import { toast } from 'react-toastify'

import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText
} from './styles'

interface IInputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  rightText?: string
}

// }: Readonly<IInputDefaultProps> & { children?: React.ReactNode }) {
export const InputDefaultForm = forwardRef<
  HTMLInputElement,
  IInputDefaultProps
>(({ error, rightText, ...rest }, ref) => {
  useEffect(() => {
    if (error !== '' && error !== undefined) {
      toast.error(`${error} 🤨`)
    }
  }, [error])

  return (
    <InputWrapper>
      <InputStyleContainer $hasError={!!error}>
        <InputStyled ref={ref} {...rest} />
      </InputStyleContainer>
      {rightText && <RightText>{rightText}</RightText>}
      {error && <p>{error}</p>}
    </InputWrapper>
  )
})
