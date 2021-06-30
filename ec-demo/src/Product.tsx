import React from 'react';
import logo from './assets/logo.svg'
// import './Products.css';

export class Product extends React.Component<any> {
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <figure className="image is-4by3 has-background-info-light">
            <img src={logo} />
          </figure>
          <div className="card-content">
            <div className="title is-3">
              {this.props.name}
            </div>
            <div className="">
              ￥{this.props.price}
            </div>
          </div>
          <div>
            <button className="button is-link">
              <span className="icon-text">カートに追加
                <span className="material-icons mx-1">add_shopping_cart</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
