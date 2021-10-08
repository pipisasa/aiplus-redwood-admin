import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import ImageInput from 'src/components/Form/ImageInput'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const FactForm = (props) => {
  const [image, setImage] = React.useState('')
  const onSubmit = (data) => {
    props.onSave(
      {
        ...data,
        image,
      },
      props?.fact?.id
    )
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
          defaultValue={props.fact?.titleRu}
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
          defaultValue={props.fact?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

        <Label
          name="orderNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order number
        </Label>
        <NumberField
          name="orderNumber"
          defaultValue={props.fact?.orderNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNumber" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <ImageInput onUploaded={(imgs) => setImage(imgs?.[0]?.url || '')} />
        <FieldError name="image" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FactForm
