import 'dotenv/config'
import { getHouseWeather } from './getHouseWeather'
import { makeQuote } from './makeQuote'
import { HEAT_PUMPS } from './testData/heatPumps'
import { HOUSES } from './testData/houses'

const main = async (): Promise<void> => {
  const houses = HOUSES

  const sortedHeatPumps = HEAT_PUMPS.sort((a, b) => a.outputCapacity - b.outputCapacity)

  const houseWeather = await getHouseWeather(houses)

  const quotes = houseWeather.map(house => makeQuote(house, sortedHeatPumps))

  console.dir(quotes)
}

console.log(main())
