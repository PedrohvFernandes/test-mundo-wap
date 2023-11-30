import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'

import { Home } from './pages/home'

import { ConfigRoutes } from './config'
import { Exception } from './pages/exception'

export const Router = createBrowserRouter([
  {
    path: ConfigRoutes.mundoWap.default.source,
    element: <DefaultLayout />,
    children: [
      {
        path: ConfigRoutes.mundoWap.default.source,
        element: <Home />
      }
    ]
  },
  {
    path: ConfigRoutes.mundoWap.default.notFound,
    element: <Exception/>
  }
])
