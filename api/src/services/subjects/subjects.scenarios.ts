import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SubjectCreateArgs>({
  subject: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-16T08:57:50Z',
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        updatedAt: '2021-10-16T08:57:50Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
