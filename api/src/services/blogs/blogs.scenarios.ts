import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BlogCreateArgs>({
  blog: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        textRu: 'String',
        textKz: 'String',
        image: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-18T11:07:36Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        textRu: 'String',
        textKz: 'String',
        image: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-18T11:07:36Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
