import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const SubjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.subject?.id)
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
          name="titleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title ru
        </Label>
        <TextField
          name="titleRu"
          defaultValue={props.subject?.titleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleRu" className="rw-field-error" />

        <Label
          name="titleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title kz
        </Label>
        <TextField
          name="titleKz"
          defaultValue={props.subject?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

        <Label
          name="descriptionRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description ru
        </Label>
        <TextField
          name="descriptionRu"
          defaultValue={props.subject?.descriptionRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionRu" className="rw-field-error" />

        <Label
          name="descriptionKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description kz
        </Label>
        <TextField
          name="descriptionKz"
          defaultValue={props.subject?.descriptionKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionKz" className="rw-field-error" />

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

export default SubjectForm
