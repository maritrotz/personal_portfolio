import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'



function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize',showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
                    Kamari Trotz
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div className='nav-items'>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onClick={closeMoblieMenu}>
                            Work
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/aboutme' className='nav-links' onClick={closeMoblieMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <a 
                        href='Images/KTrotz Technical Resume 2024 (3).pdf' 
                        className='nav-links' 
                        onClick={closeMoblieMenu} 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        Resume
                    </a>
                    </li>
                </ul>
                </div>
                <ul className="social-media-links">
                        <Link to="https://github.com/maritrotz" className="navbar-socialmedia" onClick={closeMoblieMenu}>
                            <i className="fab fa-github" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/kamari-trotz/" className="navbar-socialmedia" onClick={closeMoblieMenu}>
                            <i className="fa-brands fa-linkedin" />
                        </Link>
                        <Link to="mailto:maritrotz@gmail.com" className="navbar-socialmedia" onClick={closeMoblieMenu}>
                            <i className="fa-solid fa-envelope" />
                        </Link>
                    </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar