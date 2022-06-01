/**
 * Calculates the heat loss based on the floor area, heating factor and insulation
 * factor of the property
 * TODO make this take a house so variables don't have to be in the correct positions
 * (wouldn't matter for this function but good practice)
 * @param floorArea
 * @param heatingFactor
 * @param insulationFactor
 * @returns heat loss (kWh)
 */
const calculateHeatLoss = (
  floorArea: number,
  heatingFactor: number,
  insulationFactor: number
): number => {
  if (floorArea <= 0) {
    throw new Error('Floor area must be greater than zero')
  }
  if (heatingFactor <= 0) {
    throw new Error('Heating factor must be greater than zero')
  }
  if (insulationFactor <= 0) {
    throw new Error('Insulation factor must be greater than zero')
  }
  return floorArea * heatingFactor * insulationFactor
}

/**
 * TODO make this take heat loss rather than four variables
 * @param floorArea
 * @param heatingFactor
 * @param insulationFactor
 * @param heatingDegreeDays
 * @returns Power heat loss kW
 */
const calculatePowerHeatLoss = (
  floorArea: number,
  heatingFactor: number,
  insulationFactor: number,
  heatingDegreeDays: number
): number => {
  // TODO check if heatingDegreeDays can be negative
  const propertyHeatLoss = calculateHeatLoss(
    floorArea,
    heatingFactor,
    insulationFactor
  )

  return propertyHeatLoss / heatingDegreeDays
}

export { calculateHeatLoss, calculatePowerHeatLoss }
