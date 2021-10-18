import type { FindMenuItemById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MenuItem from 'src/components/MenuItem/MenuItem'

export const QUERY = gql`
  query FindMenuItemById($id: Int!) {
    menuItem: menuItem(id: $id) {
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

export const Empty = () => <div>MenuItem not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItem }: CellSuccessProps<FindMenuItemById>) => {
  return <MenuItem menuItem={menuItem} />
}
