import { programBenefits } from './programBenefits'
import type { StandardScenario } from './programBenefits.scenarios'

describe('programBenefits', () => {
  scenario(
    'returns all programBenefits',
    async (scenario: StandardScenario) => {
      const result = await programBenefits()

      expect(result.length).toEqual(Object.keys(scenario.programBenefit).length)
    }
  )
})
