import React, { Component } from 'react';
import Img from 'react-image';
import './ProductGrid.css';
import fallBack from '../Assets/fender.jpg'
import ItemDetail from './ItemDetail';



class ProductGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      show: false,
    }

    this.showDetail = this.showDetail.bind(this);
  }

  showDetail = (productDetail) => {
    this.setState({
    itemName: productDetail.skuDisplayName_en[0],
    image: productDetail.images[1],
    productType: productDetail.productType,
    brand: productDetail.brand,
    featuredColor: productDetail.color_en[0],
    productNumber: productDetail.productNo,
    show: true
    });
  }

 

  hideDetail = () => {
    this.setState({ show: false });
    console.log(this.state);
  }


  render() {
    return (
      <div className="wrapper">
      <div className="modal">
       <ItemDetail 
        show={this.state.show} 
        handleClose={this.hideDetail} 
        name={this.state.itemName}
        pic={this.state.image}
        type={this.state.productType}
        brand={this.state.brand}
        color={this.state.featuredColor}
        productNumber={this.state.productNumber}
        >
        <p> Test </p>
      </ItemDetail>
       </div>
       
       <div className="product_grid">
       {this.props.products.map((productDetail, index)=>{
         return <div className="each_item" onClick={() => this.showDetail(productDetail)} key={productDetail.productNo}> 
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
      </div>
    );
  }
}

export default ProductGrid;
