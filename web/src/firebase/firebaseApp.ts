import { initializeApp } from '@firebase/app'
import { getStorage } from '@firebase/storage'
import firebaseConfig from './firebaseConfig.json'

const firebaseApp = initializeApp(firebaseConfig)
export const storage = getStorage(firebaseApp)

export default firebaseApp
