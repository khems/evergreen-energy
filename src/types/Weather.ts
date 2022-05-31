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
  location: {
    location: string
    degreeDays: number
    groundTemp: number
    postcode: string
    lat: number
    lng: number
  }
}

export { Weather, WeatherApi }
