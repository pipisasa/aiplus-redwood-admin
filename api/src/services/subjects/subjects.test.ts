import {
  subjects,
  subject,
  createSubject,
  updateSubject,
  deleteSubject,
} from './subjects'
import type { StandardScenario } from './subjects.scenarios'

describe('subjects', () => {
  scenario('returns all subjects', async (scenario: StandardScenario) => {
    const result = await subjects()

    expect(result.length).toEqual(Object.keys(scenario.subject).length)
  })

  scenario('returns a single subject', async (scenario: StandardScenario) => {
    const result = await subject({ id: scenario.subject.one.id })

    expect(result).toEqual(scenario.subject.one)
  })

  scenario('creates a subject', async () => {
    const result = await createSubject({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-16T08:57:50Z',
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-16T08:57:50Z')
  })

  scenario('updates a subject', async (scenario: StandardScenario) => {
    const original = await subject({ id: scenario.subject.one.id })
    const result = await updateSubject({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a subject', async (scenario: StandardScenario) => {
    const original = await deleteSubject({ id: scenario.subject.one.id })
    const result = await subject({ id: original.id })

    expect(result).toEqual(null)
  })
})
