import {
  blogAndTagForBlogs,
  blogAndTagForBlog,
  createBlogAndTagForBlog,
  updateBlogAndTagForBlog,
  deleteBlogAndTagForBlog,
} from './blogAndTagForBlogs'
import type { StandardScenario } from './blogAndTagForBlogs.scenarios'

describe('blogAndTagForBlogs', () => {
  scenario(
    'returns all blogAndTagForBlogs',
    async (scenario: StandardScenario) => {
      const result = await blogAndTagForBlogs()

      expect(result.length).toEqual(
        Object.keys(scenario.blogAndTagForBlog).length
      )
    }
  )

  scenario(
    'returns a single blogAndTagForBlog',
    async (scenario: StandardScenario) => {
      const result = await blogAndTagForBlog({
        id: scenario.blogAndTagForBlog.one.id,
      })

      expect(result).toEqual(scenario.blogAndTagForBlog.one)
    }
  )

  scenario('creates a blogAndTagForBlog', async () => {
    const result = await createBlogAndTagForBlog({
      input: { updatedAt: '2021-10-18T11:09:10Z' },
    })

    expect(result.updatedAt).toEqual('2021-10-18T11:09:10Z')
  })

  scenario(
    'updates a blogAndTagForBlog',
    async (scenario: StandardScenario) => {
      const original = await blogAndTagForBlog({
        id: scenario.blogAndTagForBlog.one.id,
      })
      const result = await updateBlogAndTagForBlog({
        id: original.id,
        input: { updatedAt: '2021-10-19T11:09:10Z' },
      })

      expect(result.updatedAt).toEqual('2021-10-19T11:09:10Z')
    }
  )

  scenario(
    'deletes a blogAndTagForBlog',
    async (scenario: StandardScenario) => {
      const original = await deleteBlogAndTagForBlog({
        id: scenario.blogAndTagForBlog.one.id,
      })
      const result = await blogAndTagForBlog({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
