import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer({greeting}) {
  return (
    <div>
        <p className='greeting'>{greeting}</p>
    </div>
  )
}
