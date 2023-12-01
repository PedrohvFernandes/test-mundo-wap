import { ButtonDefault } from '../../buttons/button-default'
import { LogoMundoWap } from '../../logo-mundo-wap'

import { Content, HeaderDefaultStyled } from './styles'

export function HeaderDefault() {
  return (
    <HeaderDefaultStyled>
      <Content>
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
      </Content>
    </HeaderDefaultStyled>
  )
}
