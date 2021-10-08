import {
  programs,
  program,
  createProgram,
  updateProgram,
  deleteProgram,
} from './programs'
import type { StandardScenario } from './programs.scenarios'

describe('programs', () => {
  scenario('returns all programs', async (scenario: StandardScenario) => {
    const result = await programs()

    expect(result.length).toEqual(Object.keys(scenario.program).length)
  })

  scenario('returns a single program', async (scenario: StandardScenario) => {
    const result = await program({ id: scenario.program.one.id })

    expect(result).toEqual(scenario.program.one)
  })

  scenario('creates a program', async (scenario: StandardScenario) => {
    const result = await createProgram({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        logo: 'String',
        videoTitleRu: 'String',
        videoTitleKz: 'String',
        titleWhyRu: 'String',
        titleWhyKz: 'String',
        updatedAt: '2021-10-07T06:21:01Z',
        cityId: scenario.program.two.cityId,
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.logo).toEqual('String')
    expect(result.videoTitleRu).toEqual('String')
    expect(result.videoTitleKz).toEqual('String')
    expect(result.titleWhyRu).toEqual('String')
    expect(result.titleWhyKz).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-07T06:21:01Z')
    expect(result.cityId).toEqual(scenario.program.two.cityId)
  })

  scenario('updates a program', async (scenario: StandardScenario) => {
    const original = await program({ id: scenario.program.one.id })
    const result = await updateProgram({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a program', async (scenario: StandardScenario) => {
    const original = await deleteProgram({ id: scenario.program.one.id })
    const result = await program({ id: original.id })

    expect(result).toEqual(null)
  })
})
