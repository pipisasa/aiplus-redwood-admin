import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FactCreateArgs>({
  fact: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-07T01:49:52Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-07T01:49:52Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
