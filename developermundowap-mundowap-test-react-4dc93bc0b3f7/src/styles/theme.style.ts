export const Theme = {
  // https://encycolorpedia.pt/ebeef0
  color: {
    background: {
      main: '#fff',
      contrastText: '#141827',
      backgroundOpacity: {
        opacity1: 'rgba(20, 24,39, 0.1)',
        opacity2: 'rgba(20, 24,39, 0.2)',
        opacity3: 'rgba(20, 24,39, 0.3)',
        opacity4: 'rgba(20, 24,39, 0.4)',
        opacity5: 'rgba(20, 24,39, 0.5)',
        opacity6: 'rgba(20, 24,39, 0.6)',
        opacity7: 'rgba(20, 24,39, 0.7)',
        opacity8: 'rgba(20, 24,39, 0.8)',
        opacity9: 'rgba(20, 24,39, 0.9)',
      }
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
    success: {
      main: '#17bf63',
      contrastText: '#0f9d58'
    },
    alert: {
      main: '#ffad1f',
      contrastText: '#e24e00',
      backgroundOpacity: {
        opacity1: 'rgba(255, 173, 31, 0.1)',
        opacity2: 'rgba(255, 173, 31, 0.2)',
        opacity3: 'rgba(255, 173, 31, 0.3)',
        opacity4: 'rgba(255, 173, 31, 0.4)',
        opacity5: 'rgba(255, 173, 31, 0.5)',
        opacity6: 'rgba(255, 173, 31, 0.6)',
        opacity7: 'rgba(255, 173, 31, 0.7)',
        opacity8: 'rgba(255, 173, 31, 0.8)',
        opacity9: 'rgba(255, 173, 31, 0.9)',
      }
    },
    white: {
      main: '#fff',
      contrastText: '#000'
    },
    orangeRGBA: {
      main: 'rgba(255,117,24,0.4)',
      decremented: {
        decremented3: 'rgba(255,117,24,0.3)',
        decremented2: 'rgba(255,117,24,0.2)',
        decremented1: 'rgba(255,117,24,0.1)',
        decremented5: 'rgba(255,117,24,0.05)'
      }
    },
    orange: {
      main: '#ff7518',
      contrastText: '#e24e00'
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
    default: '0.75rem',
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
