import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../context/cartContext';

import './Cart.css'

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
      {cartCtx.products.length !== 0 ?
        <div className='total-container'>
          <p>Total price: ${cartCtx.getTotalPrice()}</p>
          <button className='button is-primary is-large'>Finish buying</button>
        </div> :
        <>
          <h2 className='title'>No items selected to buy</h2>
          <button className='button is-primary is-large'>
            <Link to='/'>Return to shop</Link>
          </button>
        </>
      }
    </div>
  )
}

export default Cart