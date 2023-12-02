import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from '@react-spring/web'

import { FormTaskCreation } from '../form-task-creation'

import { usePushTaskList } from '@hooks/push-task-list'

import {
  CloseModalButton,
  Container,
  ModalWrapper
} from './styles'

interface IModalTaskCreationProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  // setShowModal: (value: boolean) => void
}

export function ModalTaskCreation({
  showModal,
  setShowModal
}: Readonly<IModalTaskCreationProps>) {
  const modalRef = useRef<HTMLDivElement>(null)

  const { clearEditTask } = usePushTaskList()

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    // Se o elemento clicado for igual a div que contém a referência do modal então feche o modal
    if (modalRef.current === event.target) {
      setShowModal(false)
      clearEditTask()
    }
  }

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      // Se o showModal for true e a tecla pressionada for a tecla ESC então feche o modal
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
        clearEditTask()
      }
    },
    [setShowModal, showModal, clearEditTask]
  )

  useEffect(() => {
    // Adiciona o evento de click no documento
    document.addEventListener('keydown', keyPress)
    // Remove o evento de click no documento
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {showModal && (
        <Container ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
                <FormTaskCreation />
              <CloseModalButton
                aria-label="close modal"
                onClick={() => {
                  setShowModal(prev => !prev)
                  clearEditTask()
                }}
              ></CloseModalButton>
            </ModalWrapper>
          </animated.div>
        </Container>
      )}
    </>
  )
}
