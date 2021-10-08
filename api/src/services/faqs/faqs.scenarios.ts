import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FaqCreateArgs>({
  faq: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        descriptionRu: 'String',
        descriptionKz: 'String',
        updatedAt: '2021-10-06T21:23:35Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        descriptionRu: 'String',
        descriptionKz: 'String',
        updatedAt: '2021-10-06T21:23:35Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
