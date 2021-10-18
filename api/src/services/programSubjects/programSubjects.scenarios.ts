import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramSubjectCreateArgs>({
  programSubject: {
    one: {
      data: {
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:22:49Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:22:49Z' },
            },
          },
        },
        subject: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            updatedAt: '2021-10-18T07:22:49Z',
          },
        },
      },
    },
    two: {
      data: {
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:22:49Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:22:49Z' },
            },
          },
        },
        subject: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            updatedAt: '2021-10-18T07:22:49Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
