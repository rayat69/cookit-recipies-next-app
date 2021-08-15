import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme =>
    createStyles({
      root: {
        display: 'grid',
        gridTemplateColumns: (props: GridProps) =>
          props.columns && `repeat(${props.columns}, 1fr)`,
        gridTemplateRows: props => props.rows && `repeat(${props.rows}, 1fr)`,
        // [theme.breakpoints.up('xs')]: {
        //   gridTemplateColumns: (props: GridProps) =>
        //     props.xs?.columns && `repeat(${props.xs?.columns}, 1fr)`,
        //   gridTemplateRows: props =>
        //     props.xs?.rows && `repeat(${props.xs?.rows}, 1fr)`,
        // },
        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: (props: GridProps) =>
            props.xs?.columns && `repeat(${props.xs?.columns}, 1fr)`,
          gridTemplateRows: props =>
            props.xs?.rows && `repeat(${props.xs?.rows}, 1fr)`,
        },
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: (props: GridProps) =>
            props.sm?.columns && `repeat(${props.sm?.columns}, 1fr)`,
          gridTemplateRows: props =>
            props.sm?.rows && `repeat(${props.sm?.rows}, 1fr)`,
        },
        [theme.breakpoints.up('lg')]: {
          gridTemplateColumns: (props: GridProps) =>
            props.md?.columns && `repeat(${props.md?.columns}, 1fr)`,
          gridTemplateRows: props =>
            props.md?.rows && `repeat(${props.md?.rows}, 1fr)`,
        },
        [theme.breakpoints.up('xl')]: {
          gridTemplateColumns: (props: GridProps) =>
            props.lg?.columns && `repeat(${props.lg?.columns}, 1fr)`,
          gridTemplateRows: props =>
            props.lg?.rows && `repeat(${props.lg?.rows}, 1fr)`,
        },
      },
    }),
  { classNamePrefix: 'css-grid' }
)

const Grid: React.FC<GridProps> = ({ className, ...props }) => {
  const classes = useStyles(props)
  const { xs, sm, md, lg, xl, ...rest } = props
  return <div {...rest} className={[classes.root, className].join(' ')} />
}

export default Grid

interface ColsRows {
  columns?: number
  rows?: number
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement>, ColsRows {
  xs?: ColsRows
  sm?: ColsRows
  md?: ColsRows
  lg?: ColsRows
  xl?: ColsRows
}
