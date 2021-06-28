import React from 'react';
import './App.css';
import { Products } from './Products';
import { CartState } from './type/type'
import { Cart } from './Cart';

class App extends React.Component<any, CartState> {
  constructor(props: any) {
    super(props)
    this.state = { selected: [] }
  }

  render() {
    return (
      <div>
        <header className="block title is-1 has-background-light">
          <span className="m-2">EC site</span>
        </header>
        <main className="columns m-2">
          <div className="column is-9">
            <Products />
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
