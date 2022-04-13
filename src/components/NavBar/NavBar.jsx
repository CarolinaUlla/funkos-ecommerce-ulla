import React from 'react';
import './NavBar.css'
import mainLogo from './images/funko.png'

function NavBar(props) {
    return (
        <div className='nav'>
            <div className='logoWrap'>
                <h1 className='title'>
                    FunkoPop!
                </h1>
                <img src={mainLogo} className="mainLogo" alt="logo" />
            </div>
            <div className='list'>
                <a href='#'>Funko large</a>
                <a href='#'>Funko medium</a>
                <a href='#'>Funko key chain</a>  
            </div>  
        </div>
    );
}

export default NavBar;