import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const menuItems = () => {
  return db.menuItem.findMany()
}

export const menuItem = ({ id }: Prisma.MenuItemWhereUniqueInput) => {
  return db.menuItem.findUnique({
    where: { id },
  })
}

interface CreateMenuItemArgs {
  input: Prisma.MenuItemCreateInput
}

export const createMenuItem = ({ input }: CreateMenuItemArgs) => {
  return db.menuItem.create({
    data: input,
  })
}

interface UpdateMenuItemArgs extends Prisma.MenuItemWhereUniqueInput {
  input: Prisma.MenuItemUpdateInput
}

export const updateMenuItem = ({ id, input }: UpdateMenuItemArgs) => {
  return db.menuItem.update({
    data: input,
    where: { id },
  })
}

export const deleteMenuItem = ({ id }: Prisma.MenuItemWhereUniqueInput) => {
  return db.menuItem.delete({
    where: { id },
  })
}

export const MenuItem = {
  parent: (_obj, { root }: ResolverArgs<ReturnType<typeof menuItem>>) =>
    db.menuItem.findUnique({ where: { id: root.id } }).parent(),
  children: (_obj, { root }: ResolverArgs<ReturnType<typeof menuItem>>) =>
    db.menuItem.findUnique({ where: { id: root.id } }).children(),
}
