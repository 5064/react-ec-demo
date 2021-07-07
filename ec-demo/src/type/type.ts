export type Product = {
    id: number
    name: string
    price: number
}

export type ProductListProp = {
    items: Product[]
    incrementCount: Function
}

// app root State
export type AppState = {
    cart: CartState,
    productsCount: ProductCountState[]
}

export type ProductCountState = {
    count: number
}

export type CartState = {
    selected: Product[]
}