import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const features = () => {
  return db.feature.findMany()
}

export const feature = ({ id }: Prisma.FeatureWhereUniqueInput) => {
  return db.feature.findUnique({
    where: { id },
  })
}

interface CreateFeatureArgs {
  input: Prisma.FeatureCreateInput
}

export const createFeature = ({ input }: CreateFeatureArgs) => {
  return db.feature.create({
    data: input,
  })
}

interface UpdateFeatureArgs extends Prisma.FeatureWhereUniqueInput {
  input: Prisma.FeatureUpdateInput
}

export const updateFeature = ({ id, input }: UpdateFeatureArgs) => {
  return db.feature.update({
    data: input,
    where: { id },
  })
}

export const deleteFeature = ({ id }: Prisma.FeatureWhereUniqueInput) => {
  return db.feature.delete({
    where: { id },
  })
}
