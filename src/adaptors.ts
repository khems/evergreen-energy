import { Weather, WeatherApi } from './types/Weather'

const adaptWeather = (apiWeather: WeatherApi): Weather => ({
  ...apiWeather.location,
  degreeDays: Number(apiWeather.location.degreeDays),
  groundTemp: Number(apiWeather.location.groundTemp),
  lat: Number(apiWeather.location.lat),
  lng: Number(apiWeather.location.lng)
})

export { adaptWeather }
