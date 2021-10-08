import ProgramCell from 'src/components/Program/ProgramCell'

type ProgramPageProps = {
  id: Int
}

const ProgramPage = ({ id }: ProgramPageProps) => {
  return <ProgramCell id={id} />
}

export default ProgramPage
