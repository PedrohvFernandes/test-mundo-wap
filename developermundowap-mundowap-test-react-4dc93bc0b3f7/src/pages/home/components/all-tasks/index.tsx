import { usePushTaskList } from '@hooks/push-task-list'
import { Container, Content } from './styles'

import { ButtonDefault } from '@components/buttons/button-default'
import { Title } from '@components/titles/title'

import { CardTaskCreationDefault } from './card-task-creation-default'

export function AllTasks() {
  const {
    taskItems,
    completedTasks,
    clearListTask,
    clearListTaskCompleted,
    clearListTaskPending
  } = usePushTaskList()

  return (
    <Container>
      <Title textalign="start">Suas tarefas</Title>
      <Content>
        {taskItems.map(task => (
          <CardTaskCreationDefault key={task.id} task={task} checkTaskItemOrUnCheckTaskItem='check' />
        ))}

        {completedTasks.map(task => (
          <CardTaskCreationDefault key={task.id} task={task} checkTaskItemOrUnCheckTaskItem='uncheck' />
        ))}
      </Content>
      <ButtonDefault $bgContrast onClick={clearListTask}>
        Limpar listas
      </ButtonDefault>
      <ButtonDefault $bgContrast onClick={clearListTaskPending}>
        Limpar listas de pendentes
      </ButtonDefault>
      <ButtonDefault $bgContrast onClick={clearListTaskCompleted}>
        Limpar lista de concluídas
      </ButtonDefault>
    </Container>
  )
}
