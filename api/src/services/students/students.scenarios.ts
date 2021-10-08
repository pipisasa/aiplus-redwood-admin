import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: {
      data: {
        fioKz: 'String',
        fioRu: 'String',
        beforeBallCount: 'String',
        afterBallCount: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        textKz: 'String',
        textRu: 'String',
        feedbackKz: 'String',
        feedbackRu: 'String',
        youtubeVideoId: 'String',
        sliderSubtitleKz: 'String',
        sliderSubtitleRu: 'String',
        year: '2021-10-08T06:28:48Z',
        updatedAt: '2021-10-08T06:28:48Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-08T06:28:48Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-08T06:28:48Z' },
            },
          },
        },
        city: { create: { name: 'String', updatedAt: '2021-10-08T06:28:48Z' } },
      },
    },
    two: {
      data: {
        fioKz: 'String',
        fioRu: 'String',
        beforeBallCount: 'String',
        afterBallCount: 'String',
        descriptionKz: 'String',
        descriptionRu: 'String',
        textKz: 'String',
        textRu: 'String',
        feedbackKz: 'String',
        feedbackRu: 'String',
        youtubeVideoId: 'String',
        sliderSubtitleKz: 'String',
        sliderSubtitleRu: 'String',
        year: '2021-10-08T06:28:48Z',
        updatedAt: '2021-10-08T06:28:48Z',
        program: {
          create: {
            titleRu: 'String',
            titleKz: 'String',
            logo: 'String',
            videoTitleRu: 'String',
            videoTitleKz: 'String',
            titleWhyRu: 'String',
            titleWhyKz: 'String',
            updatedAt: '2021-10-08T06:28:48Z',
            city: {
              create: { name: 'String', updatedAt: '2021-10-08T06:28:48Z' },
            },
          },
        },
        city: { create: { name: 'String', updatedAt: '2021-10-08T06:28:48Z' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
