import ProgramWhyCell from 'src/components/ProgramWhy/ProgramWhyCell'

type ProgramWhyPageProps = {
  id: Int
}

const ProgramWhyPage = ({ id }: ProgramWhyPageProps) => {
  return <ProgramWhyCell id={id} />
}

export default ProgramWhyPage
