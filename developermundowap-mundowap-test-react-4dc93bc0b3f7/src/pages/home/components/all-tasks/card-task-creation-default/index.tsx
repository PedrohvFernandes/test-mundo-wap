import { ITaskProps } from '@typings/typings-task'

import { RegularTitle } from '@components/titles/regular-title'
import { RegularText } from '@components/texts/regular-text'

import { usePushTaskList } from '@hooks/push-task-list'
import { useGetDateFormatted } from '@hooks/get-date-formatted'

import {
  CheckBox,
  Container,
  Content,
  ContentDescription,
  DescriptionTask
} from './styles'

interface ITask {
  task: ITaskProps['task']
  checkTaskItemOrUnCheckTaskItem: 'check' | 'uncheck'
}

export function CardTaskCreationDefault({
  task,
  checkTaskItemOrUnCheckTaskItem
}: Readonly<ITask>) {
  const { checkTaskItem, unCheckTaskItem } = usePushTaskList()
  const { formattedTodayPtBr } = useGetDateFormatted()

  const currentDate = formattedTodayPtBr(task.createdAt)

  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={task.status === 'checked'}
        onChange={() => {
          checkTaskItemOrUnCheckTaskItem === 'check'
            ? checkTaskItem(task.id)
            : unCheckTaskItem(task.id)
        }}
      />
      DELETAR
      EDITAR
      {/* As demais opções: Deletar, editar */}
      <Content>
        <ContentDescription>
          <RegularTitle textalign="start">{task.title}</RegularTitle>
          <DescriptionTask>{task.description}</DescriptionTask>
        </ContentDescription>
        <RegularText textalign="end">{currentDate}</RegularText>
      </Content>
    </Container>
  )
}
