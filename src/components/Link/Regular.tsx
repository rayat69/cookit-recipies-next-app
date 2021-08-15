import { useRouter } from 'next/router'
import React, { memo } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ButtonProps } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { RegularButton, RegularButtonProps } from '../Button'

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    '&.active': {
      color: 'red',
    },
  },
  text: {
    color: theme.palette.grey[800],
  },
}))

export const RegularLink: React.FC<RegularLinkProps> = props => {
  const {
    href,
    as,
    shallow,
    replace,
    scroll,
    prefetch,
    locale,
    className,
    pill,
    ...rest
  } = props

  const router = useRouter()
  const classes = useStyles()

  return (
    <NextLink
      {...{ href, as, shallow, replace, scroll, prefetch, locale }}
      passHref
    >
      <RegularButton
        {...rest}
        className={clsx(className, {
          active: router.pathname === href,
        })}
        component="a"
        classes={classes}
        pill={pill}
      />
    </NextLink>
  )
}

export type RegularLinkProps<
  D extends React.ElementType<any> = 'button',
  P = {}
> = Omit<NextLinkProps, 'passHref'> &
  Omit<RegularButtonProps<D, P>, 'href' | 'component'> & {
    pill?: boolean
  }
