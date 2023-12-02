import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styles'

import { InputDefaultForm } from '@components/inputs/input-default-form'

// Type para o formState do useFormContext, para conseguir pegar somente a mensagem de erro
interface IErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function TaskFormInputs() {
  // Register do useFormContext para registrar os inputs do form para o react-hook-form
  const { register, formState } = useFormContext()

  const { errors } = formState as IErrorsType

  return (
    <AddressFormContainer>
      <InputDefaultForm 
        placeholder='Nome da task'
        {...register('title')}
        error={errors.title?.message}
        rightText='O nome da tarefa'

      />
      <InputDefaultForm
        placeholder='Descrição da task'
        {...register('description')}
        error={errors.description?.message}
        rightText='A descrição é para você se lembrar do que se trata a tarefa.'
      />
    </AddressFormContainer>
  )
}
