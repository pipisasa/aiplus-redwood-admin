import EditStudentCell from 'src/components/Student/EditStudentCell'

type StudentsPageProps = {
  id: number
}

const EditStudentPage = ({ id }: StudentsPageProps) => {
  return <EditStudentCell id={id} />
}

export default EditStudentPage
