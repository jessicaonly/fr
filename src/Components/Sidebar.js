import React, { Component } from 'react';
import './Sidebar.css';

//component to show sidebar with different categories/filters

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [],
      productType: [],
    };
  }
  //push series and product type from JSON to this component's state, to render onto DOM
  componentWillMount(){
    this.props.products.map((singleProduct, index) => {
      return this.state.series.indexOf(singleProduct.series) === -1 ? 
        this.state.series.push(singleProduct.series) : null;
    });
    
    this.props.products.map((singleProduct, index) => {
      return this.state.productType.indexOf(singleProduct.productType) === -1 ? 
        this.state.productType.push(singleProduct.productType) : null;
    });
  
  }
 
  render() {
    return (
      <div className="sidebar_wrapper">
        <div className="series">
          <b>SERIES</b>
          {"\n"}
          {this.state.series.map((seriesName, index)=>{
            return <div className="individualSeries">
              <button
                name={seriesName}
                onClick={this.props.seriesHandler}
                 > {seriesName}</button>
            </div>
          })}
        </div>

        <div className="product_type">
          <b>PRODUCT</b>
          {"\n"}
          {this.state.productType.map((product, index)=>{
            return <div className="products"> 
              <button 
                name={product}
                onClick={this.props.productTypeHandler}
                >{product} </button>
         </div> 
        })}
       </div>

       <div className ="show_all">
       <button 
                name='showAll'
                onClick={this.props.productTypeHandler}
                > Show All </button>
       </div>
    </div>
    );
  }
}



export default SideBar;



