import React from 'react';
import './ItemDetail.css';
import Img from 'react-image';
import fallBack from '../Assets/fender.jpg'


//dumb component to show individual item's details

const ItemDetail = ({ handleClose, show, name, pic, type, brand, color, productNumber }) => {
  const showHideClassName = show ? "item display-block" : "item display-none";
  return (
    <div className={showHideClassName}>
      <section className="item-main">
        <p><b>{name}</b></p>
        <Img src={ [pic, fallBack] }
        />
       <p><b>Brand: </b>{brand}</p>
       <p><b>Category:</b> {type}</p>
       <p><b>Color:</b> {color} </p>
       <p><b>Product Number:</b> {productNumber} </p>
        <button className="close_button" onClick={handleClose}>Back to Products</button>
      </section>
    </div>
  );
};

export default ItemDetail;