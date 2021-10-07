import FactCell from 'src/components/Fact/FactCell'

type FactsPageProps = {
  id: Int
}

const FactPage = ({ id }: FactsPageProps) => {
  return <FactCell id={id} />
}

export default FactPage
