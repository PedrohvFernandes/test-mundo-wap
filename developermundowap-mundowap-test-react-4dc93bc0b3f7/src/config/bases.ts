const isDev = process.env.REACT_APP_ENVIRONMENT === 'development'

export default {
  mundoWap: {
    baseUrls: {
      // Obviamente que a env Live deveria ser uma outra url
      apiBoredApi: isDev ? process.env.REACT_APP_API_URL_TEST : process.env.REACT_APP_API_URL_LIVE
    },
    gitHub: {
      baseUrls: {
        perfil: 'https://github.com/PedrohvFernandes',
        repositories: 'https://github.com/PedrohvFernandes?tab=repositories'
      },
      target: {
        blank: '_blank',
        parent: '_parent'
      }
    }
  }
}
