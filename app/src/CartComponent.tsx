import React from 'react';
import "./Cart.css"
import { CartItemComponent } from './CartItemComponent';
import { comma } from './const/util';
import { AppState, Product } from './type/type'

export class CartComponent extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)
  }
  showSum():string {
    const sum = this.props.selected.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0)
    return sum > 0 ? `￥${comma(sum)}` : "---"
  }
  purchase() {
    return;
  }
  renderItems() {
    if (this.props.selected.length === 0) {  // when cart is empty
      return (
        <span className="has-text-grey">
          お客様のカートに商品はありません。
        </span>
      )
    } else {
      const items = this.props.selected.map((item: any) =>
        <CartItemComponent key={item.id} item={item} removeFromCart={()=>this.props.removeFromCart(item.id)}/>
      )
    return (
      <div >
        {items}
      </div>
    );
    }
  }
  render() {
    return (
      <div className="Cart-is-fixed Cart-width-available">
        <div className="box is-size-5 mx-2">
          <div className="card-header">
            <div className="card-header-title">現在のカート</div>
          </div>
          <div className="card-content">
            <span>{this.renderItems()}</span>
            <hr />
            <div className="is-flex is-justify-content-space-between">
              <span className="is-align-self-center">合計: </span>
              <span className="is-size-3">{this.showSum()}</span>
            </div>
          </div>
          <button className="button is-medium is-fullwidth is-primary" disabled={this.props.selected.length === 0} onClick={() => this.purchase()}>購 入</button>
        </div>
      </div>
    );
  }
}
