import React, { Component } from 'react';
import './Sidebar.css';


class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [],
      productType: [],
    };
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
              <button
                name={seriesName}
                onClick={this.props.seriesHandler}
                 > {seriesName}</button>
            </div>
          })}
        </div>

        <div className="product_type">
          <b> Product Type: </b>
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



