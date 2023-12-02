import { SubTitle } from '@components/titles/subtitle'

import {
  ConfirmTaskCreationFormContainer,
  Description,
  FormSectionContainer
} from './styles'
import { TaskFormInputs } from './task-form-inputs'

import { IConfirmTaskCreationFormProps } from '@typings/typings-task'

export function ConfirmTaskCreationForm({
  taskToEdit
}: Readonly<IConfirmTaskCreationFormProps>) {
  return (
    <ConfirmTaskCreationFormContainer>
      <SubTitle>Esta atarefado ? 🥲 Então crie sua tarefa aqui: </SubTitle>
      {taskToEdit?.edit && (
        <SubTitle>Editando: {taskToEdit?.task.title}</SubTitle>
      )}
      <FormSectionContainer>
        <Description>
          Coloque o título da tarefa e uma descrição para que você possa se
          lembrar do que se trata a tarefa.
        </Description>

        <TaskFormInputs />
      </FormSectionContainer>
    </ConfirmTaskCreationFormContainer>
  )
}
