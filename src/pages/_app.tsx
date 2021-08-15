import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import '../styles/globals.scss'
import { defaultTheme, theme } from '../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { NavProvider } from '../store/nav'
import { MainNav } from '../components/Nav'
import SwipeableSideBar from '../components/Nav/swipeable'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side')
    if (!!jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    const callback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains('is-visible')
        ) {
          entry.target.classList.add('is-visible')
        } //else entry.target.classList.remove('is-visible')
      })
    }

    const observer = new IntersectionObserver(callback)

    const targets = document.querySelectorAll('.scroll-reveal')

    targets.forEach(target => {
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
    }
  }, [router.pathname])

  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavProvider>
          <MainNav />
          <SwipeableSideBar />
          <Component {...pageProps} />
        </NavProvider>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
