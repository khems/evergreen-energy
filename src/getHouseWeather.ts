
import { House, HouseWeather } from './types/House'
import { RegionNotSupportedError } from './types/Weather'
import { adaptWeather } from './adaptors'
import { getWeather } from './api/api'

const getHouseWeather = async (houses: House[]): Promise<HouseWeather[]> => {
  return await Promise.all(houses.map(async (house) => ({ ...house, degreeDays: await getDegreeDays(house) })))
}

const getDegreeDays = async (house: House): Promise<number | RegionNotSupportedError> => {
  const houseWeather = await getWeather(house.designRegion)
  if (houseWeather instanceof RegionNotSupportedError) {
    return houseWeather
  }
  const adaptedWeather = adaptWeather(houseWeather)
  return adaptedWeather.degreeDays
}

export { getHouseWeather, getDegreeDays }
