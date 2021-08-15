import { Cuisines, mealTypes, sort } from './assets'

export interface SearchParams {
  cuisine: typeof Cuisines[number]
  excludeCuisine: typeof Cuisines[number]
  diet: string
  equipment: string
  includeIngredients: string
  excludeIngredients: string
  type: typeof mealTypes[number]
  instructionsRequired: boolean
  fillIngredients: boolean
  addRecipeInformation: boolean
  addRecipeNutrition: boolean
  tags: string
  titleMatch: string
  sort: typeof sort[number]
  sortDirection: 'asc' | 'desc'
  maxReadyTime: number
  offset: number
  number: number
  limitLicense: boolean
}
