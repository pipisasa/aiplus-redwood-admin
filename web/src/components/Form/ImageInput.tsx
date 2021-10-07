import React from 'react'
import { DropzoneState, useDropzone } from 'react-dropzone'
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage'
import { storage } from 'src/firebase/firebaseApp'
import toast from 'react-hot-toast'

const uploadFile = async (file: File): Promise<UploadedImage> => {
  const storageRef = ref(storage, `/aiplus/${file.name}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)

  return {
    path: storageRef.fullPath,
    storage: storage.app.options.storageBucket,
    url,
  }
}

interface UploadedImage {
  path: string
  storage: string
  url: string
}

interface ImageInputProps {
  onUploaded(imgs: UploadedImage[])
  multiple?: boolean
}

const ImageInput: React.FC<ImageInputProps> = ({
  onUploaded,
  multiple = false,
}) => {
  // const [files, setFiles] = React.useState([])
  const [images, setImages] = React.useState([])

  const {
    // acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'image/*',
    multiple,
    onDrop: async (acceptedFiles) => {
      // setFiles(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     })
      //   )
      // )
      try {
        const p = Promise.all(acceptedFiles.map(uploadFile))
        toast.promise(p, {
          loading: 'Images Uploading...',
          success: 'Images Uploaded Successfully!',
          error: 'Images Not Uploaded!',
        })
        const images = await p
        setImages(images)
        onUploaded(images)
      } catch (error) {
        console.log(error)
      }
    },
  }) as DropzoneState & { acceptedFiles: Array<File & { path: string }> }

  return (
    <section className="rw-dropzone-container">
      <div {...getRootProps({ className: 'rw-dropzone' })}>
        <input {...getInputProps()} />
        <p>{"Drag 'n' drop some files here, or click to select files"}</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul className="file-list">
          {images.map(({ url, path }) => (
            <li key={url}>
              <img className="rw-dropzone__preview" src={url} alt={path} />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default ImageInput
