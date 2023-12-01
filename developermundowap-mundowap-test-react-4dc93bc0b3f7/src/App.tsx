import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@styles/global.style'
import { Theme } from '@styles/theme.style'

import { TaskListContextProvider } from '@contexts/task-context'

import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer />
      <GlobalStyle />
      <TaskListContextProvider>
        <RouterProvider router={Router} />
      </TaskListContextProvider>
    </ThemeProvider>
  )
}
