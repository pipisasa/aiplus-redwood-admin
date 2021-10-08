import type { FindProgramById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Program from 'src/components/Program/Program'

export const QUERY = gql`
  query FindProgramById($id: Int!) {
    program: program(id: $id) {
      id
      titleRu
      titleKz
      shortSchoolNameRu
      shortSchoolNameKz
      fullSchoolNameRu
      fullSchoolNameKz
      subTitleRu
      subTitleKz
      titleAtRootRu
      titleAtRootKz
      titleAtRootHoverRu
      titleAtRootHoverKz
      logo
      logoAtRoot
      logoAtListOfPrograms
      orderNumber
      youtubeVideoId
      videoTitleRu
      videoTitleKz
      factAboutProgramKz
      factAboutProgramRu
      titleWhyRu
      titleWhyKz
      textWhyKz
      textWhyRu
      createdAt
      updatedAt
      schoolId
      cityId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Program not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ program }: CellSuccessProps<FindProgramById>) => {
  return <Program program={program} />
}
