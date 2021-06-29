export type Product = {
    id: number
    name: string
    price: number
}

export interface ProductListProp {
    items: Product[]
}

export interface CartState {
    selected: Product[]
}