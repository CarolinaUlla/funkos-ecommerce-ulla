import React from 'react';
import './Item.css'

const Item = ({ title, image, detail, price }) => {
    return (
    <div className='product'>
        <p className='product-name'>{title}</p>
        <img src= {image} className="product-image" alt="product Logo" />
        <p className='product-detail'>{detail}</p>
        <p className='product-price'>{price}</p>
    </div>
    );
  };
  export default Item;