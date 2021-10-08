import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CityCreateArgs>({
  city: {
    one: { data: { name: 'String', updatedAt: '2021-10-08T06:01:34Z' } },
    two: { data: { name: 'String', updatedAt: '2021-10-08T06:01:34Z' } },
  },
})

export type StandardScenario = typeof standard
