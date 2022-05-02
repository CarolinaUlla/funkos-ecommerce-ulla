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
        <div className='count-table'>
          <div className='icons'>
            <p className='minus button' onClick={(handleMinusButton)}> - </p>
            <p className='number'>{count}</p>
            <p className='plus button' onClick={(handlePlusButton)} > + </p>
          </div>
        <div>
        <button className='addItem button is-primary is-medium' onClick={() => onAdd()}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;





