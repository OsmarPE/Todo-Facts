
export interface actionsType{
    text:string,
    color:string,
}

interface OmitCommentType{
    id: number
    created_at: string
}

export interface commentType extends OmitCommentType {
    category: string
    source: string
    text: string
    votesfalse: number
    votesinteresting: number
    votesmind: number
}

export interface factType {
    category: string
    source: string
    text: string
}
