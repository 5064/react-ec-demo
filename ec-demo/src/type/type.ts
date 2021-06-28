export type Product = {
    id: number
    name: string
    price: number
}

export interface CartState {
    selected: Product[]
}