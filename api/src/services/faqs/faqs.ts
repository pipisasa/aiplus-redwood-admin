import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const faqs = () => {
  return db.faq.findMany()
}

export const faq = ({ id }: Prisma.FaqWhereUniqueInput) => {
  return db.faq.findUnique({
    where: { id },
  })
}

interface CreateFaqArgs {
  input: Prisma.FaqCreateInput
}

export const createFaq = ({ input }: CreateFaqArgs) => {
  return db.faq.create({
    data: input,
  })
}

interface UpdateFaqArgs extends Prisma.FaqWhereUniqueInput {
  input: Prisma.FaqUpdateInput
}

export const updateFaq = ({ id, input }: UpdateFaqArgs) => {
  return db.faq.update({
    data: input,
    where: { id },
  })
}

export const deleteFaq = ({ id }: Prisma.FaqWhereUniqueInput) => {
  return db.faq.delete({
    where: { id },
  })
}
