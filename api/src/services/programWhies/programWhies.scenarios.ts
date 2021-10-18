import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramWhyCreateArgs>({
  programWhy: {
    one: {
      data: {
        textKz: 'String',
        textRu: 'String',
        updatedAt: '2021-10-18T07:25:49Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:25:49Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:25:49Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        textKz: 'String',
        textRu: 'String',
        updatedAt: '2021-10-18T07:25:49Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:25:49Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:25:49Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
