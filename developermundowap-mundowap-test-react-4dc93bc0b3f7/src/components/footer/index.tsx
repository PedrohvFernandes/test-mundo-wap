import { GithubIcon } from '../../assets/icons'

import { ConfigBases } from '../../config'

import useGetDateFormatted from '../../hooks/get-date-formatted'
import { LogoMundoWap } from '../logo-mundo-wap'

import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  LinkGithub
} from './styles'

export function Footer() {
  const { formattedCurrentYear } = useGetDateFormatted()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <LogoMundoWap />
          <span>© {formattedCurrentYear().year} Mundo Wap.</span>
        </FooterLogo>
        <LinkGithub
          href={ConfigBases.mundoWap.gitHub.baseUrls.perfil}
          target={ConfigBases.mundoWap.gitHub.target.blank}
        >
          <GithubIcon />
          <span>Meu Github</span>
        </LinkGithub>
      </FooterContent>
    </FooterContainer>
  )
}
