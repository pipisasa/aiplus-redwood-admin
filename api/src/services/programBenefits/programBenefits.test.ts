import {
  programBenefits,
  programBenefit,
  createProgramBenefit,
  updateProgramBenefit,
  deleteProgramBenefit,
} from './programBenefits'
import type { StandardScenario } from './programBenefits.scenarios'

describe('programBenefits', () => {
  scenario(
    'returns all programBenefits',
    async (scenario: StandardScenario) => {
      const result = await programBenefits()

      expect(result.length).toEqual(Object.keys(scenario.programBenefit).length)
    }
  )

  scenario(
    'returns a single programBenefit',
    async (scenario: StandardScenario) => {
      const result = await programBenefit({
        id: scenario.programBenefit.one.id,
      })

      expect(result).toEqual(scenario.programBenefit.one)
    }
  )

  scenario('creates a programBenefit', async (scenario: StandardScenario) => {
    const result = await createProgramBenefit({
      input: {
        updatedAt: '2021-10-18T07:25:16Z',
        programId: scenario.programBenefit.two.programId,
      },
    })

    expect(result.updatedAt).toEqual('2021-10-18T07:25:16Z')
    expect(result.programId).toEqual(scenario.programBenefit.two.programId)
  })

  scenario('updates a programBenefit', async (scenario: StandardScenario) => {
    const original = await programBenefit({
      id: scenario.programBenefit.one.id,
    })
    const result = await updateProgramBenefit({
      id: original.id,
      input: { updatedAt: '2021-10-19T07:25:16Z' },
    })

    expect(result.updatedAt).toEqual('2021-10-19T07:25:16Z')
  })

  scenario('deletes a programBenefit', async (scenario: StandardScenario) => {
    const original = await deleteProgramBenefit({
      id: scenario.programBenefit.one.id,
    })
    const result = await programBenefit({ id: original.id })

    expect(result).toEqual(null)
  })
})
