import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

//show  menu when clicked on hamburger

export default function Navbar() {
  const [burger, setBurger] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleOnClick = () => {
    setSidebar(!sidebar);
    setBurger(!burger);
  };

  const slideNav = () => {};

  return (
    <nav className='nav-container'>
      <div
        className={burger ? 'burger active' : 'burger '}
        onClick={handleOnClick}
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      <ul className={sidebar ? 'sidebar active' : 'sidebar'}>
        <li onClick={handleOnClick}>
          <NavLink
            to='/business'
            className='link'
            activeClassName='link-selected'
          >
            Biznes
          </NavLink>
        </li>
        <li onClick={handleOnClick}>
          <NavLink
            to='/health'
            className='link'
            activeClassName='link-selected'
          >
            Zdrowie
          </NavLink>
        </li>
        <li onClick={handleOnClick}>
          <NavLink
            to='/technology'
            className='link'
            activeClassName='link-selected'
          >
            Technologie
          </NavLink>
        </li>
        <li onClick={handleOnClick}>
          <NavLink
            to='/articles-for-later'
            className='link'
            activeClassName='link-selected'
          >
            Artykuły zapisane
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
