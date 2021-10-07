import EditFactCell from 'src/components/Fact/EditFactCell'

type FactsPageProps = {
  id: number
}

const EditFactPage = ({ id }: FactsPageProps) => {
  return <EditFactCell id={id} />
}

export default EditFactPage
