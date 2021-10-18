import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const programBenefits = () => {
  return db.programBenefit.findMany()
}

export const programBenefit = ({
  id,
}: Prisma.ProgramBenefitWhereUniqueInput) => {
  return db.programBenefit.findUnique({
    where: { id },
  })
}

interface CreateProgramBenefitArgs {
  input: Prisma.ProgramBenefitCreateInput
}

export const createProgramBenefit = ({ input }: CreateProgramBenefitArgs) => {
  return db.programBenefit.create({
    data: input,
  })
}

interface UpdateProgramBenefitArgs
  extends Prisma.ProgramBenefitWhereUniqueInput {
  input: Prisma.ProgramBenefitUpdateInput
}

export const updateProgramBenefit = ({
  id,
  input,
}: UpdateProgramBenefitArgs) => {
  return db.programBenefit.update({
    data: input,
    where: { id },
  })
}

export const deleteProgramBenefit = ({
  id,
}: Prisma.ProgramBenefitWhereUniqueInput) => {
  return db.programBenefit.delete({
    where: { id },
  })
}

export const ProgramBenefit = {
  program: (_obj, { root }: ResolverArgs<ReturnType<typeof programBenefit>>) =>
    db.programBenefit.findUnique({ where: { id: root.id } }).program(),
}
