import FeatureCell from 'src/components/Feature/FeatureCell'
import FeaturesLayout from 'src/layouts/FeaturesLayout/FeaturesLayout'

type FeaturePageProps = {
  id: Int
}

const FeaturePage = ({ id }: FeaturePageProps) => {
  return (
    <FeaturesLayout>
      <FeatureCell id={id} />
    </FeaturesLayout>
  )
}

export default FeaturePage
