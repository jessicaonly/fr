import React, { Component } from 'react';
import ProductGrid from './Components/ProductGrid';
import Products from './products.json';
import SideBar from './Components/SideBar';
import './App.css';

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
          Fender
        </div>
        <div className="side_bar">
         <SideBar seriesHandler={this.seriesHandler} productTypeHandler={this.productTypeHandler} products={this.state.products} />
        </div>
        <div className="product_grid">
         <ProductGrid products={this.state.products} />
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
