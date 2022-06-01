import React, { useContext } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'
 
function ItemDetail ({item}) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    return (
    <div className="detail-product">
        <div className='card is-shady column'>
            <img src={item?.image} className='funkoImage' alt='funko'></img>
            <div>
                <p className="subtitle">{item?.title}</p>
                <p>{item?.detail}</p>
                <p className="tag is-info">${item?.price}</p>
                <p className="tag is-info is-light is-large" id="more-info">{item?.moreInfo}</p>
            </div>
        </div>
        <div className="count-container column">
            <ItemCount stock={item.stock} initial={0} onAdd={addHandler}></ItemCount>
            {cartCtx.products.length &&
            <button className='buy button is-primary is-medium' onClick={() => console.log(cartCtx)}>
                <Link to='/cart'>
                    Review and Payment ({ cartCtx.getCartQuantity() } Funkos)
                </Link>
            </button>
            }
        </div>
    </div>
    )
}

export default ItemDetail