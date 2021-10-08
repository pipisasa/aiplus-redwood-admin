import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramWhyCreateArgs>({
  programWhy: {
    one: {
      data: {
        textKz: 'String',
        textRu: 'String',
        updatedAt: '2021-10-07T05:41:44Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T05:41:44Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T05:41:44Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        textKz: 'String',
        textRu: 'String',
        updatedAt: '2021-10-07T05:41:44Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T05:41:44Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T05:41:44Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
