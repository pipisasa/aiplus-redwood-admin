import EditTeacherCell from 'src/components/Teacher/EditTeacherCell'

type TeacherPageProps = {
  id: number
}

const EditTeacherPage = ({ id }: TeacherPageProps) => {
  return <EditTeacherCell id={id} />
}

export default EditTeacherPage
