import { useCallback } from 'react'
import {
  Slide,
  Paper,
  Button,
  List,
  ListItem,
  Divider,
  Backdrop,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer,
    },
    drop: {
      zIndex: theme.zIndex.drawer - 1,
      padding: '0 1rem',
    },
    listPadding: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  })
)

export default function CustomDrawer({ open, onClose }: CustomDrawerProps) {
  const classes = useStyles()

  const transitionFunction = useCallback((node: HTMLElement) => {
    node.style.transitionTimingFunction = 'cubic-bezier(.22,-0.35,.78,1.35)'
  }, [])

  return (
    <Backdrop open={open} onClick={onClose} className={classes.drop}>
      <Slide
        in={open}
        direction="left"
        mountOnEnter
        unmountOnExit
        onEnter={transitionFunction}
        onExiting={transitionFunction}
        onEntering={transitionFunction}
        onExit={transitionFunction}
        onEntered={transitionFunction}
        onExited={transitionFunction}
      >
        <Paper className={classes.paper} elevation={5}>
          <List classes={{ padding: classes.listPadding }}>
            <ListItem>
              <Button fullWidth>Recipies</Button>
            </ListItem>
            <ListItem>
              <Button fullWidth>Recipies</Button>
            </ListItem>
            <ListItem>
              <Button fullWidth>Recipies</Button>
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <Button fullWidth>Login</Button>
            </ListItem>
            <ListItem>
              <Button variant="contained" color="secondary" fullWidth>
                Signup
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Slide>
    </Backdrop>
  )
}

export interface CustomDrawerProps {
  open: boolean
  onClose: React.MouseEventHandler
}
