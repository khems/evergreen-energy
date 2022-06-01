import { HeatPump } from './types/HeatPump'

/**
 * Selects the most suitable heat pump system for given power and heatpumps.
 * @param sortedHeatPumps Sorted array of heat pumps
 * @param minimumPower Power requirement for heat pump
 * @returns Lowest power heat pump suitable for minimumPower
 */
const selectHeatPump = (sortedHeatPumps: HeatPump[], minimumPower: number): HeatPump => {
  const bestHeatPump = sortedHeatPumps.find((heatPump) => (heatPump.outputCapacity > minimumPower))
  if (bestHeatPump == null) {
    throw new Error(
      'The heating requirements of your house exceed the maximum power of our off-the-shelf solutions. Speak with one of our team.')
  }
  return bestHeatPump
}

export { selectHeatPump }
