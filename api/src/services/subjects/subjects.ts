import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const subjects = () => {
  return db.subject.findMany()
}

export const subject = ({ id }: Prisma.SubjectWhereUniqueInput) => {
  return db.subject.findUnique({
    where: { id },
  })
}

interface CreateSubjectArgs {
  input: Prisma.SubjectCreateInput
}

export const createSubject = ({ input }: CreateSubjectArgs) => {
  return db.subject.create({
    data: input,
  })
}

interface UpdateSubjectArgs extends Prisma.SubjectWhereUniqueInput {
  input: Prisma.SubjectUpdateInput
}

export const updateSubject = ({ id, input }: UpdateSubjectArgs) => {
  return db.subject.update({
    data: input,
    where: { id },
  })
}

export const deleteSubject = ({ id }: Prisma.SubjectWhereUniqueInput) => {
  return db.subject.delete({
    where: { id },
  })
}

export const Subject = {
  ProgramSubject: (_obj, { root }: ResolverArgs<ReturnType<typeof subject>>) =>
    db.subject.findUnique({ where: { id: root.id } }).ProgramSubject(),
  teachers: (_obj, { root }: ResolverArgs<ReturnType<typeof subject>>) =>
    db.subject.findUnique({ where: { id: root.id } }).teachers(),
}
