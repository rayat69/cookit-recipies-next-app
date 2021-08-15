import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const Meal: NextPage<MealProps> = ({
  idMeal,
  strCategory,
  strTags,
  strArea,
  strMeal,
}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>
        {strMeal} - {idMeal}
      </h2>
      <h4>{strCategory}</h4>
      <h5>{strArea}</h5>
      <p>{strTags}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  const data = Array.from(Array(5).keys())
  for await (const i of data) {
    const res = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
    const id = res.data.meals[0].idMeal
    paths.push({ params: { id } })
  }

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<MealProps, { id: string }> =
  async ({ params }) => {
    const id = params?.id

    const res = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
    )

    const meal = res.data.meals[0]

    return {
      props: {
        ...meal,
      },
    }
  }

export default Meal

type One2Ten = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Ingredients = { [Key in `strIngredient${One2Ten}`]: string }
type Measures = { [Key in `strMeasure${One2Ten}`]: string }

interface MealProps extends Ingredients, Measures {
  idMeal: string
  strMeal: string
  strDrinkAlternate: any
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  strSource: any
  strImageSource: any
  strCreativeCommonsConfirmed: any
  dateModified: any
}
