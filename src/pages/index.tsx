// import Head from 'next/head'
import Image from 'next/image'

// import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
// import Toolbar from '@material-ui/core/Toolbar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { OfferingCard } from '../components/Card'
import { ScrollTop } from '../components/Button'
import { RegularLink } from '../components/Link'

import heroImage from '../../public/images/home.png'
import veggiesImage from '../../public/images/about.jpg'
import DishImg from '../../public/images/dish.svg'
import PizzaImg from '../../public/images/pizza.svg'
import BurgerImg from '../../public/images/burger.svg'

const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      display: 'grid',
      // gridAutoFlow: 'column',
      // gridTemplateColumns: 'repeat(16, 1fr)',
      margin: '0 1rem',
      '& > *': {
        // gridColumn: '1/-1',
      },
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5em',
      padding: '2.5em 0',
    },

    smily: {
      color: theme.palette.primary.main,
    },
    btnGroup: {
      display: 'flex',
      gap: '0.5rem',
      '& > button': {
        textTransform: 'capitalize',
      },
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    svg: {
      '& *': {
        fill: theme.palette.primary.main,
      },
    },
  })
)

export default function Home() {
  const classes = useStyles()

  const className = {
    heroCenter: clsx(classes.hero, classes.center),
  }

  const reveal = (...classes: string[]) => clsx(...classes, 'scroll-reveal')

  return (
    <main className={classes.main}>
      <div id="back-to-top-anchor" />
      <ScrollTop />
      <div className={reveal(classes.hero)}>
        <Typography variant="h1" color="textPrimary">
          Awesome Rec<span className={classes.smily}>ipi</span>es
        </Typography>
        <Typography variant="h3" color="textSecondary">
          Try the best food recipies accross the world.
        </Typography>
        <div className={classes.btnGroup}>
          <RegularLink
            href="/auth/login"
            variant="outlined"
            color="primary"
            size="large"
          >
            Get Started
          </RegularLink>
          <RegularLink
            href="/recipies"
            variant="contained"
            color="primary"
            size="large"
          >
            View Meals
          </RegularLink>
        </div>
      </div>
      <Image src={heroImage} alt="Salad Bowl" className="scroll-reveal" />
      <div className={reveal(className.heroCenter)}>
        <Typography variant="h5" color="primary">
          About us
        </Typography>
        <Typography variant="h2" color="textSecondary">
          We cook the best tasty food
        </Typography>
        <Typography variant="subtitle2" color="initial" component="p">
          We cook the best food in the entire city, with excellent customer
          service, the best meals and at the best price, visit us.
        </Typography>
        <RegularLink
          href="/about"
          variant="contained"
          color="primary"
          size="large"
        >
          Explore
        </RegularLink>
      </div>
      <Image src={veggiesImage} alt="Vegitables" className="scroll-reveal" />
      <div className={reveal(className.heroCenter)}>
        <Typography variant="h5" color="primary">
          Offering
        </Typography>
        <Typography variant="h2" color="textSecondary">
          Our amazing services
        </Typography>
      </div>
      <div>
        <OfferingCard
          icon={DishImg}
          title="Excellent food"
          className={reveal(className.heroCenter)}
        >
          We offer our clients excellent quality services for many years, with
          the best and delicious food in the city.
        </OfferingCard>
        <OfferingCard
          icon={PizzaImg}
          title="Fast food"
          className={reveal(className.heroCenter)}
        >
          We offer our clients excellent quality services for many years, with
          the best and delicious food in the city.
        </OfferingCard>
        <OfferingCard
          icon={BurgerImg}
          title="Excellent food"
          className={reveal(className.heroCenter)}
        >
          We offer our clients excellent quality services for many years, with
          the best and delicious food in the city.
        </OfferingCard>
      </div>
      <div className={reveal(className.heroCenter)}>
        <Typography variant="h5" color="primary">
          Special
        </Typography>
        <Typography variant="h2" color="textSecondary">
          Meal of the week
        </Typography>
      </div>
    </main>
  )
}
