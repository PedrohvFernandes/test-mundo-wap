import { useState } from 'react'

import { ButtonDefault } from '@components/buttons/button-default'
import { LogoMundoWap } from '@components/logo-mundo-wap'
import { ModalTaskCreation } from '@components/modal-task-creation'

import { usePushTaskList } from '@hooks/push-task-list'

import {
  ContainerContentHeader,
  HeaderDefaultStyled,
  QuantityTasks
} from './styles'

export function HeaderDefault() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { taskQuantity } = usePushTaskList()

  const handleShowModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <HeaderDefaultStyled>
      <ContainerContentHeader>
        <LogoMundoWap width={3} />
        <strong>
          Quantidade de tarefas:
          <QuantityTasks quantityTasks={taskQuantity}>
            {taskQuantity}
          </QuantityTasks>
        </strong>

        <ButtonDefault $bgContrast={false} onClick={handleShowModal}>
          Adicionar tarefa
        </ButtonDefault>
        <ModalTaskCreation showModal={showModal} setShowModal={setShowModal} />
      </ContainerContentHeader>
    </HeaderDefaultStyled>
  )
}
