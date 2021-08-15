import { makeStyles, useTheme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import clsx from 'clsx'
import { RegularLink, RegularLinkProps } from '../Link'
import { useNav } from '../../store/nav'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerPaper: {
      height: 'auto',
      width: 'auto',
      position: 'static',
      zIndex: theme.zIndex.appBar + 1,
      borderRadius: theme.spacing(1),
      margin: '1em',
      touchAction: 'none',
      msTouchAction: 'none',
    }, //
    backdrop: {
      zIndex: theme.zIndex.appBar - 1,
    },
    divider: {
      height: '0.25em',
      borderRadius: 999,
      backgroundColor: '#868686',
    },
    link: {
      textTransform: 'none',
      '&:active': {
        color: 'red',
      },
    },
    listItem: {
      paddingTop: '1em',
      paddingBottom: '1em',
    },
  }),
  { classNamePrefix: 'sideBar' }
)

export const DrawerItem: React.FC<RegularLinkProps> = ({
  className,
  ...props
}) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.listItem}>
      <RegularLink className={clsx(className, classes.link)} {...props} />
    </ListItem>
  )
}

DrawerItem.defaultProps = {
  translate: 'yes',
  fullWidth: true,
}

const SwipeableSideBar: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { open, handleOpen, handleClose } = useNav()

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      disableSwipeToOpen
      classes={{ root: classes.root }}
      PaperProps={{ className: classes.drawerPaper }}
      BackdropProps={{ className: classes.backdrop }}
      style={{
        zIndex: theme.zIndex.appBar - 1,
      }}
    >
      <List>
        <DrawerItem href="/" onClick={handleClose}>
          Recipies
        </DrawerItem>
        <DrawerItem href="/services" onClick={handleClose}>
          Services
        </DrawerItem>
        <DrawerItem href="/contact" onClick={handleClose}>
          Contact us
        </DrawerItem>
        <Divider variant="middle" className={classes.divider} />
        <DrawerItem href="/auth/login" onClick={handleClose} pill>
          Login
        </DrawerItem>
        <DrawerItem
          href="/auth/signup"
          variant="outlined"
          onClick={handleClose}
          color="primary"
          pill
        >
          Signup
        </DrawerItem>
      </List>
    </SwipeableDrawer>
  )
}

export default SwipeableSideBar
