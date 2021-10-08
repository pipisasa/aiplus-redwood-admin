import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramBenefitCreateArgs>({
  programBenefit: {
    one: {
      data: {
        updatedAt: '2021-10-07T06:13:02Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T06:13:02Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T06:13:02Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2021-10-07T06:13:02Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T06:13:02Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T06:13:02Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
