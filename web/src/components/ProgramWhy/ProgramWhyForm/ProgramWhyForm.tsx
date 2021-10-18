import {
  Form,
  FormError,
  FieldError,
  Label,
  // TextField,
  NumberField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const ProgramWhyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.programWhy?.id)
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
          name="textKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text kz
        </Label>
        <TextAreaField
          name="textKz"
          defaultValue={props.programWhy?.textKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textKz" className="rw-field-error" />

        <Label
          name="textRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text ru
        </Label>
        <TextAreaField
          name="textRu"
          defaultValue={props.programWhy?.textRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textRu" className="rw-field-error" />

        <Label
          name="orderNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order number
        </Label>
        <NumberField
          name="orderNumber"
          defaultValue={props.programWhy?.orderNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNumber" className="rw-field-error" />

        <Label
          name="programId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program id
        </Label>
        <NumberField
          name="programId"
          defaultValue={props.programWhy?.programId}
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

export default ProgramWhyForm
