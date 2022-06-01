import fetch from 'node-fetch'

import { RegionNotSupportedError, WeatherApi, WeatherRequestError } from '../types/Weather'

const getWeather = async (
  location: string
): Promise<WeatherApi | RegionNotSupportedError> => {
  const basePath = process.env.BASE_PATH
  const apiKey = process.env.API_KEY
  if (basePath === undefined) {
    throw Error(
      'BASE_PATH not defined. Please set up the BASE_PATH environment variable'
    )
  }
  if (apiKey === undefined) {
    throw new Error(
      'API_KEY not defined. Please set up the API_KEY environment variable'
    )
  }

  const url = `${basePath}/weather?location=${location}`
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': apiKey
    }
  }

  const results = await fetch(url, options)

  if (!results.ok) {
    if (results.status === 404) {
      return new RegionNotSupportedError('Could not find design region')
    }
    const error: WeatherRequestError = await results.json()
    throw new Error(
      `Error ${results.status}: ${error.error}`
    )
  }

  return await results.json()
}

export { getWeather }
