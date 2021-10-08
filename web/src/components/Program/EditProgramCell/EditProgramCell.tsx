import type { EditProgramById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ProgramForm from 'src/components/Program/ProgramForm'

export const QUERY = gql`
  query EditProgramById($id: Int!) {
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
const UPDATE_PROGRAM_MUTATION = gql`
  mutation UpdateProgramMutation($id: Int!, $input: UpdateProgramInput!) {
    updateProgram(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ program }: CellSuccessProps<EditProgramById>) => {
  const [updateProgram, { loading, error }] = useMutation(UPDATE_PROGRAM_MUTATION, {
    onCompleted: () => {
      toast.success('Program updated')
      navigate(routes.programs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { schoolId: parseInt(input.schoolId), cityId: parseInt(input.cityId), })
    updateProgram({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Program {program.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramForm program={program} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
