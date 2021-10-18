import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import { ImageField, useImageField } from 'src/components/Image'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const StudentForm = (props) => {
  const [dataWithImage, imageFliedProps] = useImageField({
    defaultImage: props?.student?.image,
    name: 'image',
  })
  const onSubmit = (data) => {
    props.onSave(dataWithImage(data), props?.student?.id)
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
          name="fioKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fio kz
        </Label>
        <TextField
          name="fioKz"
          defaultValue={props.student?.fioKz}
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
          defaultValue={props.student?.fioRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fioRu" className="rw-field-error" />

        <ImageField {...imageFliedProps} />

        <Label
          name="beforeBallCount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Before ball count
        </Label>
        <TextField
          name="beforeBallCount"
          defaultValue={props.student?.beforeBallCount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="beforeBallCount" className="rw-field-error" />

        <Label
          name="afterBallCount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          After ball count
        </Label>
        <TextField
          name="afterBallCount"
          defaultValue={props.student?.afterBallCount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="afterBallCount" className="rw-field-error" />

        <Label
          name="orderNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order num
        </Label>
        <NumberField
          name="orderNum"
          defaultValue={props.student?.orderNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNum" className="rw-field-error" />

        <Label
          name="listOrderNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          List order num
        </Label>
        <NumberField
          name="listOrderNum"
          defaultValue={props.student?.listOrderNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="listOrderNum" className="rw-field-error" />

        <Label
          name="descriptionKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description kz
        </Label>
        <TextField
          name="descriptionKz"
          defaultValue={props.student?.descriptionKz}
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
          defaultValue={props.student?.descriptionRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="descriptionRu" className="rw-field-error" />

        <Label
          name="textKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text kz
        </Label>
        <TextField
          name="textKz"
          defaultValue={props.student?.textKz}
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
          defaultValue={props.student?.textRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textRu" className="rw-field-error" />

        <Label
          name="feedbackKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Feedback kz
        </Label>
        <TextField
          name="feedbackKz"
          defaultValue={props.student?.feedbackKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="feedbackKz" className="rw-field-error" />

        <Label
          name="feedbackRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Feedback ru
        </Label>
        <TextField
          name="feedbackRu"
          defaultValue={props.student?.feedbackRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="feedbackRu" className="rw-field-error" />

        <Label
          name="youtubeVideoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Youtube video id
        </Label>
        <TextField
          name="youtubeVideoId"
          defaultValue={props.student?.youtubeVideoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="youtubeVideoId" className="rw-field-error" />

        <Label
          name="sliderSubtitleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slider subtitle kz
        </Label>
        <TextField
          name="sliderSubtitleKz"
          defaultValue={props.student?.sliderSubtitleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sliderSubtitleKz" className="rw-field-error" />

        <Label
          name="sliderSubtitleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slider subtitle ru
        </Label>
        <TextField
          name="sliderSubtitleRu"
          defaultValue={props.student?.sliderSubtitleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sliderSubtitleRu" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>
        <DatetimeLocalField
          name="year"
          defaultValue={formatDatetime(props.student?.year)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="year" className="rw-field-error" />

        <Label
          name="programId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program id
        </Label>
        <NumberField
          name="programId"
          defaultValue={props.student?.programId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="programId" className="rw-field-error" />

        <Label
          name="cityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City id
        </Label>
        <NumberField
          name="cityId"
          defaultValue={props.student?.cityId}
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

export default StudentForm
