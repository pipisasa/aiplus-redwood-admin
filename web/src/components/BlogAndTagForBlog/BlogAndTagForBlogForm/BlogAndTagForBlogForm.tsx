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

const BlogAndTagForBlogForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.blogAndTagForBlog?.id)
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
          name="blogId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Blog id
        </Label>
        <NumberField
          name="blogId"
          defaultValue={props.blogAndTagForBlog?.blogId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="blogId" className="rw-field-error" />

        <Label
          name="tagForBlogId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag for blog id
        </Label>
        <NumberField
          name="tagForBlogId"
          defaultValue={props.blogAndTagForBlog?.tagForBlogId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="tagForBlogId" className="rw-field-error" />

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

export default BlogAndTagForBlogForm
