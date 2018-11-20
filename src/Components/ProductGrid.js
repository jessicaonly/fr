import React, { Component } from 'react';
import Products from '../products.json';

class ProductGrid extends Component {
  render() {
    return (
      <div>
       <h1>Hello World!</h1>
       {Products.documents.map((productDetail, index)=>{
         return <div> 
           <h1>{productDetail.productNo}</h1>
           <img src={productDetail.images[1]}/>
           <p>{productDetail.skuDisplayName_en[0]}</p>
         </div>
       })}
      </div>
    );
  }
}

export default ProductGrid;
