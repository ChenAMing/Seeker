import type { ListItem } from '@/models'

import { DB_USER } from './config'
import { IDB } from './idb'

export class SeekerUser {
    private constructor(private idb: IDB) {}

    static async init() {
        return new this(await IDB.init(DB_USER))
    }

    async create(id: string) {
        await this.idb.act(db => db.createObjectStore(id, { keyPath: 'id' }))
    }

    async remove(id: string) {
        await this.idb.act(db => db.createObjectStore(id, { keyPath: 'id' }))
    }

    access(listName: string) {
        return {
            get: async (id: string): Promise<ListItem> =>
                await this.idb.tx(listName, 'readonly', store => store.get(id)),

            getAll: async (): Promise<ListItem[]> =>
                await this.idb.tx(listName, 'readonly', store => store.getAll()),

            insert: async (data: object): Promise<void> =>
                await this.idb.tx(listName, 'readwrite', store => store.add(data)),

            update: async (data: object): Promise<void> =>
                await this.idb.tx(listName, 'readwrite', store => store.put(data)),

            delete: async (id: string): Promise<void> =>
                await this.idb.tx(listName, 'readwrite', store => store.delete(id)),
        }
    }
}
