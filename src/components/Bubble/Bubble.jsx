import React from 'react';
import './Bubble.css'

function Bubble({ children, isButton, onBubbleClick, stock }) {
  return (
    <div
      className={`bubble ${isButton ? 'bubble-button' : ''}`}
      onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
  )
}

export default Bubble 