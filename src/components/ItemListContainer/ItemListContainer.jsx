import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemListContainer({greeting}) {
  return (
  <>
  <div className='greeting'>
    <p>{greeting}</p>
    </div>
    <ItemCount></ItemCount>
  </>
  )
}
