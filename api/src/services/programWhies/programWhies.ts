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

interface CreateProgramWhyArgs {
  input: Prisma.ProgramWhyCreateInput
}

export const createProgramWhy = ({ input }: CreateProgramWhyArgs) => {
  return db.programWhy.create({
    data: input,
  })
}

interface UpdateProgramWhyArgs extends Prisma.ProgramWhyWhereUniqueInput {
  input: Prisma.ProgramWhyUpdateInput
}

export const updateProgramWhy = ({ id, input }: UpdateProgramWhyArgs) => {
  return db.programWhy.update({
    data: input,
    where: { id },
  })
}

export const deleteProgramWhy = ({ id }: Prisma.ProgramWhyWhereUniqueInput) => {
  return db.programWhy.delete({
    where: { id },
  })
}

export const ProgramWhy = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programWhy>>) =>
    db.programWhy.findUnique({ where: { id: root.id } }).program(),
}
