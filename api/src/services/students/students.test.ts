import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'
import type { StandardScenario } from './students.scenarios'

describe('students', () => {
  scenario('returns all students', async (scenario: StandardScenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario: StandardScenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async (scenario: StandardScenario) => {
    const result = await createStudent({
      input: {
        fioKz: 'String',
        fioRu: 'String',
        beforeBallCount: 'String',
        afterBallCount: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        textKz: 'String',
        textRu: 'String',
        feedbackKz: 'String',
        feedbackRu: 'String',
        youtubeVideoId: 'String',
        sliderSubtitleKz: 'String',
        sliderSubtitleRu: 'String',
        year: '2021-10-08T06:28:48Z',
        updatedAt: '2021-10-08T06:28:48Z',
        programId: scenario.student.two.programId,
        cityId: scenario.student.two.cityId,
      },
    })

    expect(result.fioKz).toEqual('String')
    expect(result.fioRu).toEqual('String')
    expect(result.beforeBallCount).toEqual('String')
    expect(result.afterBallCount).toEqual('String')
    expect(result.descriptionKz).toEqual('String')
    expect(result.descriptionRu).toEqual('String')
    expect(result.textKz).toEqual('String')
    expect(result.textRu).toEqual('String')
    expect(result.feedbackKz).toEqual('String')
    expect(result.feedbackRu).toEqual('String')
    expect(result.youtubeVideoId).toEqual('String')
    expect(result.sliderSubtitleKz).toEqual('String')
    expect(result.sliderSubtitleRu).toEqual('String')
    expect(result.year).toEqual('2021-10-08T06:28:48Z')
    expect(result.updatedAt).toEqual('2021-10-08T06:28:48Z')
    expect(result.programId).toEqual(scenario.student.two.programId)
    expect(result.cityId).toEqual(scenario.student.two.cityId)
  })

  scenario('updates a student', async (scenario: StandardScenario) => {
    const original = await student({ id: scenario.student.one.id })
    const result = await updateStudent({
      id: original.id,
      input: { fioKz: 'String2' },
    })

    expect(result.fioKz).toEqual('String2')
  })

  scenario('deletes a student', async (scenario: StandardScenario) => {
    const original = await deleteStudent({ id: scenario.student.one.id })
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
