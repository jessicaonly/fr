import React, { Component } from 'react';
import ProductGrid from './Components/ProductGrid';
import Products from './products.json';
import SideBar from './Components/SideBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products: Products,
    }

    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  checkboxHandler(e){
    e.preventDefault();
    console.log('hi')
  }


  render() {
    return (
      <div className="wrapper">
        <div className="header">
          Fender
        </div>
        <div className="side_bar">
         <SideBar checkboxHandler={this.checkboxHandler} products={this.state.products} />
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
