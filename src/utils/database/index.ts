import type { ListItem, ListMeta, ListType } from '@/models'

import { nanoid } from 'nanoid'
import { SeekerMeta } from './meta'
import { SeekerUser } from './user'
import { preCheck } from './check'

export class SeekerDB {
    private constructor(private meta: SeekerMeta, private user: SeekerUser) {}

    static inst: SeekerDB

    static async init() {
        preCheck()
        if (!this.inst) this.inst = new this(await SeekerMeta.init(), await SeekerUser.init())
        return this.inst
    }

    async createList(name: string, description: string, type: ListType): Promise<ListMeta> {
        const id = nanoid()
        const listMeta: ListMeta = {
            dateCreated: new Date(),
            id,
            name,
            description,
            type,
            star: false,
        }
        await this.user.create(id)
        await this.meta.accessMeta().insert(listMeta)
        return listMeta
    }

    async removeList(listId: string) {
        await this.user.remove(listId)
        await this.meta.accessMeta().delete(listId)
    }

    accessMeta() {
        return {
            get: async (id: string) => await this.meta.accessMeta().get(id),

            getAll: async () => await this.meta.accessMeta().getAll(),
        }
    }

    accessList(id: string) {
        return {
            rename: async (newName: string): Promise<string> => {
                const meta = await this.meta.accessMeta().get(id)
                meta.name = newName
                await this.meta.accessMeta().update(meta)
                return meta.name
            },

            star: async (): Promise<boolean> => {
                const listMeta = await this.meta.accessMeta().get(id)
                listMeta.star = !listMeta.star
                await this.meta.accessMeta().update(listMeta)
                return listMeta.star
            },

            modifyDescription: async (newDescription: string): Promise<string> => {
                const listMeta = await this.meta.accessMeta().get(id)
                listMeta.description = newDescription
                await this.meta.accessMeta().update(listMeta)
                return listMeta.description
            },

            getAll: async () => await this.user.access(id).getAll(),

            insert: async (value: string): Promise<ListItem> => {
                const listItem: ListItem = {
                    dateModified: new Date(),
                    id: nanoid(),
                    value,
                    extends: {},
                }
                await this.user.access(id).insert(listItem)
                return listItem
            },

            update: async (itemId: string, newValue: string) => {
                const listItem = await this.user.access(id).get(itemId)
                listItem.value = newValue
                return await this.user.access(id).update(listItem)
            },

            delete: async (itemId: string) => await this.user.access(id).delete(itemId),
        }
    }
}
