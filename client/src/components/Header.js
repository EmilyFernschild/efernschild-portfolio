import logo from './images/ef_logo.png';

function Header(){
    return(
        <header className='header'>
            <nav className='navbar'>
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