import {
  ConfirmTaskCreationFormContainer,
  Description,
  FormSectionContainer,
  Title
} from './styles'
import { TaskFormInputs } from './task-form-inputs'

export function ConfirmTaskCreationForm() {
  return (
    <ConfirmTaskCreationFormContainer>
      <Title>Esta atarefado ? 🥲 Então crie sua tarefa aqui: </Title>
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
