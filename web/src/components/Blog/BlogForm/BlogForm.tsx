import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'
import { ImageField, useImageField } from 'src/components/Image'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const BlogForm = (props) => {
  const [dataWithImage, imageFieldProps] = useImageField({
    defaultImage: props?.blog?.image,
    name: 'image',
  })
  const onSubmit = (data) => {
    props.onSave(dataWithImage(data), props?.blog?.id)
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
          defaultValue={props.blog?.titleRu}
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
          defaultValue={props.blog?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

        <Label
          name="textRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text ru
        </Label>
        <TextAreaField
          name="textRu"
          defaultValue={props.blog?.textRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textRu" className="rw-field-error" />

        <Label
          name="textKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text kz
        </Label>
        <TextAreaField
          name="textKz"
          defaultValue={props.blog?.textKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textKz" className="rw-field-error" />

        <ImageField {...imageFieldProps} />

        <Label
          name="descriptionKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description kz
        </Label>
        <TextAreaField
          name="descriptionKz"
          defaultValue={props.blog?.descriptionKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionKz" className="rw-field-error" />

        <Label
          name="descriptionRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description ru
        </Label>
        <TextAreaField
          name="descriptionRu"
          defaultValue={props.blog?.descriptionRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionRu" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BlogForm
