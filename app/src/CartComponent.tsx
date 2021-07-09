import React from 'react';
import "./Cart.css"
import { comma } from './const/util';
import { AppState, Product } from './type/type'

export class CartComponent extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)
  }
  sum() {
    return this.props.selected.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0)
  }
  purchase() {
    return;
  }
  renderSelected() {
    const selected = this.props.selected.map((item: any) =>
      <div className="is-flex is-justify-content-space-between">
        <div className="Cart-grid-wrapper">
          <span>{item.name}</span>
          <span className="is-size-6">数量: {item.quantity}</span>
        </div>
        <span className="">￥{comma(item.quantity * item.price)}</span>
      </div>
    )
    return (
      <div >
        {selected}
      </div>
    );
  }
  render() {
    return (
      <div className="Cart-is-fixed Cart-width-available">
        <div className="box is-size-5">
          <div className="card-header">
            <div className="card-header-title">現在のカート</div>
          </div>
          <div className="card-content">
            <span>{this.renderSelected()}</span>
            <hr />
            <div className="is-flex is-justify-content-space-between">
              <span>合計: </span>
              <span className="">￥{comma(this.sum())}</span>
            </div>
          </div>
          <button className="button is-medium is-fullwidth is-primary" disabled={this.props.selected.length === 0} onClick={() => this.purchase()}>購 入</button>
        </div>
      </div>
    );
  }
}
