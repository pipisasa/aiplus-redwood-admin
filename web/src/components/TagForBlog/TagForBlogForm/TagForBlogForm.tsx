import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TagForBlogForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.tagForBlog?.id)
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
          name="orderNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order num
        </Label>
        <NumberField
          name="orderNum"
          defaultValue={props.tagForBlog?.orderNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNum" className="rw-field-error" />

        <Label
          name="titleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title ru
        </Label>
        <TextField
          name="titleRu"
          defaultValue={props.tagForBlog?.titleRu}
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
          defaultValue={props.tagForBlog?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

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

export default TagForBlogForm
