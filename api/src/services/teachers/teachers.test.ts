import { teachers } from './teachers'
import type { StandardScenario } from './teachers.scenarios'

describe('teachers', () => {
  scenario('returns all teachers', async (scenario: StandardScenario) => {
    const result = await teachers()

    expect(result.length).toEqual(Object.keys(scenario.teacher).length)
  })
})
