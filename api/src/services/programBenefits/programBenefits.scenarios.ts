import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramBenefitCreateArgs>({
  programBenefit: {
    one: {
      data: {
        updatedAt: '2021-10-18T07:25:16Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:25:16Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:25:16Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2021-10-18T07:25:16Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-18T07:25:16Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-18T07:25:16Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
