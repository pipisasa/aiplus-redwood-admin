import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const blogs = () => {
  return db.blog.findMany()
}

export const blog = ({ id }: Prisma.BlogWhereUniqueInput) => {
  return db.blog.findUnique({
    where: { id },
  })
}

interface CreateBlogArgs {
  input: Prisma.BlogCreateInput
}

export const createBlog = ({ input }: CreateBlogArgs) => {
  return db.blog.create({
    data: input,
  })
}

interface UpdateBlogArgs extends Prisma.BlogWhereUniqueInput {
  input: Prisma.BlogUpdateInput
}

export const updateBlog = ({ id, input }: UpdateBlogArgs) => {
  return db.blog.update({
    data: input,
    where: { id },
  })
}

export const deleteBlog = ({ id }: Prisma.BlogWhereUniqueInput) => {
  return db.blog.delete({
    where: { id },
  })
}

export const Blog = {
  BlogAndTagForBlog: (_obj, { root }: ResolverArgs<ReturnType<typeof blog>>) =>
    db.blog.findUnique({ where: { id: root.id } }).BlogAndTagForBlog(),
}
