import { blogs, blog, createBlog, updateBlog, deleteBlog } from './blogs'
import type { StandardScenario } from './blogs.scenarios'

describe('blogs', () => {
  scenario('returns all blogs', async (scenario: StandardScenario) => {
    const result = await blogs()

    expect(result.length).toEqual(Object.keys(scenario.blog).length)
  })

  scenario('returns a single blog', async (scenario: StandardScenario) => {
    const result = await blog({ id: scenario.blog.one.id })

    expect(result).toEqual(scenario.blog.one)
  })

  scenario('creates a blog', async () => {
    const result = await createBlog({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        textRu: 'String',
        textKz: 'String',
        image: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-18T11:07:36Z',
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.textRu).toEqual('String')
    expect(result.textKz).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.descriptionKz).toEqual('String')
    expect(result.descriptionRu).toEqual('String')
    expect(result.updatedAt).toEqual('2021-10-18T11:07:36Z')
  })

  scenario('updates a blog', async (scenario: StandardScenario) => {
    const original = await blog({ id: scenario.blog.one.id })
    const result = await updateBlog({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a blog', async (scenario: StandardScenario) => {
    const original = await deleteBlog({ id: scenario.blog.one.id })
    const result = await blog({ id: original.id })

    expect(result).toEqual(null)
  })
})
