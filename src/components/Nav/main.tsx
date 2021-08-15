import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { RegularLink } from '../Link'
import { useNav } from '../../store/nav'

const useStyles = makeStyles(theme =>
  createStyles({
    nav: {
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.5em',
    },
    linkList: {
      display: 'flex',
      gap: '1em',
    },
    linkItem: {
      padding: 0,
      width: 'auto',
    },
  })
)

export const MainNav: React.FC<MainNavProps> = ({ window }) => {
  const classes = useStyles()
  const { toggle } = useNav()

  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="sticky" color="default">
        <Toolbar className={classes.nav}>
          <Typography variant="h6" className={classes.title} color="primary">
            COOKit
          </Typography>
          <Hidden mdDown>
            <List className={classes.linkList}>
              <ListItem className={classes.linkItem}>
                <RegularLink href="/">Recipies</RegularLink>
              </ListItem>
              <ListItem className={classes.linkItem}>
                <RegularLink href="/services">Services</RegularLink>
              </ListItem>
              <ListItem className={classes.linkItem}>
                <RegularLink href="/contact">Contact us</RegularLink>
              </ListItem>
            </List>
            <List className={classes.linkList}>
              <ListItem className={classes.linkItem}>
                <RegularLink pill href="/auth/login">
                  Login
                </RegularLink>
              </ListItem>
              <ListItem className={classes.linkItem}>
                <RegularLink
                  pill
                  href="/auth/signup"
                  variant="outlined"
                  color="primary"
                >
                  Signup
                </RegularLink>
              </ListItem>
            </List>
          </Hidden>
          <Hidden implementation="css" lgUp>
            <IconButton
              edge="end"
              //   className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

interface MainNavProps {
  window?: () => Window
}
