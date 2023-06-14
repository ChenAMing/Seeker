export enum ListEnum {
    normal = '默认',
    colors = '颜色',
}

export type ListType = keyof typeof ListEnum

export interface ListMeta {
    readonly dateCreated: Date
    readonly id: string
    name: string
    description: string
    readonly type: ListType
    star: boolean
}
