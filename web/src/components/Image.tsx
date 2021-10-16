import React from 'react'
import { FieldError, Label } from '@redwoodjs/forms'
import { filestackThumbnail } from 'src/utils/formUtils'
import { PickerInline } from 'filestack-react'

interface ImagePreviewProps {
  url: string
}

export const ImagePreview = ({ url }: ImagePreviewProps) => {
  return (
    <img
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
      src={filestackThumbnail(url)}
      alt={url}
    />
  )
}

export const imageTag = (url: string) => <ImagePreview url={url} />

interface ImageFieldProps {
  onChange: (url: string) => void
  image: string
  name?: string
}

export const ImageField = ({
  onChange,
  image,
  name = 'image',
}: ImageFieldProps) => {
  const handleFileUpload = (result) => {
    const url = result.filesUploaded[0].url || ''
    onChange(url)
  }

  return (
    <>
      <Label
        name={name}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Image
      </Label>
      <PickerInline
        apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
        accept="image/*"
        onSuccess={handleFileUpload}
      >
        <div style={{ display: image ? 'none' : 'block', height: '500px' }} />
      </PickerInline>

      {image && (
        <div>
          <ImagePreview url={image} />
          <button
            onClick={() => onChange('')}
            className="rw-button rw-button-blue"
          >
            Replace Image
          </button>
        </div>
      )}
      <FieldError name={name} className="rw-field-error" />
    </>
  )
}

export interface UseImageFieldOptions {
  defaultImage?: string
  name?: string
}

export const useImageField = ({
  defaultImage,
  name = 'image',
}: UseImageFieldOptions) => {
  const [url, setUrl] = React.useState<string>(defaultImage || '')

  const dataWithImage = (data = {}) => ({
    ...data,
    [name]: url,
  })

  const imageFliedProps: ImageFieldProps = {
    image: url,
    onChange: (...args) => {
      console.log(args)
      setUrl(args[0])
    },
    name,
  }

  return {
    dataWithImage,
    imageFliedProps,
  }
}
