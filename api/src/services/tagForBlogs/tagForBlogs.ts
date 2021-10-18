import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tagForBlogs = () => {
  return db.tagForBlog.findMany()
}

export const tagForBlog = ({ id }: Prisma.TagForBlogWhereUniqueInput) => {
  return db.tagForBlog.findUnique({
    where: { id },
  })
}

interface CreateTagForBlogArgs {
  input: Prisma.TagForBlogCreateInput
}

export const createTagForBlog = ({ input }: CreateTagForBlogArgs) => {
  return db.tagForBlog.create({
    data: input,
  })
}

interface UpdateTagForBlogArgs extends Prisma.TagForBlogWhereUniqueInput {
  input: Prisma.TagForBlogUpdateInput
}

export const updateTagForBlog = ({ id, input }: UpdateTagForBlogArgs) => {
  return db.tagForBlog.update({
    data: input,
    where: { id },
  })
}

export const deleteTagForBlog = ({ id }: Prisma.TagForBlogWhereUniqueInput) => {
  return db.tagForBlog.delete({
    where: { id },
  })
}

export const TagForBlog = {
  BlogAndTagForBlog: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof tagForBlog>>
  ) => db.tagForBlog.findUnique({ where: { id: root.id } }).BlogAndTagForBlog(),
}
