import { ITaskProps } from '@typings/typings-task'

import { RegularTitle } from '@components/titles/regular-title'
import { usePushTaskList } from '@hooks/push-task-list'

import { CheckBox, Container, Content, DescriptionTask } from './styles'

// Formatar a data com o date-fns das tasks

export function CardTaskConcluded({ task }: Readonly<ITaskProps>) {
  const { unCheckTaskItem } = usePushTaskList()

  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={task.status === 'checked'}
        onChange={() => {
          unCheckTaskItem(task.id)
        }}
      />
      <Content>
        <RegularTitle textalign="start">{task.title}</RegularTitle>
        <DescriptionTask>{task.description}</DescriptionTask>
      </Content>
      {/* As demais opções: Deletar, editar */}
    </Container>
  )
}
