import React, { Component } from 'react';
import Products from '../products.json';
import Img from 'react-image';
import fallBack from '../Assets/no-image.jpg'

class ProductGrid extends Component {

  render() {
    return (
      <div>
       <h1>Hello World!</h1>
       {Products.documents.map((productDetail, index)=>{
         return <div> 
           <h1>{productDetail.productNo}</h1>
           <Img src={
             [productDetail.images[1],
             'http://sanpai-japan.com/wp-content/uploads/2017/06/no-image-icon-24.jpg']
            }
            />
           <p>{productDetail.skuDisplayName_en[0]}</p>
         </div>
       })}
      </div>
    );
  }
}

export default ProductGrid;
