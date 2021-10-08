import EditCityCell from 'src/components/City/EditCityCell'

type CityPageProps = {
  id: number
}

const EditCityPage = ({ id }: CityPageProps) => {
  return <EditCityCell id={id} />
}

export default EditCityPage
