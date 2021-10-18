import {
  tagForBlogs,
  tagForBlog,
  createTagForBlog,
  updateTagForBlog,
  deleteTagForBlog,
} from './tagForBlogs'
import type { StandardScenario } from './tagForBlogs.scenarios'

describe('tagForBlogs', () => {
  scenario('returns all tagForBlogs', async (scenario: StandardScenario) => {
    const result = await tagForBlogs()

    expect(result.length).toEqual(Object.keys(scenario.tagForBlog).length)
  })

  scenario(
    'returns a single tagForBlog',
    async (scenario: StandardScenario) => {
      const result = await tagForBlog({ id: scenario.tagForBlog.one.id })

      expect(result).toEqual(scenario.tagForBlog.one)
    }
  )

  scenario('creates a tagForBlog', async () => {
    const result = await createTagForBlog({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-18T11:08:17Z',
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-18T11:08:17Z')
  })

  scenario('updates a tagForBlog', async (scenario: StandardScenario) => {
    const original = await tagForBlog({ id: scenario.tagForBlog.one.id })
    const result = await updateTagForBlog({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a tagForBlog', async (scenario: StandardScenario) => {
    const original = await deleteTagForBlog({ id: scenario.tagForBlog.one.id })
    const result = await tagForBlog({ id: original.id })

    expect(result).toEqual(null)
  })
})
