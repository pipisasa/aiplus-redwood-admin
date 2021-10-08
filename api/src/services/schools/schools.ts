import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const schools = () => {
  return db.school.findMany()
}

export const school = ({ id }: Prisma.SchoolWhereUniqueInput) => {
  return db.school.findUnique({
    where: { id },
  })
}

export const School = {
  city: (_obj, { root }: ResolverArgs<ReturnType<typeof school>>) =>
    db.school.findUnique({ where: { id: root.id } }).city(),
  programs: (_obj, { root }: ResolverArgs<ReturnType<typeof school>>) =>
    db.school.findUnique({ where: { id: root.id } }).programs(),
  students: (_obj, { root }: ResolverArgs<ReturnType<typeof school>>) =>
    db.school.findUnique({ where: { id: root.id } }).students(),
}
