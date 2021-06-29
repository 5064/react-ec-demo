import React from 'react';
import './App.css';
import { Products } from './Products';
import { CartState, Product, ProductListProp } from './type/type'
import { Cart } from './Cart';
import { PRODUCT_LIST } from "./const/productList";

class App extends React.Component<any, CartState> {
  private items: Product[] = []

  constructor(props: any) {
    super(props)
    this.state = { selected: [] }
    // API response mocking
    this.items = PRODUCT_LIST
  }

  render() {
    return (
      <div>
        <header className="block title is-1 has-background-light">
          <span className="m-2">EC site</span>
        </header>
        <main className="columns m-2">
          <div className="column is-9">
            <Products items={this.items} />
          </div>
          <div className="column">
            <Cart selected={this.state.selected} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
