import EditProgramCell from 'src/components/Program/EditProgramCell'

type ProgramPageProps = {
  id: number
}

const EditProgramPage = ({ id }: ProgramPageProps) => {
  return <EditProgramCell id={id} />
}

export default EditProgramPage
