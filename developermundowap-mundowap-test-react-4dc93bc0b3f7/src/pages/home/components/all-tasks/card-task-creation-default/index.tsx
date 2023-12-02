import { ITaskProps } from '@typings/typings-task'

import { RegularTitle } from '@components/titles/regular-title'
import { RegularText } from '@components/texts/regular-text'

import { usePushTaskList } from '@hooks/push-task-list'
import { useGetDateFormatted } from '@hooks/get-date-formatted'

import {
  ButtonContainer,
  ButtonDelete,
  ButtonEdit,
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
  const {
    checkTaskItem,
    unCheckTaskItem,
    removeTaskItem,
    removeTaskItemCompleted,
    editTaskItem
  } = usePushTaskList()
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

      <Content>
        <ContentDescription>
          <RegularTitle textalign="start">{task.title}</RegularTitle>
          <DescriptionTask>{task.description}</DescriptionTask>
        </ContentDescription>

        <RegularText textalign="end">{currentDate}</RegularText>
        <ButtonContainer>
          <ButtonDelete
            onClick={() => {
              checkTaskItemOrUnCheckTaskItem === 'check'
                ? removeTaskItem(task.id)
                : removeTaskItemCompleted(task.id)
            }}
          />
          {checkTaskItemOrUnCheckTaskItem === 'check' && (
            <ButtonEdit onClick={() => editTaskItem(task.id)} />
          )}
        </ButtonContainer>
      </Content>
    </Container>
  )
}
