export type Product = {
    id: number
    name: string
    price: number
}

export type ProductListProp = {
    items: Product[]
    incrementQuantity: Function
}

// app root State
export type AppState = {
    cart: CartState,
    productsQuantity: ProductQuantityState[]
}

export type ProductQuantityState = {
    id: number
    quantity: number
}

export type CartState = {
    selected: Product[]
}