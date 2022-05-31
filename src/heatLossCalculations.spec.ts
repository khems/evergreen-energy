import { calculateHeatLoss, calculatePowerHeatLoss } from './heatLossCalculations'

describe('calculateHeatLoss', () => {
  describe('Negative value for heat loss', () => {
    it('throws an error - heat loss cannot be negative', () => {
      expect(() => calculateHeatLoss(1, -1, 1)).toThrow('Heating factor must be greater than zero')
    })
  })
  describe('All positive values', () => {
    it('returns heat loss (product of args)', () => {
      expect(calculateHeatLoss(1, 1, 1)).toBe(1)
    })
  })
})

describe('calculatePowerHeatLoss', () => {
  describe('Negative value for heat loss', () => {
    it('throws an error - heat loss cannot be negative', () => {
      expect(() => calculatePowerHeatLoss(1, -1, 1, 1)).toThrow(Error)
    })
  })
  describe('All positive values', () => {
    it('returns power heat loss (heat loss (kWh) / heating degree days)', () => {
      expect(calculatePowerHeatLoss(1, 1, 1, 1)).toBe(1)
    })
  })
  describe('All positive values', () => {
    it('returns power heat loss (heat loss (kWh) / heating degree days)', () => {
      expect(calculatePowerHeatLoss(2, 3, 4, 12)).toBe(2)
    })
  })
})
