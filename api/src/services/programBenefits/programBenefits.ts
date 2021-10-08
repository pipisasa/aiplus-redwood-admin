import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const programBenefits = () => {
  return db.programBenefit.findMany()
}

export const programBenefit = ({
  id,
}: Prisma.ProgramBenefitWhereUniqueInput) => {
  return db.programBenefit.findUnique({
    where: { id },
  })
}

export const ProgramBenefit = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programBenefit>>) =>
    db.programBenefit.findUnique({ where: { id: root.id } }).program(),
}
