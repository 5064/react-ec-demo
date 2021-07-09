import React from 'react';
import "./Cart.css"
import { CartState } from './type/type'

export class CartComponent extends React.Component<any, CartState> {
  constructor(props: any) {
    super(props)
    this.state = { selected: [] }
  }
  sum() {
    return this.state.selected.map
  }
  renderItems() {
    return (<p></p>)
  }
  render() {
    return (
      <div className="Cart-is-fixed Cart-width-available">
        <div className="box is-size-5">
          <div className="card-header">
            <div className="card-header-title">現在のカート</div>
          </div>
          <div className="card-content">
            <span>{this.state.selected.length}</span>
            <hr />
            <div className="is-flex is-justify-content-space-between ">
              <span>合計: </span>
              <span className="">￥{this.sum()}</span>
            </div>
          </div>
          <button className="button is-medium is-fullwidth is-primary" disabled={this.state.selected.length === 0}>購 入</button>
        </div>
      </div>
    );
  }
}
