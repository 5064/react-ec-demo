import React from 'react';
import Alogo from './assets/angular_logo.svg'
import Rlogo from './assets/react_logo.svg'

import { AppState } from './type/type';

export class ProductComponent extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="card p-2">
        <figure className="image is-4by3 has-background-info-light">
          <img src={this.props.id % 12 === 0 ? Alogo : Rlogo} />
        </figure>
        <div className="card-content">
          <div className="has-text-weight-semibold is-size-5">
            {this.props.name}
          </div>
          <div className="is-size-5">
            ￥{this.props.price}
          </div>
        </div>
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
          <button className="button is-link" disabled={this.props.quantity === 0} onClick={this.props.addToCart}>
            <span className="icon-text">カートに追加
              <span className="material-icons mx-1">add_shopping_cart</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
