import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MenuItemCreateArgs>({
  menuItem: {
    one: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        link: 'String',
        orderNumber: 902950,
      },
    },
    two: {
      data: {
        titleRu: 'String',
        titleKz: 'String',
        link: 'String',
        orderNumber: 6094273,
      },
    },
  },
})

export type StandardScenario = typeof standard
