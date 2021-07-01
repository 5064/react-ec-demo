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
        <header className="block title is-1 has-background-light is-flex is-align-items-center">
          <span className="ml-2">EC site</span><span className="material-icons is-clickable is-size-3 is-justify-content-flex-end ml-auto mr-2">account_circle</span>
        </header>
        <main className="columns m-2">
          <div className="column is-9">
            <div>
              <Products items={this.items} />
            </div>
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
