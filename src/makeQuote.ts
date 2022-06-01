
import { calculateHeatLoss, calculatePowerHeatLoss } from './heatLossCalculations'
import { HouseWeather } from './types/House'
import { HeatPump } from './types/HeatPump'
import { RegionNotSupportedError } from './types/Weather'
import { selectHeatPump } from './selectHeatPump'

const makeQuote = (house: HouseWeather, sortedHeatPumps: HeatPump[]): string => {
  if (house.degreeDays instanceof RegionNotSupportedError) {
    return (`
    --------------------------------------
    <Submission ID>
    --------------------------------------
    Heating Loss: ${calculateHeatLoss(house.floorArea, house.heatingFactor, house.insulationFactor)}
    Warning: Could not find design region
    `)
  }
  const powerHeatLoss = calculatePowerHeatLoss(house.floorArea, house.heatingFactor, house.insulationFactor, house.degreeDays)
  const selectedHeatPump = selectHeatPump(sortedHeatPumps, powerHeatLoss)
  return (`
  --------------------------------------
  <Submission ID>
  --------------------------------------
  Estimated Heat Loss = ${calculateHeatLoss(house.floorArea, house.heatingFactor, house.insulationFactor)}
  Design Region = ${house.designRegion}
  Power Heat Loss = ${powerHeatLoss}
  Recommended Heat Pump = ${selectedHeatPump.label}
  Cost Breakdown
    ${selectedHeatPump.costs.map(({ label, cost }) => `${label}, ${cost}\n`).toString()}
  Total Cost, including VAT = ${tallyCosts(selectedHeatPump)}
    `)
}

const tallyCosts = (heatPump: HeatPump): number => {
  return heatPump.costs.map(({ cost }) => cost).reduce((prev, cur) => prev + cur) * 1.05 // TODO move VAT out (VAT is variable)
}

export { makeQuote, tallyCosts }
