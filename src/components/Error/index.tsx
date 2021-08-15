import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons'

import styles from './styles.module.scss'

const useStyles = makeStyles(
  {
    back: {
      color: 'var(--color-error-btn)',
      borderColor: 'currentColor',
      padding: '0.5rem 2.25rem',
      textTransform: 'none',
      fontSize: '1.15rem',
    },
  },
  { meta: 'error-404', name: 'error-404' }
)

const error = {
  404: {
    title: 'Page not found',
    desc: 'The link you clicked may be broken or the page may have been removed or renamed.',
  },
  500: {
    title: 'Internal server error',
    desc: 'The link you clicked may be broken or the page may have been removed or renamed.',
  },
}

const ErrorC: React.FC<ErrorProps> = ({ statusCode, action }) => {
  const classes = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.card}>
          <h1 className={styles.code}>{statusCode}</h1>
          <h4 className={styles.title}>{error[statusCode].title}</h4>
          <p className={styles.message}>{error[statusCode].desc}</p>
          <Button
            startIcon={<ArrowBack fontSize="inherit" />}
            variant="outlined"
            className={classes.back}
            onClick={action}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorC

interface ErrorProps {
  statusCode: keyof typeof error
  action?: () => void
}
