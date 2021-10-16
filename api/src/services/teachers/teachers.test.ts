import {
  teachers,
  teacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from './teachers'
import type { StandardScenario } from './teachers.scenarios'

describe('teachers', () => {
  scenario('returns all teachers', async (scenario: StandardScenario) => {
    const result = await teachers()

    expect(result.length).toEqual(Object.keys(scenario.teacher).length)
  })

  scenario('returns a single teacher', async (scenario: StandardScenario) => {
    const result = await teacher({ id: scenario.teacher.one.id })

    expect(result).toEqual(scenario.teacher.one)
  })

  scenario('creates a teacher', async (scenario: StandardScenario) => {
    const result = await createTeacher({
      input: {
        fioKz: 'String',
        fioRu: 'String',
        sloganKz: 'String',
        sloganRu: 'String',
        image: 'String',
        image2: 'String',
        youtubeVideoId: 'String',
        orderNum: 4535576,
        urlName: 'String',
        textKz: 'String',
        textRu: 'String',
        subtitleKz: 'String',
        subtitleRu: 'String',
        cityId: scenario.teacher.two.cityId,
        updatedAt: '2021-10-16T03:13:43Z',
      },
    })

    expect(result.fioKz).toEqual('String')
    expect(result.fioRu).toEqual('String')
    expect(result.sloganKz).toEqual('String')
    expect(result.sloganRu).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.image2).toEqual('String')
    expect(result.youtubeVideoId).toEqual('String')
    expect(result.orderNum).toEqual(4535576)
    expect(result.urlName).toEqual('String')
    expect(result.textKz).toEqual('String')
    expect(result.textRu).toEqual('String')
    expect(result.subtitleKz).toEqual('String')
    expect(result.subtitleRu).toEqual('String')
    expect(result.cityId).toEqual(scenario.teacher.two.cityId)
    expect(result.updatedAt).toEqual('2021-10-16T03:13:43Z')
  })

  scenario('updates a teacher', async (scenario: StandardScenario) => {
    const original = await teacher({ id: scenario.teacher.one.id })
    const result = await updateTeacher({
      id: original.id,
      input: { fioKz: 'String2' },
    })

    expect(result.fioKz).toEqual('String2')
  })

  scenario('deletes a teacher', async (scenario: StandardScenario) => {
    const original = await deleteTeacher({ id: scenario.teacher.one.id })
    const result = await teacher({ id: original.id })

    expect(result).toEqual(null)
  })
})
