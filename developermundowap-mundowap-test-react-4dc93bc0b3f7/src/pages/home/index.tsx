import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { ContainerDefault } from '@components/containers/container-default'
import { Title } from '@components/texts/tittles/title'
import { usePushTaskList } from '@hooks/push-task-list'
import { AllTasks } from './components/all-tasks'

export function Home() {
  const { taskQuantity, taskQuantityCompleted } = usePushTaskList()

  useEffect(() => {
    toast.success('Bem vindo ao Mundo Wap!')
  }, [])

  useEffect(() => {
    if (taskQuantity === 0) {
      toast.success('Você não possui tarefas cadastradas para fazer')
    }
    if (taskQuantity <= 3 && taskQuantity > 0) {
      toast.info(
        `Você possui poucas tarefas cadastradas para fazer (${taskQuantity})`
      )
    }

    if (taskQuantity > 3 && taskQuantity < 10) {
      toast.info(`Você possui tarefas cadastradas para fazer (${taskQuantity})`)
    }

    if (taskQuantity >= 10) {
      toast.error(
        `Você possui muitas tarefas cadastradas para fazer (${taskQuantity})`
      )
    }
  }, [taskQuantity])

  return (
    <ContainerDefault>
      {taskQuantity === 0 && taskQuantityCompleted === 0 ? (
        <Title>Você não possui tarefas cadastradas</Title>
      ) : (
        <AllTasks />
      )}
    </ContainerDefault>
  )
}
