import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagForBlogCreateArgs>({
  tagForBlog: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-18T11:08:17Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-18T11:08:17Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
