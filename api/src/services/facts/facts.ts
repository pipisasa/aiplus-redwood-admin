import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const facts = () => {
  return db.fact.findMany()
}

export const fact = ({ id }: Prisma.FactWhereUniqueInput) => {
  return db.fact.findUnique({
    where: { id },
  })
}

interface CreateFactArgs {
  input: Prisma.FactCreateInput
}

export const createFact = ({ input }: CreateFactArgs) => {
  return db.fact.create({
    data: input,
  })
}

interface UpdateFactArgs extends Prisma.FactWhereUniqueInput {
  input: Prisma.FactUpdateInput
}

export const updateFact = ({ id, input }: UpdateFactArgs) => {
  return db.fact.update({
    data: input,
    where: { id },
  })
}

export const deleteFact = ({ id }: Prisma.FactWhereUniqueInput) => {
  return db.fact.delete({
    where: { id },
  })
}
