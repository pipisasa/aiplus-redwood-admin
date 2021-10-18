import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ProgramSubjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.programSubject?.id)
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
          name="orderNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order number
        </Label>
        <NumberField
          name="orderNumber"
          defaultValue={props.programSubject?.orderNumber}
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
          defaultValue={props.programSubject?.programId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="programId" className="rw-field-error" />

        <Label
          name="subjectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subject id
        </Label>
        <NumberField
          name="subjectId"
          defaultValue={props.programSubject?.subjectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subjectId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProgramSubjectForm
