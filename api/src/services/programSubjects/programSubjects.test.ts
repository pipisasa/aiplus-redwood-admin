import { programSubjects } from './programSubjects'
import type { StandardScenario } from './programSubjects.scenarios'

describe('programSubjects', () => {
  scenario(
    'returns all programSubjects',
    async (scenario: StandardScenario) => {
      const result = await programSubjects()

      expect(result.length).toEqual(Object.keys(scenario.programSubject).length)
    }
  )
})
