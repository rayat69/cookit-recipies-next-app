import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { SearchParams } from './types'

class SpoonacularAPI {
  private readonly axios: AxiosInstance
  constructor(apiKey: string) {
    this.axios = axios.create({
      baseURL: 'https://api.spoonacular.com',
      params: {
        apiKey,
      },
    })
  }

  private getData = <T>(response: AxiosResponse<T>) => new ExtractData(response)

  search(query: string, params?: Partial<SearchParams>) {
    return this.axios
      .get('/recipes/complexSearch', {
        params: {
          query,
          ...params,
        },
      })
      .then(this.getData)
  }
}

export default SpoonacularAPI

class ExtractData<T> {
  constructor(public response: AxiosResponse<T>) {}

  toJSON() {
    return this.response.data
  }
}
