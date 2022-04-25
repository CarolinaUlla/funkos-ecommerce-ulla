import React, { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState (initial);

    const handlePlusButton = () => {
            if (count >= stock) {
                console.log('no hay mas stock disponible')
                return;
              }
            setCount(count + 1)
        }
        const handleMinusButton = () => {
            if (count === 0) {
                return;
              }
            setCount(count - 1)
          }
    return (
        <>
        <div className='icons'>
        <p className='minus' onClick={(handleMinusButton)}> - </p>
        <p className='number'>{count}</p>
        <p className='plus' onClick={(handlePlusButton)} > + </p>
    </div>
    <div>
    <button className='addItem' onClick={() => onAdd()}>Agregar al carrito</button>
    </div>
    </>
    );
}

export default ItemCount;





