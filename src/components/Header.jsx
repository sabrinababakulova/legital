import React, { useState, useEffect } from 'react';
import Languages from './UI/Languages';
import './Header.sass';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = scrolled ? 'scrolled' : '';

    const [burgerIsOpen, setBurgerIsOpen] = useState(false)
    const links = [
        {
            index: "about",
            title: "О нас",
            link: "#about"
        },
        {
            index: "services",
            title: "Услуги",
            link: "#services"
        },
        {
            index: "team",
            title: "Команда",
            link: "#team"
        },
        {
            index: "reviews",
            title: "Отзывы",
            link: "#reviews"
        },
        {
            index: "contacts",
            title: "Контакты",
            link: "#contacts"
        },
    ]
    
    return (
        <header className={`header ${headerClass}`}>
          <div className="header-box container">
            <div className="header-items">
            <div className="header-item">
                <a href='' className="header-logo">
                    <div className="main-logo">
                        <i className='icon-main-logo'></i>
                    </div>
                    <div className="logo-text">
                        <i className='icon-logo-heading'></i>
                        <i className='icon-logo-text'></i>
                    </div>
                </a>
            </div>
            <div className="header-item">
                <nav className={`nav ${burgerIsOpen ? "active-menu" : ""}`}>
                    <div className="nav-container">
                        <div className="nav-box">
                            <a href='' className="header-logo">
                                <div className="main-logo">
                                    <i className='icon-main-logo'></i>
                                </div>
                                <div className="logo-text">
                                    <i className='icon-logo-heading'></i>
                                    <i className='icon-logo-text'></i>
                                </div>
                            </a>
                            <div className="links">
                            {links.map((item) => (
                                <a key={item.index} href={item.link} className="nav-link">{item.title}</a>
                            ))}
                            </div>
                        </div>
                        <div className="icons-group">
                            <a href='#' className="icon">
                                <i className='icon-telegram'></i>
                            </a>
                            <a href='#' className="icon">
                                <i className='icon-facebook'></i>
                            </a>
                            <a href='#' className="icon">
                                <i className='icon-instagram'></i>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="header-language-switcher">
                    <Languages/>
                </div>
                <div className="burger-btn-container" onClick={()=> setBurgerIsOpen(!burgerIsOpen)}>
                    <div className={`burger-btn ${burgerIsOpen ? "active" : ""}`}>
                        <span></span>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </header>
    );
  }

  export default Header;
