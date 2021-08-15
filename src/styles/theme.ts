import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import { blue, grey } from '@material-ui/core/colors'

export const defaultTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { ...blue, main: '#0078e7' },
    text: {
      primary: '#111111',
      secondary: '#212121',
    },
    grey: grey,
    action: {
      active: 'hsl(343deg, 100%, 50%)',
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 540,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
})

export const mainTheme = (theme: Theme) =>
  createMuiTheme({
    ...theme,
    typography: {
      fontFamily: 'Poppins, sans-serif',
      htmlFontSize: 16,
      h1: {
        fontSize: '2em',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      h2: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        lineHeight: 1.8,
        letterSpacing: '0.1125em',
        fontSmooth: 'auto',
        textAlign: 'center',
      },
      h3: {
        fontSize: '1.125em',
        fontWeight: 'bold',
        lineHeight: 1.8,
        letterSpacing: '0.1125em',
        fontSmooth: 'auto',
        textAlign: 'justify',
      },
      h4: {
        fontSize: '1.375em',
        lineHeight: 1.8,
        letterSpacing: '0.1125em',
        fontSmooth: 'auto',
        textAlign: 'center',
      },
      h5: {
        fontSize: '1.25em',
        lineHeight: 1.8,
        fontSmooth: 'auto',
        textAlign: 'center',
      },
      subtitle2: {
        fontSize: '1em',
        textAlign: 'center',
        letterSpacing: '0.0375em',
        color: theme.palette.grey[600],
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          fontFamily: 'Poppins, sans-serif' as any,
        },
      },
    },
  })

export const theme = (theme: Theme) => responsiveFontSizes(mainTheme(theme))
