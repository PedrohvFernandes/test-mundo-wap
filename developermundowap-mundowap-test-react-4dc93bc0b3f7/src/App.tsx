import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { GlobalStyle } from '@styles/global.style'
import { Theme } from '@styles/theme.style'

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
