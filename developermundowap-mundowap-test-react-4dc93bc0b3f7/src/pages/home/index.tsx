import { useEffect } from 'react'

import { toast } from 'react-toastify'

import { ContainerDefault } from '@components/containers/container-default'
import { AllTasks } from './components/all-tasks'
import { usePushTaskList } from '@hooks/push-task-list'
import { Title } from '@components/titles/Title'

export function Home() {
  const { taskQuantity } = usePushTaskList()

  useEffect(() => {
    toast.success('Bem vindo ao Mundo Wap!')
  }, [])

  useEffect(() => {
    if (taskQuantity === 0) {
      toast.success('Você não possui tarefas cadastradas')
    }
    if (taskQuantity <= 3 && taskQuantity > 0) {
      toast.info(`Você possui poucas tarefas cadastradas (${taskQuantity})`)
    }

    if (taskQuantity > 3 && taskQuantity < 10) {
      toast.info(`Você possui tarefas cadastradas (${taskQuantity})`)
    }

    if (taskQuantity >= 10) {
      toast.error(`Você possui muitas tarefas cadastradas (${taskQuantity})`)
    }
  }, [taskQuantity])

  return (
    <ContainerDefault>
      {taskQuantity === 0 ? (
        <Title>Você não possui tarefas cadastradas</Title>
      ) : (
        <AllTasks />
      )}
    </ContainerDefault>
  )
}
