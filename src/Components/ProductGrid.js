import React, { Component } from 'react';
// import Products from '../products.json';
import Img from 'react-image';
import './ProductGrid.css';
//import fallBack from '../Assets/no-image.jpg'
//import { Container, Row } from 'react-bootstrap';



class ProductGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="wrapper">
       {this.props.products.map((productDetail, index)=>{
         return <div className="item"> 
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
