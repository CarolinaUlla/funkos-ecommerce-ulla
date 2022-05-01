import React from 'react';
import './NavBar.css'
import mainLogo from './images/funko.png'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <h1 className='name'> FunkoPop!</h1>
        <img src={mainLogo} className="mainLogo" alt="logo" />
        <a onClick={() => { setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Funko Large
            </a>
            <a href='/' className='navbar-item'>
              Funko Medium
            </a>
            <a href='/' className='navbar-item'>
              Funko Key Chain
            </a>
            <CartWidget className='navbar-item cartWidget'></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;