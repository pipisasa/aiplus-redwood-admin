import TeacherCell from 'src/components/Teacher/TeacherCell'

type TeacherPageProps = {
  id: Int
}

const TeacherPage = ({ id }: TeacherPageProps) => {
  return <TeacherCell id={id} />
}

export default TeacherPage
