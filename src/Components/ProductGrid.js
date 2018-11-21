import React, { Component } from 'react';
import Img from 'react-image';
import './ProductGrid.css';
import fallBack from '../Assets/fender.jpg'



class ProductGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
    }
  }



  render() {
    return (
      <div className="wrapper">
       {this.props.products.map((productDetail, index)=>{
         return <div className="item"> 
           <h4>{productDetail.skuDisplayName_en[0]}</h4>
           <Img src={
             [productDetail.images[1],
             fallBack]
            }
            />
           <p>{productDetail.productNo}</p>
         </div>
       })}

      </div>
    );
  }
}

export default ProductGrid;
