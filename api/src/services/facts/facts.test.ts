import { facts, fact, createFact, updateFact, deleteFact } from './facts'
import type { StandardScenario } from './facts.scenarios'

describe('facts', () => {
  scenario('returns all facts', async (scenario: StandardScenario) => {
    const result = await facts()

    expect(result.length).toEqual(Object.keys(scenario.fact).length)
  })

  scenario('returns a single fact', async (scenario: StandardScenario) => {
    const result = await fact({ id: scenario.fact.one.id })

    expect(result).toEqual(scenario.fact.one)
  })

  scenario('creates a fact', async () => {
    const result = await createFact({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-07T01:49:52Z',
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-07T01:49:52Z')
  })

  scenario('updates a fact', async (scenario: StandardScenario) => {
    const original = await fact({ id: scenario.fact.one.id })
    const result = await updateFact({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a fact', async (scenario: StandardScenario) => {
    const original = await deleteFact({ id: scenario.fact.one.id })
    const result = await fact({ id: original.id })

    expect(result).toEqual(null)
  })
})
