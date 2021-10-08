import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeacherCreateArgs>({
  teacher: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        updatedAt: '2021-10-07T05:41:09Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        updatedAt: '2021-10-07T05:41:09Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
