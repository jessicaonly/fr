import React, { Component } from 'react';
import ProductGrid from './Components/ProductGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          Fender
        </div>
        <div className="side_bar">
         Hello World!
        </div>
        <div className="product_grid">
         <ProductGrid />
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
