import { useNavigate } from 'react-router-dom'
import { ConfigRoutes } from '../../config'

import { LogoMundoWapStyled } from './styled'
import { MundoWapURL } from '../../assets/logo'

export function LogoMundoWap() {
  const navigate = useNavigate()
  return (
    <LogoMundoWapStyled
      onClick={() => navigate(ConfigRoutes.mundoWap.default.source)}
    >
      <img
        src={MundoWapURL}
        alt="Logo da empresa mundo wap, o M é azul e o W é laranja."
      />
    </LogoMundoWapStyled>
  )
}
