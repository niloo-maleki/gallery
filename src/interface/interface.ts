export interface IPhotos {

    id: number,
    category: CategoriesType,
    url: string,
    photographer: string,
    alt: string,
    page_url: string,
    width: number,
    height: number,
    path: string

}

export const categories = [
    "cat",
    "fox",
    "cow",
    "dog",
    "elephant",
    "monkey",
    "giraffe",
    "horse",
    "rabbit",
    "panda",
    "tiger"
] as const

export type CategoriesType = (typeof categories)[number]
