import { Outlet } from 'react-router-dom'

import { HeaderDefault } from '../../components/headers/header-default'
import { Container } from './styles'
import { Footer } from '../../components/footer'

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
