import { calculateHeatLoss } from './heatLossCalculations'

describe('calculateHeatLoss', () => {
  describe('Negative value for heat loss', () => {
    it('throws an error - heat loss cannot be negative', () => {
      expect(calculateHeatLoss(1, -1, 1)).toThrowError()
    })
  })
  describe('All positive values', () => {
    it('returns heat loss (product of args)', () => {
      expect(calculateHeatLoss(1, 1, 1)).toBe(1)
    })
  })
})
