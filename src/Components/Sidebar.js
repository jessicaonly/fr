import React, { Component } from 'react';
import Img from 'react-image';
import './ProductGrid.css';


class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="wrapper">
        Hi! This is the Sidebar!
      </div>
    );
  }
}

export default Sidebar;