import React, { Component } from 'react';
import ProductGrid from './Components/ProductGrid';
import Products from './products.json';
import SideBar from './Components/SideBar';
import './App.css';
import logo from './Assets/logo.png';
import footer from './Assets/footer.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products: Products.documents,
      itemChecked: {}
    }

    this.seriesHandler = this.seriesHandler.bind(this);
    this.productTypeHandler = this.productTypeHandler.bind(this);
  }

  seriesHandler(e){
    e.preventDefault();
    const target = e.target;
    let filteredProducts = [];
    let fullProductList = Products.documents;

    fullProductList.map((singleProduct, index) => {
      if (singleProduct.series === target.name){
       filteredProducts.push(singleProduct);
      }
    });
    this.setState({
      products: filteredProducts
    });
  }

  productTypeHandler(e){
    e.preventDefault();
    const target = e.target;
    let filteredProducts = [];
    let fullProductList = Products.documents;

    if (target.name ==='showAll') {
      this.setState({products: fullProductList})
      return;
    };

    fullProductList.map((singleProduct, index) => {
      if (singleProduct.productType === target.name){
       filteredProducts.push(singleProduct);
      }
    });
    this.setState({
      products: filteredProducts
    });
  }


  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <a className="logo" href="http://www.fender.com"> <img src={logo} alt='Fender Logo'/></a>
          <div className="header-right">
          <a className="shop" href="https://shop.fender.com/en-US/start">SHOP </a>
          <a className="play" href="https://www.fender.com/play">PLAY </a>
          <a className="tine" href="https://www.fender.com/online-guitar-tuner/">TUNE </a>
          <a className="tone" href="https://www.fender.com/tone">TONE</a>
          </div>
        </div>
        <div className="side_bar">
         <SideBar seriesHandler={this.seriesHandler} productTypeHandler={this.productTypeHandler} products={this.state.products} />
        </div>
        <div className="product_grid">
         <ProductGrid products={this.state.products} />
        </div>
        <div className="footer">
          <img src={footer} alt='Fender Logo'/>
        </div>
      </div>
    );
  }
}

export default App;
