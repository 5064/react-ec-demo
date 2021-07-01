import React from 'react';
import logo from './assets/angular_logo.svg'
import './Products.css';

export class Product extends React.Component<any> {
  render() {
    return (

      <div className="card p-2">
        <figure className="image is-4by3 has-background-info-light">
          <img src={logo} />
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
            <a className="button">
              <span className="material-icons is-size-5">remove</span>
            </a>
          </p>
          <p className="control">
            <input className="input Product-w-50px" type="text" inputMode="numeric" pattern="\d*" min="0" />
          </p>
          <p className="control">
            <button className="button" >
              <span className="material-icons is-size-5">add</span>
            </button>
          </p>
        </div>
        <div>
          <button className="button is-link">
            <span className="icon-text">カートに追加
              <span className="material-icons mx-1">add_shopping_cart</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
