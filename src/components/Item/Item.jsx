import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import CartContext from '../../context/cartContext';
import './Item.css'

const Item = ({ item }) => {
    const cartCtx = useContext(CartContext);
    return (
        <div className='column'>
            <div className='card is-shady'>
                <div className='funko-card'>
                    <Bubble isButton onBubbleClick={() => cartCtx.addProduct({quantity: 1, ...item}, item.stock)}>+</Bubble>
                    <img src= {item.image} className="product-image" alt="product Logo" />
                    <p className='subtitle'>{item.title}</p>
                    <p>{item.detail}</p>
                    <p className='product-price tag is-info is-light is-large'>${item.price}</p>
                    <p><Link to= {'/item/' + item.id}>More details</Link></p>
                </div>
            </div>
        </div>
    );
  };
  export default Item;