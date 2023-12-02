import { ButtonDefault } from '@components/buttons/button-default'
import { LogoMundoWap } from '@components/logo-mundo-wap'
import { ModalTaskCreation } from '@pages/home/components/modal-task-creation'

import { usePushTaskList } from '@hooks/push-task-list'

import {
  ContainerContentHeader,
  HeaderDefaultStyledContainer,
  QuantityTasks
} from './styles'

export function HeaderDefault() {
  const { taskQuantity, showModal, openModal } = usePushTaskList()

  const handleShowModal = () => {
    openModal(prev => !prev)
  }

  return (
    <HeaderDefaultStyledContainer>
      <ContainerContentHeader>
        <LogoMundoWap width={3} />
        <strong>
          Quantidade de tarefas:
          <QuantityTasks quantitytasks={taskQuantity}>
            {taskQuantity}
          </QuantityTasks>
        </strong>

        <ButtonDefault $bgContrast={false} onClick={handleShowModal}>
          Adicionar tarefa
        </ButtonDefault>
        <ModalTaskCreation showModal={showModal} setShowModal={openModal} />
      </ContainerContentHeader>
    </HeaderDefaultStyledContainer>
  )
}
