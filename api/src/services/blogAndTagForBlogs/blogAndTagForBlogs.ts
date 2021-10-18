import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const blogAndTagForBlogs = () => {
  return db.blogAndTagForBlog.findMany()
}

export const blogAndTagForBlog = ({
  id,
}: Prisma.BlogAndTagForBlogWhereUniqueInput) => {
  return db.blogAndTagForBlog.findUnique({
    where: { id },
  })
}

interface CreateBlogAndTagForBlogArgs {
  input: Prisma.BlogAndTagForBlogCreateInput
}

export const createBlogAndTagForBlog = ({
  input,
}: CreateBlogAndTagForBlogArgs) => {
  return db.blogAndTagForBlog.create({
    data: input,
  })
}

interface UpdateBlogAndTagForBlogArgs
  extends Prisma.BlogAndTagForBlogWhereUniqueInput {
  input: Prisma.BlogAndTagForBlogUpdateInput
}

export const updateBlogAndTagForBlog = ({
  id,
  input,
}: UpdateBlogAndTagForBlogArgs) => {
  return db.blogAndTagForBlog.update({
    data: input,
    where: { id },
  })
}

export const deleteBlogAndTagForBlog = ({
  id,
}: Prisma.BlogAndTagForBlogWhereUniqueInput) => {
  return db.blogAndTagForBlog.delete({
    where: { id },
  })
}

export const BlogAndTagForBlog = {
  blog: (_obj, { root }: ResolverArgs<ReturnType<typeof blogAndTagForBlog>>) =>
    db.blogAndTagForBlog.findUnique({ where: { id: root.id } }).blog(),
  tag: (_obj, { root }: ResolverArgs<ReturnType<typeof blogAndTagForBlog>>) =>
    db.blogAndTagForBlog.findUnique({ where: { id: root.id } }).tag(),
}
