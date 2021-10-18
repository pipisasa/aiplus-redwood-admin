import EditProgramWhyCell from 'src/components/ProgramWhy/EditProgramWhyCell'

type ProgramWhyPageProps = {
  id: number
}

const EditProgramWhyPage = ({ id }: ProgramWhyPageProps) => {
  return <EditProgramWhyCell id={id} />
}

export default EditProgramWhyPage
