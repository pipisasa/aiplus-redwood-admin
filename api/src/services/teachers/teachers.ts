import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const teachers = () => {
  return db.teacher.findMany()
}

export const teacher = ({ id }: Prisma.TeacherWhereUniqueInput) => {
  return db.teacher.findUnique({
    where: { id },
  })
}

export const Teacher = {
  subject: (_obj, { root }: ResolverArgs<ReturnType<typeof teacher>>) =>
    db.teacher.findUnique({ where: { id: root.id } }).subject(),
}
