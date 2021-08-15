import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    svg: {
      height: '64px',
      width: '64px',
      fill: theme.palette.primary.main,
      transform: 'scale(1.2)',
    },
  })
)

export const OfferingCard: React.FC<OfferingCardProps> = ({
  icon: Svg,
  title,
  children,
  ...rest
}) => {
  const classes = useStyles()
  return (
    <div {...rest}>
      <Svg className={classes.svg} />
      <Typography variant="h4" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="initial" component="p">
        {children}
      </Typography>
    </div>
  )
}

export interface OfferingCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>
  title: string
  children: React.ReactNode
}
