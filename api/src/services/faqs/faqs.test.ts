import { faqs, faq, createFaq, updateFaq, deleteFaq } from './faqs'
import type { StandardScenario } from './faqs.scenarios'

describe('faqs', () => {
  scenario('returns all faqs', async (scenario: StandardScenario) => {
    const result = await faqs()

    expect(result.length).toEqual(Object.keys(scenario.faq).length)
  })

  scenario('returns a single faq', async (scenario: StandardScenario) => {
    const result = await faq({ id: scenario.faq.one.id })

    expect(result).toEqual(scenario.faq.one)
  })

  scenario('creates a faq', async () => {
    const result = await createFaq({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        descriptionRu: 'String',
        descriptionKz: 'String',
        updatedAt: '2021-10-06T21:23:35Z',
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.descriptionRu).toEqual('String')
    expect(result.descriptionKz).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-06T21:23:35Z')
  })

  scenario('updates a faq', async (scenario: StandardScenario) => {
    const original = await faq({ id: scenario.faq.one.id })
    const result = await updateFaq({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a faq', async (scenario: StandardScenario) => {
    const original = await deleteFaq({ id: scenario.faq.one.id })
    const result = await faq({ id: original.id })

    expect(result).toEqual(null)
  })
})
