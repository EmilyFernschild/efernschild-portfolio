

function Header(){
    return(
        <div>
            <nav>
                <a href='/'>
                    <img src='' alt='logo-img'/>
                </a>
                <ul className="header-links"> 
                    <li className='link-li'>
                        <a href='/'>Home</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#about'>About</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#skills'>Skills</a>
                    </li>   
                    <li className='link-li'>
                        <a href='#demo'>Demos</a>
                    </li>   
                </ul>
            </nav>
        </div>
    )
}

export default Header;