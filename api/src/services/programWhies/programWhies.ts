import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const programWhies = () => {
  return db.programWhy.findMany()
}

export const programWhy = ({ id }: Prisma.ProgramWhyWhereUniqueInput) => {
  return db.programWhy.findUnique({
    where: { id },
  })
}

export const ProgramWhy = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programWhy>>) =>
    db.programWhy.findUnique({ where: { id: root.id } }).program(),
}
