import React from 'react';
import Alogo from './assets/angular_logo.svg'
import Rlogo from './assets/logo_react.svg'

import { AppState } from './type/type';

export class ProductComponent extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props)
  }

  renderAddToCartButton() {
    if (this.props.isItemInCart()) {
      return (
        <span className="icon-text">数量を更新
          <span className="material-icons mx-1">refresh</span>
        </span>
      )
    } else {
      return (
        <span className="icon-text">カートに追加
          <span className="material-icons mx-1">add_shopping_cart</span>
        </span>
      )
    }
  }
  render() {
    return (
      <div className="card p-2 mx-2 mb-2">
        <figure className="image is-4by3 has-background-info-light">
          <img src={this.props.item.imgSrc} />
        </figure>
        <div className="card-content">
          <div className="has-text-weight-semibold is-size-5">
            {this.props.item.name}
          </div>
          <div className="is-size-5">
            ￥{this.props.item.price}
          </div>
        </div>
        <div className="is-flex is-justify-content-space-between">
          <div className="field has-addons">
            <p className="control">
              <button className="button is-info" disabled={this.props.quantity === 0} onClick={this.props.decrementQuantity}>
                <span className="material-icons is-size-5">remove</span>
              </button>
            </p>
            <p className="control">
              <input className="input Product-input" type="text" inputMode="numeric" pattern="\d*" min="0" value={this.props.quantity} />
            </p>
            <p className="control">
              <button className="button is-info" disabled={this.props.quantity === this.props.MAX_QUANTITY} onClick={this.props.incrementQuantity}>
                <span className="material-icons is-size-5">add</span>
              </button>
            </p>
          </div>
          <div>
            <button className="button is-info" disabled={this.props.quantity === 0} onClick={this.props.addToCart}>
              {this.renderAddToCartButton()}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
