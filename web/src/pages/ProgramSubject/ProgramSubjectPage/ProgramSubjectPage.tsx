import ProgramSubjectCell from 'src/components/ProgramSubject/ProgramSubjectCell'

type ProgramSubjectPageProps = {
  id: Int
}

const ProgramSubjectPage = ({ id }: ProgramSubjectPageProps) => {
  return <ProgramSubjectCell id={id} />
}

export default ProgramSubjectPage
