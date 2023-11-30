import { useNavigate } from 'react-router-dom'

import {
  ButtonDiv,
  Container,
  Description,
  ImageDiv,
  SubContainer,
  Title,
  Wrapper
} from './styles'

import { ButtonDefault } from '../../components/buttons/button-default'
import { ConfigRoutes } from '../../config'

export function Exception() {
  const navigate = useNavigate()
  return (
    <Container>
      <ImageDiv>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
      </ImageDiv>
      <SubContainer>
        <Wrapper>
          <Title>Oops! Página não encontrada</Title>
          <Description>
            Parece que você encontrou a porta para o grande nada
          </Description>
          <ButtonDiv>
            <ButtonDefault
              bgContrast={true}
              onClick={() => navigate(ConfigRoutes.mundoWap.default.source)}
            >
              Voltar para a página inicial
            </ButtonDefault>
            <Description>ou</Description>
            <ButtonDefault onClick={() => navigate(-1)} bgContrast={true}>
              Voltar para a página anterior
            </ButtonDefault>
          </ButtonDiv>
        </Wrapper>
      </SubContainer>
    </Container>
  )
}
