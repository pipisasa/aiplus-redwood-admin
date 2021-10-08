import {
  features,
  feature,
  createFeature,
  updateFeature,
  deleteFeature,
} from './features'
import type { StandardScenario } from './features.scenarios'

describe('features', () => {
  scenario('returns all features', async (scenario: StandardScenario) => {
    const result = await features()

    expect(result.length).toEqual(Object.keys(scenario.feature).length)
  })

  scenario('returns a single feature', async (scenario: StandardScenario) => {
    const result = await feature({ id: scenario.feature.one.id })

    expect(result).toEqual(scenario.feature.one)
  })

  scenario('creates a feature', async () => {
    const result = await createFeature({
      input: {
        titleKz: 'String',
        titleRu: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-07T05:17:34Z',
      },
    })

    expect(result.titleKz).toEqual('String')
    expect(result.titleRu).toEqual('String')
    expect(result.descriptionKz).toEqual('String')
    expect(result.descriptionRu).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-07T05:17:34Z')
  })

  scenario('updates a feature', async (scenario: StandardScenario) => {
    const original = await feature({ id: scenario.feature.one.id })
    const result = await updateFeature({
      id: original.id,
      input: { titleKz: 'String2' },
    })

    expect(result.titleKz).toEqual('String2')
  })

  scenario('deletes a feature', async (scenario: StandardScenario) => {
    const original = await deleteFeature({ id: scenario.feature.one.id })
    const result = await feature({ id: original.id })

    expect(result).toEqual(null)
  })
})
