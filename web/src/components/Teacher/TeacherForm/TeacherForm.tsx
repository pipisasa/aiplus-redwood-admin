import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { ImageField, useImageField } from 'src/components/Image'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const TeacherForm = (props) => {
  const [dataWithImage, imageFliedProps] = useImageField({
    defaultImage: props?.teacher?.image,
    name: 'image',
  })
  const [dataWithImage2, imageFliedProps2] = useImageField({
    defaultImage: props?.teacher?.image2,
    name: 'image2',
  })
  const onSubmit = (data) => {
    props.onSave(dataWithImage2(dataWithImage(data)), props?.teacher?.id)
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
          name="subjectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subject id
        </Label>
        <NumberField
          name="subjectId"
          defaultValue={props.teacher?.subjectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subjectId" className="rw-field-error" />

        <Label
          name="fioKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fio kz
        </Label>
        <TextField
          name="fioKz"
          defaultValue={props.teacher?.fioKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fioKz" className="rw-field-error" />

        <Label
          name="fioRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fio ru
        </Label>
        <TextField
          name="fioRu"
          defaultValue={props.teacher?.fioRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fioRu" className="rw-field-error" />

        <Label
          name="sloganKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slogan kz
        </Label>
        <TextField
          name="sloganKz"
          defaultValue={props.teacher?.sloganKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sloganKz" className="rw-field-error" />

        <Label
          name="sloganRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slogan ru
        </Label>
        <TextField
          name="sloganRu"
          defaultValue={props.teacher?.sloganRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sloganRu" className="rw-field-error" />

        <ImageField {...imageFliedProps} />

        <ImageField {...imageFliedProps2} />

        <Label
          name="youtubeVideoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Youtube video id
        </Label>
        <TextField
          name="youtubeVideoId"
          defaultValue={props.teacher?.youtubeVideoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="youtubeVideoId" className="rw-field-error" />

        <Label
          name="orderNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order num
        </Label>
        <NumberField
          name="orderNum"
          defaultValue={props.teacher?.orderNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNum" className="rw-field-error" />

        <Label
          name="urlName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url name
        </Label>
        <TextField
          name="urlName"
          defaultValue={props.teacher?.urlName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="urlName" className="rw-field-error" />

        <Label
          name="textKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text kz
        </Label>
        <TextField
          name="textKz"
          defaultValue={props.teacher?.textKz}
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
        <TextField
          name="textRu"
          defaultValue={props.teacher?.textRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textRu" className="rw-field-error" />

        <Label
          name="subtitleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subtitle kz
        </Label>
        <TextField
          name="subtitleKz"
          defaultValue={props.teacher?.subtitleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subtitleKz" className="rw-field-error" />

        <Label
          name="subtitleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subtitle ru
        </Label>
        <TextField
          name="subtitleRu"
          defaultValue={props.teacher?.subtitleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subtitleRu" className="rw-field-error" />

        <Label
          name="cityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City id
        </Label>
        <NumberField
          name="cityId"
          defaultValue={props.teacher?.cityId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cityId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeacherForm
