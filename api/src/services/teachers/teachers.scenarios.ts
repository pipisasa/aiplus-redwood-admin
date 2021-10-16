import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeacherCreateArgs>({
  teacher: {
    one: {
      data: {
        fioKz: 'String',
        fioRu: 'String',
        sloganKz: 'String',
        sloganRu: 'String',
        image: 'String',
        image2: 'String',
        youtubeVideoId: 'String',
        orderNum: 2373357,
        urlName: 'String',
        textKz: 'String',
        textRu: 'String',
        subtitleKz: 'String',
        subtitleRu: 'String',
        updatedAt: '2021-10-16T03:13:43Z',
        city: { create: { name: 'String', updatedAt: '2021-10-16T03:13:43Z' } },
      },
    },
    two: {
      data: {
        fioKz: 'String',
        fioRu: 'String',
        sloganKz: 'String',
        sloganRu: 'String',
        image: 'String',
        image2: 'String',
        youtubeVideoId: 'String',
        orderNum: 7443965,
        urlName: 'String',
        textKz: 'String',
        textRu: 'String',
        subtitleKz: 'String',
        subtitleRu: 'String',
        updatedAt: '2021-10-16T03:13:43Z',
        city: { create: { name: 'String', updatedAt: '2021-10-16T03:13:43Z' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
