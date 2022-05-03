import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, title, image, detail, price }) => {
    return (
        <div className="column is-3">
            <div className='card is-shady'>
                <div className='funko-card'>
                    <img src= {image} className="product-image" alt="product Logo" />
                  <p className='subtitle'>{title}</p>
                  <p>{detail}</p>
                  <p className='product-price tag is-info is-light is-large'>{price}</p>
                  <Link to= {'/item/' + id}>Ver detalle</Link>
                </div>
            </div>
        </div>
    );
  };
  export default Item;