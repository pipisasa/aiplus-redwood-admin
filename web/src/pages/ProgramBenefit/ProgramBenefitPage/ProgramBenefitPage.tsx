import ProgramBenefitCell from 'src/components/ProgramBenefit/ProgramBenefitCell'

type ProgramBenefitPageProps = {
  id: Int
}

const ProgramBenefitPage = ({ id }: ProgramBenefitPageProps) => {
  return <ProgramBenefitCell id={id} />
}

export default ProgramBenefitPage
