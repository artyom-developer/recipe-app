export type Recipe = {
    id: number
    title: string,
    image: string,
    imageType: string,
    restaurantChain: string
}
export  type RecipeState = {
    loading: boolean
    recipes: Recipe[]
    error: string
}