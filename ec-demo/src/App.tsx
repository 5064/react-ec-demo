import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Products} from './Products';
import {Cart} from './Cart';

class App extends React.Component {
  constructor(props: any){
    super(props)
    this.state={}
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
          <Cart />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
