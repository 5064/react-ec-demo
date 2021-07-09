import React from 'react';
import './App.css';
import { AppState, Product, ProductListProp } from './type/type'
import { CartComponent } from './CartComponent';
import { ProductComponent } from './ProductComponent';
import { PRODUCT_LIST } from "./const/productList";
import { comma } from "./const/util";

class App extends React.Component<any, AppState> {
  private items: Product[] = []
  private readonly MAX_QUANTITY = 10

  constructor(props: any) {
    super(props)
    // API response mocking
    this.items = PRODUCT_LIST
    // init state
    const pc = this.items.map((item) => { return { id: item.id, quantity: 0 } })
    this.state = { productsQuantity: pc, cart: { selected: [] } }
  }

  incrementQuantity(id: number) {
    const target = this.state.productsQuantity.filter(obj => obj.id === id)
    if ((target[0].quantity + 1) > this.MAX_QUANTITY) {
      return
    }
    const pq = this.state.productsQuantity.map(obj => obj.id === id ? Object.assign(obj, { quantity: obj.quantity + 1 }) : obj)
    this.setState(prevState => Object.assign(prevState, { productsQuantity: pq }))
  }

  decrementQuantity(id: number) {
    const target = this.state.productsQuantity.filter(obj => obj.id === id)
    if ((target[0].quantity + 1) < 0) {
      return
    }
    const pq = this.state.productsQuantity.map(obj => obj.id === id ? Object.assign(obj, { quantity: obj.quantity - 1 }) : obj)
    this.setState(prevState => Object.assign(prevState, { productsQuantity: pq }))
  }

  resetQuantity(id: number) {
    const pq = this.state.productsQuantity.map(obj => obj.id === id ? Object.assign(obj, { quantity: 0 }) : obj)
    this.setState(prevState => Object.assign(prevState, { productsQuantity: pq }))
  }

  addToCart(id: number) {
    // get product quantity
    const targetQ: number = this.state.productsQuantity.filter(obj => obj.id === id)[0].quantity
    // update cart state
    const target: Product = this.items.filter(item => item.id === id)[0]
    Object.assign(target, { quantity: targetQ })

    const updated = this.state.cart.selected.filter(obj => obj.id !== id)
    updated.push(target)
    this.setState(prevState => Object.assign(prevState, { cart: { selected: updated } }))
    // reset product quantity
    this.resetQuantity(id);
  }

  renderProducts() {
    const listItems = this.items.map((item: Product, i: number) =>
      <ProductComponent
        key={i}
        id={item.id}
        name={item.name}
        price={comma(item.price)}
        quantity={this.state.productsQuantity.filter(obj => obj.id === item.id)[0].quantity}
        MAX_QUANTITY={this.MAX_QUANTITY}
        incrementQuantity={() => this.incrementQuantity(item.id)}
        decrementQuantity={() => this.decrementQuantity(item.id)}
        addToCart={() => this.addToCart(item.id)}
      />
    );
    return (
      <div className="Products-wrapper">
        {listItems}
      </div>
    );
  }

  render() {
    return (
      <div>
        <header className="block title is-1 has-background-light is-flex is-align-items-center">
          <span className="ml-2">EC site</span><span className="material-icons is-clickable is-size-3 is-justify-content-flex-end ml-auto mr-2">account_circle</span>
        </header>
        <main className="columns m-2">
          <div className="column is-9">
            <div>
              {this.renderProducts()}
            </div>
          </div>
          <div className="column">
            <CartComponent selected={this.state.cart.selected} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
