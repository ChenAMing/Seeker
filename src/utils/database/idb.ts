export class IDB {
    private constructor(private name: string, private inst: IDBDatabase, private ver: number) {}

    private static registry: Map<string, IDB> = new Map()

    static async init(databaseName: string): Promise<IDB> {
        if (!this.registry.has(databaseName)) {
            const { name, inst, ver } = await new Promise<{
                name: string
                inst: IDBDatabase
                ver: number
            }>((resolve, reject) => {
                const req = indexedDB.open(databaseName)
                req.onsuccess = () =>
                    resolve({ name: databaseName, inst: req.result, ver: req.result.version })
                req.onerror = () => reject()
            })
            this.registry.set(databaseName, new this(name, inst, ver))
        }
        return this.registry.get(databaseName) as IDB
    }

    act(cb: (db: IDBDatabase) => any): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            this.inst.close()
            const req = indexedDB.open(this.name, this.ver + 1)
            req.onsuccess = () => (this.inst = req.result)
            req.onupgradeneeded = () => {
                this.ver++
                resolve(cb(req.result))
            }
            req.onerror = () => reject()
        })
    }

    tx(
        storeName: string,
        mode: IDBTransactionMode,
        cb: (store: IDBObjectStore) => any
    ): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const tx = this.inst.transaction(storeName, mode)
            const store = tx.objectStore(storeName)
            const req = cb(store)
            req.onsuccess = () => resolve(req.result)
            req.onerror = () => reject()
            tx.onerror = () => reject()
        })
    }
}
