import CityCell from 'src/components/City/CityCell'

type CityPageProps = {
  id: Int
}

const CityPage = ({ id }: CityPageProps) => {
  return <CityCell id={id} />
}

export default CityPage
