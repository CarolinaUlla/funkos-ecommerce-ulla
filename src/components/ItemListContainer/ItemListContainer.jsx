import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemListContainer({greeting}) {
  function cart (){
    console.log('item agregado');
};
  return (
  <>
  <div className='greeting'>
    <p>{greeting}</p>
    </div>
    <ItemCount stock={5} initial={0} onAdd={cart}></ItemCount>
  </>
  )
}
