import { useNavigate } from 'react-router-dom'
import { ConfigRoutes } from '../../config'

import { MundoWapURL } from '../../assets/logo'
import { LogoMundoWapStyled } from './styles'

interface ILogoMundoWapProps {
  width?: number
  widthMobile?: number
}

export function LogoMundoWap({ width, widthMobile }: Readonly<ILogoMundoWapProps>) {
  const navigate = useNavigate()
  return (
    <LogoMundoWapStyled
      width={width}
      widthMobile={widthMobile}
      onClick={() => navigate(ConfigRoutes.mundoWap.default.source)}
    >
      <img
        src={MundoWapURL}
        alt="Logo da empresa mundo wap, o M é azul e o W é laranja."
      />
    </LogoMundoWapStyled>
  )
}
