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

export const ProgramSubject = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programSubject>>) =>
    db.programSubject.findUnique({ where: { id: root.id } }).program(),
  subject: (_obj, { root }: ResolverArgs<ReturnType<typeof programSubject>>) =>
    db.programSubject.findUnique({ where: { id: root.id } }).subject(),
}
