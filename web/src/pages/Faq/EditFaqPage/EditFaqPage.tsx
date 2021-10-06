import EditFaqCell from 'src/components/Faq/EditFaqCell'

type FaqPageProps = {
  id: number
}

const EditFaqPage = ({ id }: FaqPageProps) => {
  return <EditFaqCell id={id} />
}

export default EditFaqPage
