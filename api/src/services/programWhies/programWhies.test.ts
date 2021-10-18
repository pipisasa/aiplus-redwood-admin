import {
  programWhies,
  programWhy,
  createProgramWhy,
  updateProgramWhy,
  deleteProgramWhy,
} from './programWhies'
import type { StandardScenario } from './programWhies.scenarios'

describe('programWhies', () => {
  scenario('returns all programWhies', async (scenario: StandardScenario) => {
    const result = await programWhies()

    expect(result.length).toEqual(Object.keys(scenario.programWhy).length)
  })

  scenario(
    'returns a single programWhy',
    async (scenario: StandardScenario) => {
      const result = await programWhy({ id: scenario.programWhy.one.id })

      expect(result).toEqual(scenario.programWhy.one)
    }
  )

  scenario('creates a programWhy', async (scenario: StandardScenario) => {
    const result = await createProgramWhy({
      input: {
        textKz: 'String',
        textRu: 'String',
        updatedAt: '2021-10-18T07:25:49Z',
        programId: scenario.programWhy.two.programId,
      },
    })

    expect(result.textKz).toEqual('String')
    expect(result.textRu).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-18T07:25:49Z')
    expect(result.programId).toEqual(scenario.programWhy.two.programId)
  })

  scenario('updates a programWhy', async (scenario: StandardScenario) => {
    const original = await programWhy({ id: scenario.programWhy.one.id })
    const result = await updateProgramWhy({
      id: original.id,
      input: { textKz: 'String2' },
    })

    expect(result.textKz).toEqual('String2')
  })

  scenario('deletes a programWhy', async (scenario: StandardScenario) => {
    const original = await deleteProgramWhy({ id: scenario.programWhy.one.id })
    const result = await programWhy({ id: original.id })

    expect(result).toEqual(null)
  })
})
