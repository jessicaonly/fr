import React, { Component } from 'react';
import ProductGrid from './Components/ProductGrid';
import Products from './products.json';
import SideBar from './Components/Sidebar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      products: Products,
    }
  }


  render() {
    return (
      <div className="wrapper">
        <div className="header">
          Fender
        </div>
        <div className="side_bar">
         <SideBar />
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
