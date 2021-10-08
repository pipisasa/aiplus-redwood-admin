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

const ProgramForm = (props) => {
  const [logo, setLogo] = React.useState('')
  const [logoAtRoot, setLogoAtRoot] = React.useState('')
  const [logoAtListOfPrograms, setLogoAtListOfPrograms] = React.useState('')
  const onSubmit = (data) => {
    props.onSave(
      {
        ...data,
        logo,
        logoAtRoot,
        logoAtListOfPrograms,
      },
      props?.program?.id
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
          defaultValue={props.program?.titleRu}
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
          defaultValue={props.program?.titleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleKz" className="rw-field-error" />

        <Label
          name="shortSchoolNameRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short school name ru
        </Label>
        <TextField
          name="shortSchoolNameRu"
          defaultValue={props.program?.shortSchoolNameRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="shortSchoolNameRu" className="rw-field-error" />

        <Label
          name="shortSchoolNameKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short school name kz
        </Label>
        <TextField
          name="shortSchoolNameKz"
          defaultValue={props.program?.shortSchoolNameKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="shortSchoolNameKz" className="rw-field-error" />

        <Label
          name="fullSchoolNameRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full school name ru
        </Label>
        <TextField
          name="fullSchoolNameRu"
          defaultValue={props.program?.fullSchoolNameRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fullSchoolNameRu" className="rw-field-error" />

        <Label
          name="fullSchoolNameKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full school name kz
        </Label>
        <TextField
          name="fullSchoolNameKz"
          defaultValue={props.program?.fullSchoolNameKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fullSchoolNameKz" className="rw-field-error" />

        <Label
          name="subTitleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sub title ru
        </Label>
        <TextField
          name="subTitleRu"
          defaultValue={props.program?.subTitleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subTitleRu" className="rw-field-error" />

        <Label
          name="subTitleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sub title kz
        </Label>
        <TextField
          name="subTitleKz"
          defaultValue={props.program?.subTitleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subTitleKz" className="rw-field-error" />

        <Label
          name="titleAtRootRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title at root ru
        </Label>
        <TextField
          name="titleAtRootRu"
          defaultValue={props.program?.titleAtRootRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleAtRootRu" className="rw-field-error" />

        <Label
          name="titleAtRootKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title at root kz
        </Label>
        <TextField
          name="titleAtRootKz"
          defaultValue={props.program?.titleAtRootKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleAtRootKz" className="rw-field-error" />

        <Label
          name="titleAtRootHoverRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title at root hover ru
        </Label>
        <TextField
          name="titleAtRootHoverRu"
          defaultValue={props.program?.titleAtRootHoverRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleAtRootHoverRu" className="rw-field-error" />

        <Label
          name="titleAtRootHoverKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title at root hover kz
        </Label>
        <TextField
          name="titleAtRootHoverKz"
          defaultValue={props.program?.titleAtRootHoverKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleAtRootHoverKz" className="rw-field-error" />

        <Label
          name="logo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo
        </Label>
        <ImageInput onUploaded={(imgs) => setLogo(imgs?.[0]?.url || '')} />
        <FieldError name="logo" className="rw-field-error" />

        <Label
          name="logoAtRoot"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo at root
        </Label>
        <ImageInput
          onUploaded={(imgs) => setLogoAtRoot(imgs?.[0]?.url || '')}
        />
        <FieldError name="logoAtRoot" className="rw-field-error" />

        <Label
          name="logoAtListOfPrograms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo at list of programs
        </Label>
        <ImageInput
          onUploaded={(imgs) => setLogoAtListOfPrograms(imgs?.[0]?.url || '')}
        />
        <FieldError name="logoAtListOfPrograms" className="rw-field-error" />

        <Label
          name="orderNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order number
        </Label>
        <NumberField
          name="orderNumber"
          defaultValue={props.program?.orderNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="orderNumber" className="rw-field-error" />

        <Label
          name="youtubeVideoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Youtube video id
        </Label>
        <TextField
          name="youtubeVideoId"
          defaultValue={props.program?.youtubeVideoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="youtubeVideoId" className="rw-field-error" />

        <Label
          name="videoTitleRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Video title ru
        </Label>
        <TextField
          name="videoTitleRu"
          defaultValue={props.program?.videoTitleRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="videoTitleRu" className="rw-field-error" />

        <Label
          name="videoTitleKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Video title kz
        </Label>
        <TextField
          name="videoTitleKz"
          defaultValue={props.program?.videoTitleKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="videoTitleKz" className="rw-field-error" />

        <Label
          name="factAboutProgramKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fact about program kz
        </Label>
        <TextField
          name="factAboutProgramKz"
          defaultValue={props.program?.factAboutProgramKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="factAboutProgramKz" className="rw-field-error" />

        <Label
          name="factAboutProgramRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fact about program ru
        </Label>
        <TextField
          name="factAboutProgramRu"
          defaultValue={props.program?.factAboutProgramRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="factAboutProgramRu" className="rw-field-error" />

        <Label
          name="titleWhyRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title why ru
        </Label>
        <TextField
          name="titleWhyRu"
          defaultValue={props.program?.titleWhyRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleWhyRu" className="rw-field-error" />

        <Label
          name="titleWhyKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title why kz
        </Label>
        <TextField
          name="titleWhyKz"
          defaultValue={props.program?.titleWhyKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="titleWhyKz" className="rw-field-error" />

        <Label
          name="textWhyKz"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text why kz
        </Label>
        <TextField
          name="textWhyKz"
          defaultValue={props.program?.textWhyKz}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textWhyKz" className="rw-field-error" />

        <Label
          name="textWhyRu"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text why ru
        </Label>
        <TextField
          name="textWhyRu"
          defaultValue={props.program?.textWhyRu}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="textWhyRu" className="rw-field-error" />

        <Label
          name="schoolId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          School id
        </Label>
        <NumberField
          name="schoolId"
          defaultValue={props.program?.schoolId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="schoolId" className="rw-field-error" />

        <Label
          name="cityId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City id
        </Label>
        <NumberField
          name="cityId"
          defaultValue={props.program?.cityId}
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

export default ProgramForm
