import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FeatureCreateArgs>({
  feature: {
    one: {
      data: {
        titleKz: 'String',
        titleRu: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-07T05:17:34Z',
      },
    },
    two: {
      data: {
        titleKz: 'String',
        titleRu: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        updatedAt: '2021-10-07T05:17:34Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
