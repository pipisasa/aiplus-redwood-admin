import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const programs = () => {
  return db.program.findMany()
}

export const program = ({ id }: Prisma.ProgramWhereUniqueInput) => {
  return db.program.findUnique({
    where: { id },
  })
}

interface CreateProgramArgs {
  input: Prisma.ProgramCreateInput
}

export const createProgram = ({ input }: CreateProgramArgs) => {
  return db.program.create({
    data: input,
  })
}

interface UpdateProgramArgs extends Prisma.ProgramWhereUniqueInput {
  input: Prisma.ProgramUpdateInput
}

export const updateProgram = ({ id, input }: UpdateProgramArgs) => {
  return db.program.update({
    data: input,
    where: { id },
  })
}

export const deleteProgram = ({ id }: Prisma.ProgramWhereUniqueInput) => {
  return db.program.delete({
    where: { id },
  })
}

export const Program = {
  city: (_obj, { root }: ResolverArgs<ReturnType<typeof program>>) =>
    db.program.findUnique({ where: { id: root.id } }).city(),
  School: (_obj, { root }: ResolverArgs<ReturnType<typeof program>>) =>
    db.program.findUnique({ where: { id: root.id } }).School(),
  ProgramBenefits: (_obj, { root }: ResolverArgs<ReturnType<typeof program>>) =>
    db.program.findUnique({ where: { id: root.id } }).ProgramBenefits(),
  ProgramWhy: (_obj, { root }: ResolverArgs<ReturnType<typeof program>>) =>
    db.program.findUnique({ where: { id: root.id } }).ProgramWhy(),
  ProgramSubject: (_obj, { root }: ResolverArgs<ReturnType<typeof program>>) =>
    db.program.findUnique({ where: { id: root.id } }).ProgramSubject(),
}
