import React from 'react';
import "./Cart.css"
import { comma } from './const/util';
import { AppState } from './type/type'
import Rlogo from './assets/react_logo.svg'

export class CartItemComponent extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div className="is-flex is-justify-content-space-between">
        <div className="CartItem-grid-wrapper">
          <span className="CartItem-remove-button material-icons is-clickable has-text-danger" onClick={this.props.removeFromCart}>cancel</span>
          <figure className="CartItem-thumbnail image has-background-info-light mx-1">
            <img src={Rlogo} />
          </figure>
          <span>{this.props.item.name}</span>
          <span className="is-size-6">数量: {this.props.item.quantity}</span>
        </div>
        <span className="">￥{comma(this.props.item.quantity * this.props.item.price)}</span>
      </div>
    );
  }
}
