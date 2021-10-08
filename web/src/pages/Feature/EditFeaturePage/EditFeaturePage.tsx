import EditFeatureCell from 'src/components/Feature/EditFeatureCell'
import FeaturesLayout from 'src/layouts/FeaturesLayout/FeaturesLayout'

type FeaturePageProps = {
  id: number
}

const EditFeaturePage = ({ id }: FeaturePageProps) => {
  return (
    <FeaturesLayout>
      <EditFeatureCell id={id} />
    </FeaturesLayout>
  )
}

export default EditFeaturePage
