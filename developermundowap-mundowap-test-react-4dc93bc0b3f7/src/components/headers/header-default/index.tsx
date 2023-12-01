import { ButtonDefault } from '@components/buttons/button-default'
import { LogoMundoWap } from '@components/logo-mundo-wap'

import { ContainerContentHeader, HeaderDefaultStyled } from './styles'

export function HeaderDefault() {
  return (
    <HeaderDefaultStyled>
      <ContainerContentHeader>
        <LogoMundoWap width={3} />

        <strong>Contado de tarefas context</strong>

        <ButtonDefault
          $bgContrast={false}
          onClick={() => {
            console.log('teste')
          }}
        >
          Adicionar tarefa
        </ButtonDefault>
      </ContainerContentHeader>
    </HeaderDefaultStyled>
  )
}
