import React from "react"
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
 
function ItemDetail ({item}) {

    const [totalProducts, setTotalProducts] = useState (null);
    
    function addHandler (quantityToAdd){
        setTotalProducts (quantityToAdd);
        console.log('item agregado');
    }
    return (
     <div className="detail-product">
            <div className='card is-shady'>
                <img src={item?.image} className='funkoImage' alt='funko'></img>
                <div>
                    <p className="subtitle">{item?.title}</p>
                    <p>{item?.detail}</p>
                    <p className="tag is-info">{item?.price}</p>
                    <p className="tag is-info is-light is-large" id="more-info">{item?.moreInfo}</p>
                    <div className="count-container">
                        {totalProducts ?
                        <button className= "buy button is-primary is-medium"><Link to='/cart'>Review and Payment ({totalProducts} Funkos)</Link></button> :
                        <ItemCount stock={item.stock} initial={0} onAdd={addHandler}></ItemCount>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail