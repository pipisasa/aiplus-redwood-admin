import EditProgramBenefitCell from 'src/components/ProgramBenefit/EditProgramBenefitCell'

type ProgramBenefitPageProps = {
  id: number
}

const EditProgramBenefitPage = ({ id }: ProgramBenefitPageProps) => {
  return <EditProgramBenefitCell id={id} />
}

export default EditProgramBenefitPage
