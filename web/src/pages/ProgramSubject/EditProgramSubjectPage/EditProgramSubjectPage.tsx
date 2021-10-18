import EditProgramSubjectCell from 'src/components/ProgramSubject/EditProgramSubjectCell'

type ProgramSubjectPageProps = {
  id: number
}

const EditProgramSubjectPage = ({ id }: ProgramSubjectPageProps) => {
  return <EditProgramSubjectCell id={id} />
}

export default EditProgramSubjectPage
