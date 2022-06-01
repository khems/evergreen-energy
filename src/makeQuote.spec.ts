import { makeQuote } from './makeQuote'
import { HOUSES } from './testData/houses'
import { HEAT_PUMPS } from './'

describe('makeQuote', () => {
  describe('quotes', () => {
    it('blah', () => {
      const houseWeather = { ...HOUSES[0], degreeDays: 12 }
      expect(() => makeQuote(houseWeather)).toThrow('Heating factor must be greater than zero')
    })
  })
})
