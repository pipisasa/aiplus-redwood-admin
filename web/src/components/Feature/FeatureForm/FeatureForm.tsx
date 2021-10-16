import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { ImageField, useImageField } from 'src/components/Image'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const FeatureForm = (props) => {
  const { dataWithImage, imageFliedProps } = useImageField({
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
          defaultValue={props.feature?.titleKz}
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
          defaultValue={props.feature?.titleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleRu" className="rw-field-error" />

        <Label
          name="descriptionKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description kz
        </Label>
        <TextField
          name="descriptionKz"
          defaultValue={props.feature?.descriptionKz}
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
        <TextField
          name="descriptionRu"
          defaultValue={props.feature?.descriptionRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionRu" className="rw-field-error" />

        <ImageField {...imageFliedProps} />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FeatureForm
