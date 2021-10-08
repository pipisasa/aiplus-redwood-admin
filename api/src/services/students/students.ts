import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }: Prisma.StudentWhereUniqueInput) => {
  return db.student.findUnique({
    where: { id },
  })
}

interface CreateStudentArgs {
  input: Prisma.StudentCreateInput
}

export const createStudent = ({ input }: CreateStudentArgs) => {
  return db.student.create({
    data: input,
  })
}

interface UpdateStudentArgs extends Prisma.StudentWhereUniqueInput {
  input: Prisma.StudentUpdateInput
}

export const updateStudent = ({ id, input }: UpdateStudentArgs) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }: Prisma.StudentWhereUniqueInput) => {
  return db.student.delete({
    where: { id },
  })
}

export const Student = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof student>>) =>
    db.student.findUnique({ where: { id: root.id } }).program(),
  city: (_obj, { root }: ResolverArgs<ReturnType<typeof student>>) =>
    db.student.findUnique({ where: { id: root.id } }).city(),
}
