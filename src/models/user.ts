export type User = {
    id: number
    name: string
}
export  type UserState = {
    loading: boolean
    users: User[]
    error: string
}