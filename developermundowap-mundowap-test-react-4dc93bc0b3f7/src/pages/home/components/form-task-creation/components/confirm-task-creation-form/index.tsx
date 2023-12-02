import { SubTitle } from '@components/titles/Subtitle'

import {
  ConfirmTaskCreationFormContainer,
  Description,
  FormSectionContainer,
} from './styles'
import { TaskFormInputs } from './task-form-inputs'

export function ConfirmTaskCreationForm() {
  return (
    <ConfirmTaskCreationFormContainer>
      <SubTitle>Esta atarefado ? 🥲 Então crie sua tarefa aqui: </SubTitle>
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
