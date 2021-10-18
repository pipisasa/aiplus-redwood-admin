import type { FindMenuItems } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import MenuItems from 'src/components/MenuItem/MenuItems'

export const QUERY = gql`
  query FindMenuItems {
    menuItems {
      id
      titleRu
      titleKz
      link
      orderNumber
      parentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menuItems yet. '}
      <Link
        to={routes.newMenuItem()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItems }: CellSuccessProps<FindMenuItems>) => {
  return <MenuItems menuItems={menuItems} />
}
