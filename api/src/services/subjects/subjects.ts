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

export const Subject = {
  schools: (_obj, { root }: ResolverArgs<ReturnType<typeof subject>>) =>
    db.subject.findUnique({ where: { id: root.id } }).schools(),
  ProgramSubject: (_obj, { root }: ResolverArgs<ReturnType<typeof subject>>) =>
    db.subject.findUnique({ where: { id: root.id } }).ProgramSubject(),
}
