import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import mainLogo from './images/funko.png'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <h1 className='name'> FunkoPop!</h1>
        <Link to= {'/'}> 
        <img src={mainLogo} className="mainLogo" alt="logo" />
        </Link>
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
          <li className='navbar-item'><NavLink to='/category/funkoLarge' className={nav => nav.isActive ? 'nav-active' : ''}>Funko Large</NavLink></li>
          <li className='navbar-item'><NavLink to='/category/funkoMedium' className={nav => nav.isActive ? 'nav-active' : ''}>Funko Medium</NavLink></li>
          <li className='navbar-item'><NavLink to='/category/funkoKeyChain' className={nav => nav.isActive ? 'nav-active' : ''}>Funko Key chain</NavLink></li>
            <CartWidget className='navbar-item cartWidget'></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;