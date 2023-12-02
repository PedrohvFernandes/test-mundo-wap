import { usePushTaskList } from '@hooks/push-task-list'
import { Container, Content } from './styles'

import { ButtonDefault } from '@components/buttons/button-default'
import { Title } from '@components/titles/title'

import { CardTaskConcluded } from './card-task-concluded'
import { CardTaskCreation } from './card-task-creation'

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
          <CardTaskCreation key={task.id} task={task} />
        ))}

        {completedTasks.map(task => (
          <CardTaskConcluded key={task.id} task={task} />
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
