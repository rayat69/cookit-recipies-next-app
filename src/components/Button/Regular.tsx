import React, { forwardRef } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { defaultStyles } from './styles'

export type RegularButtonProps<
  D extends React.ElementType<any> = 'button',
  P = {}
> = ButtonProps<D, P> & {
  pill?: boolean
}

const useStyles = makeStyles(
  theme => ({
    pill: {
      borderRadius: 9999,
    },
    ...defaultStyles(theme),
  }),
  { classNamePrefix: 'MuiButton' }
)
let a: React.ElementType<any>
export const RegularButton = forwardRef(function _RegularButton<
  D extends React.ElementType<any> = 'button',
  P = {}
>(
  { className, pill, ...props }: RegularButtonProps<D, P>,
  ref: React.ForwardedRef<RegularButtonProps<D, P>['ref']>
) {
  const classes = useStyles()
  return (
    <Button
      ref={ref}
      {...props}
      className={clsx(className, {
        [classes.pill]: !!pill,
      })}
      classes={{
        outlined: classes.outlined,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary,
      }}
    />
  )
})
