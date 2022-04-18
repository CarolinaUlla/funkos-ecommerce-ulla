import React from 'react';
import './NavBar.css'
import mainLogo from './images/funko.png'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div className='nav'>
            <div className='logoWrap'>
                <h1 className='title'>
                    FunkoPop!
                </h1>
                <img src={mainLogo} className="mainLogo" alt="logo" />
            </div>
            <ul className='list'>
                <li><a href='#'>Funko large</a></li>
                <li><a href='#'>Funko medium</a></li>
                <li><a href='#'>Funko key chain</a></li>  
                <li><CartWidget/></li>
            </ul>
            
        </div>
    );
}

export default NavBar;