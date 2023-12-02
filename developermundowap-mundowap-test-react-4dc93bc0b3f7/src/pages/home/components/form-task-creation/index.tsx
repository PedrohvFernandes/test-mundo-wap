import { useForm, FormProvider } from 'react-hook-form'
import { object, string, date, InferType, ObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { v4 as uuidv4 } from 'uuid'

import { usePushTaskList } from '@hooks/push-task-list'

import { ITasks } from '@typings/typings-task'

import { ConfirmTaskCreationForm } from './components/confirm-task-creation-form'

import { ButtonDefault } from '@components/buttons/button-default'

import { ConfirmTaskCreationContainer } from './styles'

const taskSchema: ObjectSchema<ITasks> = object().shape({
  id: string().uuid().required(),
  title: string().min(5, 'O título da tarefá deve ter no mínimo 5 caracteres!').max(20, 'O título da tarefa deve ter no máximo 20 caracteres!'),
  description: string()
    .min(10, 'A descrição deve ter no mínimo 10 caracteres!')
    .max(100, 'A descrição deve ter no máximo 100 caracteres!'),
  createdAt: date().required(),
  status: string<'checked' | 'pending'>().required()
})

type TaskData = InferType<typeof taskSchema>

export function FormTaskCreation() {
  const { addTaskToList } = usePushTaskList()

  const confirmTaskCreationForm = useForm<TaskData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      id: uuidv4(),
      createdAt: new Date(),
      status: 'pending'
    }
  })

  const { handleSubmit } = confirmTaskCreationForm

  const handleConfirmCreateTask = (task: ITasks) => {
    addTaskToList(task)
    // Limpar os campos do formulário
    confirmTaskCreationForm.reset()
  }

  return (
    <FormProvider {...confirmTaskCreationForm}>
      <ConfirmTaskCreationContainer
        onSubmit={handleSubmit(handleConfirmCreateTask)}
      >
        <ConfirmTaskCreationForm />
        <ButtonDefault type="submit" $bgContrast={true}>
          Criar tarefa
        </ButtonDefault>
      </ConfirmTaskCreationContainer>
    </FormProvider>
  )
}
