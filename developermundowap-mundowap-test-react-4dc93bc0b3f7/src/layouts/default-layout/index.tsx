import { Outlet } from 'react-router-dom'

import { HeaderDefault } from '@components/headers/header-default'
import { Footer } from '@components/footer'

import { Container } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Container>
        <HeaderDefault />
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
