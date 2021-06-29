import React from 'react';
// import './Products.css';

import { Product } from './Product'
import { ProductListProp } from './type/type';

export class Products extends React.Component<ProductListProp> {
  constructor(props: ProductListProp) {
    super(props)

  }

  render() {
    return (
      <div>
        <main>
          <div >
            {this.props.items[0].name}
            <Product />
          </div>
        </main>
      </div>
    );
  }
}
