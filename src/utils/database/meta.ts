import type { ListMeta } from '@/models'

import { DB_META, OS_META } from './config'
import { IDB } from './idb'

export class SeekerMeta {
    private constructor(private idb: IDB) {}

    static async init() {
        return new this(await IDB.init(DB_META))
    }

    accessMeta() {
        return {
            get: async (id: string): Promise<ListMeta> =>
                await this.idb.tx(OS_META, 'readonly', store => store.get(id)),

            getAll: async (): Promise<ListMeta[]> =>
                await this.idb.tx(OS_META, 'readonly', store => store.getAll()),

            insert: async (data: ListMeta): Promise<void> =>
                await this.idb.tx(OS_META, 'readwrite', store => store.add(data)),

            update: async (data: ListMeta): Promise<void> =>
                await this.idb.tx(OS_META, 'readwrite', store => store.put(data)),

            delete: async (id: string): Promise<void> =>
                await this.idb.tx(OS_META, 'readwrite', store => store.delete(id)),
        }
    }
}
