import { getStorage } from '@firebase/storage'
import {
  useEffect,
  useState,
} from '@redwoodjs/testing/node_modules/@types/react'

export const useFirebaseStorage = () => {
  const [storage, setStorage] = useState(getStorage())
  useEffect(() => {
    setStorage(getStorage())
  }, [])
  return storage
}
