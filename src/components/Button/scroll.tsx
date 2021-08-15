import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'
import { useCallback } from 'react'

interface Props {
  window?: () => Window
}

const useStyles = makeStyles(theme => ({
  scrollToTop: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    zIndex: theme.zIndex.appBar - 2,
  },
}))

export function ScrollTop(props: Props) {
  const { window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  })
  const classes = useStyles()

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const anchor = (
        (event.target as HTMLButtonElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor')

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    },
    []
  )

  return (
    <Zoom in={trigger}>
      <Box role="presentation" className={classes.scrollToTop}>
        <Fab
          onClick={handleClick}
          color="secondary"
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  )
}
