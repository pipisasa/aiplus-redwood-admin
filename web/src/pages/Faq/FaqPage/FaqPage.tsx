import FaqCell from 'src/components/Faq/FaqCell'

type FaqPageProps = {
  id: Int
}

const FaqPage = ({ id }: FaqPageProps) => {
  return <FaqCell id={id} />
}

export default FaqPage
