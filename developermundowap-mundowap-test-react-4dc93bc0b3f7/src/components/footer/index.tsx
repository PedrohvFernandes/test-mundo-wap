import { GithubIcon } from '@assets/icons'

import { ConfigBases } from '@config/index'

import { useGetDateFormatted } from '@hooks/get-date-formatted'

import { LogoMundoWap } from '../logo-mundo-wap'

import { ContainerDefaultSpaceBetweenContent } from '@components/containers/container-space-between'

import { FooterContainer, FooterLogo, LinkGithub } from './styles'

export function Footer() {
  const { formattedCurrentYearDefault } = useGetDateFormatted()

  return (
    <FooterContainer>
      <ContainerDefaultSpaceBetweenContent>
        <FooterLogo>
          <LogoMundoWap />
          <span>© {formattedCurrentYearDefault().year} Mundo Wap.</span>
        </FooterLogo>
        <LinkGithub
          href={ConfigBases.mundoWap.gitHub.baseUrls.perfil}
          target={ConfigBases.mundoWap.gitHub.target.blank}
        >
          <GithubIcon />
          <span>Meu Github</span>
        </LinkGithub>
      </ContainerDefaultSpaceBetweenContent>
    </FooterContainer>
  )
}
