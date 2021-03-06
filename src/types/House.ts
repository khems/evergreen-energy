import { RegionNotSupportedError } from './Weather'

interface House {
  submissionId: string
  designRegion: string
  floorArea: number
  age: string // Number range, eg. "1930 - 1949" or "pre 1900"
  heatingFactor: number
  insulationFactor: number
}

interface HouseWeather extends House {
  degreeDays: number | RegionNotSupportedError
}

export { House, HouseWeather }
