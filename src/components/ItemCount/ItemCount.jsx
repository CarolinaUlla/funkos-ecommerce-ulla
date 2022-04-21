import React, {useState} from 'react';
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


function ItemCount ({stock}) {
    const [count, setCount] = useState(0);
    stock = 5;
    const handleClick1 = () => {
        if (count >= stock) {
            console.log('no hay mas stock disponible')
            return;
          }
        setCount(count + 1)
    }
    const handleClick2 = () => {
        if (count === 0) {
            return;
          }
        setCount(count - 1)
      }
      function onAdd (count){
          if (count > stock) {
            return;
        }
          console.log(`${count} item/s agregado/s`)

      }

    return (
        <>
        <div className='icons'>
            <FontAwesomeIcon icon={faMinus} className='minus'  onClick={(handleClick2)}/>
            <p className='number'>{count}</p>
            <FontAwesomeIcon icon={faPlus} className='plus' onClick={(handleClick1)}/>
        </div>
        <div>
            <button className='addItem'onClick={()=> onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
        </>
    );
}

export default ItemCount;





