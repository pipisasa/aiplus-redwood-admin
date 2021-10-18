import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BlogAndTagForBlogCreateArgs>({
  blogAndTagForBlog: {
    one: { data: { updatedAt: '2021-10-18T11:09:10Z' } },
    two: { data: { updatedAt: '2021-10-18T11:09:10Z' } },
  },
})

export type StandardScenario = typeof standard
