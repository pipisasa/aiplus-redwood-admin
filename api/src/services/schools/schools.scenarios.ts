import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SchoolCreateArgs>({
  school: {
    one: {
      data: {
        titleEn: 'String',
        titleRu: 'String',
        titleKz: 'String',
        descriptionEn: 'String',
        descriptionRu: 'String',
        descriptionKz: 'String',
        updatedAt: '2021-10-07T06:12:51Z',
        city: { create: { name: 'String', updatedAt: '2021-10-07T06:12:51Z' } },
      },
    },
    two: {
      data: {
        titleEn: 'String',
        titleRu: 'String',
        titleKz: 'String',
        descriptionEn: 'String',
        descriptionRu: 'String',
        descriptionKz: 'String',
        updatedAt: '2021-10-07T06:12:51Z',
        city: { create: { name: 'String', updatedAt: '2021-10-07T06:12:51Z' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
