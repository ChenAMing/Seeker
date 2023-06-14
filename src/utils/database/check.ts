import { DB_META, OS_META } from './config'

export function preCheck() {
    const req = indexedDB.open(DB_META)
    req.onupgradeneeded = () => {
        req.result.createObjectStore(OS_META, { keyPath: 'id' })
        req.result.close()
    }
}
