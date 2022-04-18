import React from 'react'
import './CartWidget.css'
import cart from './images/cart.png'

export default function CartWidget() {
  return (
    <img src={cart} className="cart" alt="cart Logo" />
  )
}
