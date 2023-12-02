import { usePushTaskList } from '@hooks/push-task-list'
import { Container, Content } from './styles'

import { Title } from '@components/titles/Title'

export function AllTasks() {
  const { taskItems } = usePushTaskList()
  return (
    <Container>
      <Title textalign="start">Suas tarefas</Title>
      <Content>
        {taskItems.map(task => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.id}</p>
          </div>
        ))}
      </Content>
    </Container>
  )
}
