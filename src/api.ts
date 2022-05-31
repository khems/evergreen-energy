import { Weather } from './types/Weather'

class RegionNotSupportedError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, RegionNotSupportedError.prototype)
  }
}

interface WeatherRequestError {
  error: string
}

const getWeather = async (
  location: string
): Promise<Weather | RegionNotSupportedError> => {
  const basePath = process.env.BASE_PATH
  const apiKey = process.env.API_KEY
  if (basePath === undefined) {
    throw new Error(
      'BASE_PATH not defined. Please set up the BASE_PATH envaironment variable'
    )
  }
  if (apiKey === undefined) {
    throw new Error(
      'API_KEY not defined. Please set up the API_KEY envaironment variable'
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
