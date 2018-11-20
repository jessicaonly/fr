import React, { Component } from 'react';
import './Sidebar.css';


class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [],
      productType: []
    }
  }

  componentWillMount(){
    this.props.products.map((singleProduct, index) => {
      if (this.state.series.indexOf(singleProduct.series) === -1){
        this.state.series.push(singleProduct.series);
      }
    });
    
    this.props.products.map((singleProduct, index) => {
      if (this.state.productType.indexOf(singleProduct.productType) === -1){
        this.state.productType.push(singleProduct.productType);
      }
    });
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        <div className="header">
          <h2> Filter </h2>
        </div>
        <div className="series">
          <b>Series:</b>
          {"\n"}
          {this.state.series.map((seriesName, index)=>{
            return <div className="individualSeries">
              <label>
              {seriesName}
              <input
                name={seriesName}
                type="checkbox"
                onChange={this.props.seriesHandler} />
              </label>
            </div>
          })}
        </div>

        <div className="product_type">
          <b> Product Type: </b>
          {"\n"}
          {this.state.productType.map((product, index)=>{
            return <div className="products"> 
              <label>
              {product}
              <input 
                name={product}
                type="checkbox"
                onChange={this.props.productTypeHandler} />
            </label>
         </div> 
        })}
       </div>
    </div>
    );
  }
}

export default SideBar;



