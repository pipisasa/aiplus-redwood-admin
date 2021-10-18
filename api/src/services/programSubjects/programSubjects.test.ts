import {
  programSubjects,
  programSubject,
  createProgramSubject,
  updateProgramSubject,
  deleteProgramSubject,
} from './programSubjects'
import type { StandardScenario } from './programSubjects.scenarios'

describe('programSubjects', () => {
  scenario(
    'returns all programSubjects',
    async (scenario: StandardScenario) => {
      const result = await programSubjects()

      expect(result.length).toEqual(Object.keys(scenario.programSubject).length)
    }
  )

  scenario(
    'returns a single programSubject',
    async (scenario: StandardScenario) => {
      const result = await programSubject({
        id: scenario.programSubject.one.id,
      })

      expect(result).toEqual(scenario.programSubject.one)
    }
  )

  scenario('creates a programSubject', async (scenario: StandardScenario) => {
    const result = await createProgramSubject({
      input: {
        programId: scenario.programSubject.two.programId,
        subjectId: scenario.programSubject.two.subjectId,
      },
    })

    expect(result.programId).toEqual(scenario.programSubject.two.programId)
    expect(result.subjectId).toEqual(scenario.programSubject.two.subjectId)
  })

  scenario('updates a programSubject', async (scenario: StandardScenario) => {
    const original = await programSubject({
      id: scenario.programSubject.one.id,
    })
    const result = await updateProgramSubject({
      id: original.id,
      input: { programId: scenario.programSubject.two.programId },
    })

    expect(result.programId).toEqual(scenario.programSubject.two.programId)
  })

  scenario('deletes a programSubject', async (scenario: StandardScenario) => {
    const original = await deleteProgramSubject({
      id: scenario.programSubject.one.id,
    })
    const result = await programSubject({ id: original.id })

    expect(result).toEqual(null)
  })
})
