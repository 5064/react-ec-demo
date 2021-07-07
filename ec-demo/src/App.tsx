import React from 'react';
import './App.css';
import { AppState, Product, ProductListProp } from './type/type'
import { CartComponent } from './CartComponent';
import { ProductComponent } from './ProductComponent';
import { PRODUCT_LIST } from "./const/productList";

class App extends React.Component<any, AppState> {
  private items: Product[] = []
  private readonly MAX_COUNT = 10

  constructor(props: any) {
    super(props)
    // API response mocking
    this.items = PRODUCT_LIST
    // init state
    const pc = this.items.map((item) => { return { id: item.id, count: 0 } })
    this.state = { productsCount: pc, cart: { selected: [] } }
    console.log(this.state)
  }

  incrementCount(i: number) {
    if ((this.state.productsCount[i].count + 1) > this.MAX_COUNT) {
      return
    }
    this.setState({ productsCount: [{ count: this.state.productsCount[i].count + 1 }] })
  }

  decrementCount(i: number) {
    if ((this.state.productsCount[i].count - 1) < 0) {
      return
    }
    this.setState({ productsCount: [{ count: this.state.productsCount[i].count - 1 }] })
  }

  renderProducts() {
    const listItems = this.items.map((item: Product, i: number) => <ProductComponent key={i} id={item.id} name={item.name} price={item.price} count={this.state.productsCount[i].count} MAX_COUNT={this.MAX_COUNT} />);
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
