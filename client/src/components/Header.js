import { useState } from 'react';
import logo from './images/ef_logo.png';

function Header(){
    const [fix, setFix] = useState(false);

    function setFixed(){
        if (window.scrollY >= 10){
            setFix(true)
        }else {
            setFix(false)
        }
    }
    window.addEventListener('scroll',setFixed)
    return(
        <header className='header'>
            <nav className={fix ? 'navbar' : 'navbar-fix'}>
                <a href='/'>
                    <img className='logo' src={logo} alt='logo-img'/>
                </a>
                <ul className="header-links"> 
                    <li className='link-li'>
                        <a href='/'>Home</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#about'>About</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#demo'>Demos</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#skills'>Skills</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#footer'>Contact</a>
                    </li>   
                </ul>
            </nav>
        </header>
    )
}

export default Header;