import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import { ImageField, useImageField } from 'src/components/Image'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const ProgramBenefitForm = (props) => {
  const [dataWithImage, imageFieldProps] = useImageField({
    defaultImage: props?.feature?.image,
    name: 'image',
  })
  const onSubmit = (data) => {
    props.onSave(dataWithImage(data), props?.feature?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="titleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title kz
        </Label>
        <TextField
          name="titleKz"
          defaultValue={props.programBenefit?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

        <Label
          name="titleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title ru
        </Label>
        <TextField
          name="titleRu"
          defaultValue={props.programBenefit?.titleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleRu" className="rw-field-error" />

        <Label
          name="orderNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order number
        </Label>
        <NumberField
          name="orderNumber"
          defaultValue={props.programBenefit?.orderNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNumber" className="rw-field-error" />

        <ImageField {...imageFieldProps} />

        <Label
          name="programId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program id
        </Label>
        <NumberField
          name="programId"
          defaultValue={props.programBenefit?.programId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="programId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProgramBenefitForm
