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
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T05:41:33Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T05:41:34Z' },
            },
          },
        },
        subject: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            updatedAt: '2021-10-07T05:41:34Z',
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
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-07T05:41:34Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-07T05:41:34Z' },
            },
          },
        },
        subject: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            updatedAt: '2021-10-07T05:41:34Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
