import { subjects } from './subjects'
import type { StandardScenario } from './subjects.scenarios'

describe('subjects', () => {
  scenario('returns all subjects', async (scenario: StandardScenario) => {
    const result = await subjects()

    expect(result.length).toEqual(Object.keys(scenario.subject).length)
  })
})
