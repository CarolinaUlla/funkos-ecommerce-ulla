import React, { useContext } from 'react';
import CartContext from '../../context/cartContext.js';
import Bubble from '../Bubble/Bubble';
import './CartItem.css';


function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
        <div className='cart-item is-shady'>
          <div className='bubble-quantity'>
            <Bubble>{ item?.quantity }</Bubble>
          </div>
          <div className='cart-img-container'>
            <img src={ item?.image } alt="Imagen del producto" />
          </div>
          <p>{ item?.title }</p>
          <p>${ item?.price }</p>
          <div className='bubble-close'>
          <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
        </div>
        </div>
    </>
  )
}

export default CartItem 