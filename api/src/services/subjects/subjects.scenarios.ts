import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SubjectCreateArgs>({
  subject: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-07T05:41:21Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-07T05:41:21Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
