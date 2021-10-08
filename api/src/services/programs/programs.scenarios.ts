import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProgramCreateArgs>({
  program: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        logo: 'String',
        videoTitleRu: 'String',
        videoTitleKz: 'String',
        titleWhyRu: 'String',
        titleWhyKz: 'String',
        updatedAt: '2021-10-07T06:21:01Z',
        city: { create: { name: 'String', updatedAt: '2021-10-07T06:21:01Z' } },
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        logo: 'String',
        videoTitleRu: 'String',
        videoTitleKz: 'String',
        titleWhyRu: 'String',
        titleWhyKz: 'String',
        updatedAt: '2021-10-07T06:21:01Z',
        city: { create: { name: 'String', updatedAt: '2021-10-07T06:21:01Z' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
