
export interface actionsType {
    text: string,
    color: string,
}

interface OmitCommentType {
    id: number
    created_at: string
}

export type typeCategory = '' |'all'|'technology' | 'science' | 'finance' | 'society' | 'entertainment' | 'health' | 'history' | 'news'

export interface commentType extends OmitCommentType {
    category: string
    source: string
    text: string
    votesfalse: number
    votesinteresting: number
    votesmind: number
}

export interface factType {
    category: typeCategory,
    source: string,
    text: string,
}

export interface notifyType {
    text: string,
    notify: boolean,
    type: 'error' | 'sucess'
}