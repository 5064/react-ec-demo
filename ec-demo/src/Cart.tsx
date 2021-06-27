import React from 'react';
// import './Products.css';

export class Cart extends React.Component {
prop = {selected: [0]};
  sum(){
    return 0
  }
  render(){
    return (
    <div className="box is-fullwidth is-size-5">
      <div className="card-header">
        <div className="card-header-title">現在のカート</div>
      </div>
      <div className="card-content">
        <span>item#1</span>
        <hr/>
        <div className="is-flex is-justify-content-space-between ">
          <span>合計: </span>
          <span className="">￥{this.sum()}</span>
        </div>
      </div>
      <button className="button is-medium is-fullwidth is-primary">購 入</button>
    </div>
  );
  }
}
