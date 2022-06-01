interface WeatherApi {
  location: {
    location: string
    degreeDays: string
    groundTemp: string
    postcode: string
    lat: string
    lng: string
  }
}

interface Weather {
  location: string
  degreeDays: number
  groundTemp: number
  postcode: string
  lat: number
  lng: number
}

class RegionNotSupportedError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, RegionNotSupportedError.prototype)
  }
}

interface WeatherRequestError {
  error: string
}

export { Weather, WeatherApi, WeatherRequestError, RegionNotSupportedError }
