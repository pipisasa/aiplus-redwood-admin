import StudentCell from 'src/components/Student/StudentCell'

type StudentsPageProps = {
  id: Int
}

const StudentPage = ({ id }: StudentsPageProps) => {
  return <StudentCell id={id} />
}

export default StudentPage
