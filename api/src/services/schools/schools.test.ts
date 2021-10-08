import { schools } from './schools'
import type { StandardScenario } from './schools.scenarios'

describe('schools', () => {
  scenario('returns all schools', async (scenario: StandardScenario) => {
    const result = await schools()

    expect(result.length).toEqual(Object.keys(scenario.school).length)
  })
})
