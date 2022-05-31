import 'dotenv/config'
import { getWeather } from './api'

const main = async (): Promise<void> => {
  console.log(await getWeather('Borders (Boulmer)'))
}

console.log(main())
