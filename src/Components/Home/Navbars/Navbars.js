import React, { useState } from 'react';
import './Navbars.css'

const Navbars = () => {

    const [active,setActive] = useState('meainMenu')
    const [toggleIcon,setToggleIcon] = useState('hamburger')

    const hamburgerToggle = ()=>{
        active === 'meainMenu' ? setActive('meainMenu active') : setActive('meainMenu')
        toggleIcon === 'hamburger' ? setToggleIcon('toggle') : setToggleIcon('hamburger')
    }

    return (
        <nav>
            <div className='logo'>
                <h4>Logs</h4>
            </div>
                <ul className={active}>
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfollio</a></li>
                </ul>
            <div className={toggleIcon} onClick={hamburgerToggle}>
                <sapn className='bar'></sapn>
                <sapn className='bar'></sapn>
                <sapn className='bar'></sapn>
            </div>
        </nav>
    );
};

export default Navbars;