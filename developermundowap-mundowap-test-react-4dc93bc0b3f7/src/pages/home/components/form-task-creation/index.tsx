import { useForm, FormProvider } from 'react-hook-form'
import { object, string, date, InferType, ObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { v4 as uuidv4 } from 'uuid'

import { usePushTaskList } from '@hooks/push-task-list'

import { ITasks } from '@typings/typings-task'

import { ConfirmTaskCreationForm } from './components/confirm-task-creation-form'

import { ButtonDefault } from '@components/buttons/button-default'

import { ConfirmTaskCreationContainer } from './styles'
import { useEffect } from 'react'

const taskSchema: ObjectSchema<ITasks> = object().shape({
  id: string().uuid().required(),
  title: string()
    .min(5, 'O título da tarefá deve ter no mínimo 5 caracteres!')
    .max(20, 'O título da tarefa deve ter no máximo 20 caracteres!'),
  description: string()
    .min(10, 'A descrição deve ter no mínimo 10 caracteres!')
    .max(100, 'A descrição deve ter no máximo 100 caracteres!'),
  createdAt: date().required(),
  status: string<'checked' | 'pending'>().required()
})

type TaskData = InferType<typeof taskSchema>

export function FormTaskCreation() {
  const {
    addTaskToList,
    taskToEdit,
    addTaskToListEditing,
    generateRandomTask,
    taskRandomLoading,
    controller
  } = usePushTaskList()

  const confirmTaskCreationForm = useForm<TaskData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      // Se ja existir uma task para editar então pegue os dados dela, se não crie uma nova task
      id: taskToEdit?.taskToEdit?.task.id ?? uuidv4(),
      createdAt: new Date(Date.now()),
      status: 'pending',
      title: taskToEdit?.taskToEdit?.task.title ?? '',
      description: taskToEdit?.taskToEdit?.task.description ?? ''
    }
  })

  const { handleSubmit } = confirmTaskCreationForm

  const handleConfirmCreateTask = (task: ITasks) => {
    // Se o taskToEdit.edit for true então edite a task
    if (taskToEdit?.taskToEdit?.edit) {
      addTaskToListEditing(task)
    } else {
      // Se não adicione a task
      addTaskToList(task)
    }
    // Limpar os campos do formulário
    confirmTaskCreationForm.reset()
  }

  useEffect(() => {
    // Limpar o controller quando o componente for desmontado
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <FormProvider {...confirmTaskCreationForm}>
      <ConfirmTaskCreationContainer
        onSubmit={handleSubmit(handleConfirmCreateTask)}
      >
        <ConfirmTaskCreationForm taskToEdit={taskToEdit?.taskToEdit} />
        <ButtonDefault type="submit" $bgContrast={true}>
          {taskToEdit?.taskToEdit?.edit ? 'Editar' : 'Criar'} tarefa
        </ButtonDefault>
        {!taskToEdit?.taskToEdit?.edit && (
          <ButtonDefault
            onClick={generateRandomTask}
            $bgContrast={true}
            type="button"
            disabled={taskRandomLoading}
          >
            {taskRandomLoading ? 'Gerando tarefa...' : 'Gerar tarefa aleatória'}
          </ButtonDefault>
        )}
      </ConfirmTaskCreationContainer>
    </FormProvider>
  )
}
