import { getWeather } from './api'
import { MOCK_WEATHER } from './testData/weather'
import fetch from 'node-fetch'

jest.mock('node-fetch')

const mockedFetch = jest.mocked(fetch, true)

process.env.BASE_PATH = 'https://test.path'
process.env.API_KEY = 'testKey'

describe('getWeather', () => {
//   const OLD_ENV = process.env

  //     beforeEach(() => {
  //       jest.resetModules()
  //       process.env = { ...OLD_ENV }
  //     })

  //     afterAll(() => {
  //       process.env = OLD_ENV
  //     })

  //     describe('without BASE_PATH', () => {
  //       it('throws an error - base path not defined', async () => {
  //         process.env.BASE_PATH = undefined
  //         expect(async () => await getWeather('location')).toThrow('BASE_PATH not defined. Please set up the BASE_PATH environment variable')
  //       })
  //     })
  //     describe('without api key', () => {
  //       it('throws an error - api key not defined', async () => {
  //         process.env.API_KEY = undefined
  //         expect(async () => await getWeather('location')).toThrowError('API_KEY not defined. Please set up the API_KEY environment variable')
  //       })
  //     })
  describe('with env variables', () => {
    it('returns mock weather', async () => {
      mockedFetch.mockReturnValueOnce(
        Promise.resolve({
          ...new Promise(() => {}),
          ok: true,
          json: async () => await Promise.resolve(MOCK_WEATHER)
        })
      )
      await expect(getWeather('location')).resolves.toBe(MOCK_WEATHER)
    })
  })
})
