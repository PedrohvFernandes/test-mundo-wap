export const Theme = {
  // https://encycolorpedia.pt/ebeef0
  color: {
    background: {
      main: '#fff',
      contrastText: '#141827'
    },
    primary: {
      main: '#ebeef0',
      contrastText: '#b5c0c7'
    },
    secondary: {
      main: '#89a2b8',
      contrastText: '#6182a0'
    },
    tertiary: {
      main: '#1da1f2',
      contrastText: '#0c84cd'
    },
    quaternary: {
      main: '#5b7083',
      contrastText: '#495a69'
    },
    fifth: {
      main: '#f7f9fa',
      contrastText: '#bacbd4'
    },
    error: {
      main: '#e0245e',
      contrastText: '#b61a4a'
    },
    white: {
      main: '#fff',
      contrastText: '#000'
    },
    black: {
      main: '#000',
      contrastText: '#fff'
    },
    filter: {
      main: 'brightness(0.8)',
      contrastText: 'brightness(1.3)'
    }
  },

  // border: {
  //   radius: '15px',
  //   style: '2px solid #736681'
  // },

  font: {
    small: '0.5rem',
    defaultXS: '0.875rem',
    defaultS: '1rem',
    defaultM: '1.25rem',
    defaultL: '1.5rem',
    big: '2rem',
    bigger: '3rem',
    fontFamily: {
      roboto: 'Roboto, sans-serif'
    }
  },

  deviceMax: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
    desktopL: `(min-width: 2560px)`
  }
}