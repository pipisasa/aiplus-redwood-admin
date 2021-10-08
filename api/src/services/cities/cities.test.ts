import { cities, city, createCity, updateCity, deleteCity } from './cities'
import type { StandardScenario } from './cities.scenarios'

describe('cities', () => {
  scenario('returns all cities', async (scenario: StandardScenario) => {
    const result = await cities()

    expect(result.length).toEqual(Object.keys(scenario.city).length)
  })

  scenario('returns a single city', async (scenario: StandardScenario) => {
    const result = await city({ id: scenario.city.one.id })

    expect(result).toEqual(scenario.city.one)
  })

  scenario('creates a city', async () => {
    const result = await createCity({
      input: { name: 'String', updatedAt: '2021-10-08T06:01:34Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-08T06:01:34Z')
  })

  scenario('updates a city', async (scenario: StandardScenario) => {
    const original = await city({ id: scenario.city.one.id })
    const result = await updateCity({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a city', async (scenario: StandardScenario) => {
    const original = await deleteCity({ id: scenario.city.one.id })
    const result = await city({ id: original.id })

    expect(result).toEqual(null)
  })
})
