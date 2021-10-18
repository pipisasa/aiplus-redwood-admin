import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const programSubjects = () => {
  return db.programSubject.findMany()
}

export const programSubject = ({
  id,
}: Prisma.ProgramSubjectWhereUniqueInput) => {
  return db.programSubject.findUnique({
    where: { id },
  })
}

interface CreateProgramSubjectArgs {
  input: Prisma.ProgramSubjectCreateInput
}

export const createProgramSubject = ({ input }: CreateProgramSubjectArgs) => {
  return db.programSubject.create({
    data: input,
  })
}

interface UpdateProgramSubjectArgs
  extends Prisma.ProgramSubjectWhereUniqueInput {
  input: Prisma.ProgramSubjectUpdateInput
}

export const updateProgramSubject = ({
  id,
  input,
}: UpdateProgramSubjectArgs) => {
  return db.programSubject.update({
    data: input,
    where: { id },
  })
}

export const deleteProgramSubject = ({
  id,
}: Prisma.ProgramSubjectWhereUniqueInput) => {
  return db.programSubject.delete({
    where: { id },
  })
}

export const ProgramSubject = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programSubject>>) =>
    db.programSubject.findUnique({ where: { id: root.id } }).program(),
  subject: (_obj, { root }: ResolverArgs<ReturnType<typeof programSubject>>) =>
    db.programSubject.findUnique({ where: { id: root.id } }).subject(),
}
