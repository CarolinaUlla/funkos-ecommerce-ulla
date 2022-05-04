import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className='column'>
            <div className='card is-shady'>
                <div className='funko-card'>
                    <img src= {item.image} className="product-image" alt="product Logo" />
                  <p className='subtitle'>{item.title}</p>
                  <p>{item.detail}</p>
                  <p className='product-price tag is-info is-light is-large'>{item.price}</p>
                  <p><Link to= {'/item/' + item.id}>More details</Link></p>
                </div>
            </div>
        </div>
    );
  };
  export default Item;