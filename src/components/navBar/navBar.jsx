import React, { useState } from 'react';
import '../navBar/navBar.modules.css';
import logo from '../../assets/Untitled__4_-removebg-preview (1).png';
import Contect from '../../assets/chat.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <img src={logo} alt='Logo' className='logo' />
            <div className="desktopMenu">
                <Link to="intro" smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
                <Link to="skills" smooth={true} duration={500} className="desktopMenuListItem">About</Link>
                <Link to="Certificate" smooth={true} duration={500} className="desktopMenuListItem">Certificate</Link>
                <Link to="projects" smooth={true} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
            <Link to="contact" smooth={true} duration={500}><button className="desktopMenuBtn">
                <img src={Contect} alt='' className='desktopMenuImg' />
                Contact Me
            </button></Link>
            <div className="mobileMenuIcon" onClick={toggleMenu}>
                ☰
            </div>
            {isMenuOpen && (
                <div className="mobileMenu">
                    <Link to="intro" smooth={true} duration={500} className="mobileMenuListItem" onClick={toggleMenu}>Home</Link>
                    <Link to="skills" smooth={true} duration={500} className="mobileMenuListItem" onClick={toggleMenu}>About</Link>
                    <Link to="Certificate" smooth={true} duration={500} className="mobileMenuListItem" onClick={toggleMenu}>Certificate</Link>
                    <Link to="projects" smooth={true} duration={500} className="mobileMenuListItem" onClick={toggleMenu}>Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="mobileMenuListItem" onClick={toggleMenu}><button className="mobileMenuBtn">
                        <img src={Contect} alt='' className='mobileMenuImg' />
                        Contact Me
                    </button></Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
