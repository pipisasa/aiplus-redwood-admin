import { programWhies } from './programWhies'
import type { StandardScenario } from './programWhies.scenarios'

describe('programWhies', () => {
  scenario('returns all programWhies', async (scenario: StandardScenario) => {
    const result = await programWhies()

    expect(result.length).toEqual(Object.keys(scenario.programWhy).length)
  })
})
