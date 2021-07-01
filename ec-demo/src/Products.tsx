import React from 'react';
import './Products.css';

import { Product } from './Product'
import { ProductListProp } from './type/type';

export class Products extends React.Component<ProductListProp> {
  constructor(props: ProductListProp) {
    super(props)

  }
  renderProducts() {
    const listItems = this.props.items.map((item) => <Product key={item.id} id={item.id} name={item.name} price={item.price} />);
    return listItems
  }

  render() {
    return (
      <div className="Products-wrapper">
        {this.renderProducts()}
      </div>
    );
  }
}
