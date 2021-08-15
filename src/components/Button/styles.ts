import { Theme } from '@material-ui/core'

export const defaultStyles = (theme: Theme) => ({
  outlinedPrimary: {
    '&$outlined:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
  outlinedSecondary: {
    '&$outlined:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
  },
  outlined: {},
})
