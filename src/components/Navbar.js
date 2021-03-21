import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  const text = `Najważniejsze\nWiadomości\nZ Polski`;

  return (
    <header>
      <div className='container'>
        <div>
          <NavLink className='link' activeClassName='link-selected' to='/'>
            {text}
          </NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink
                to='/business'
                className='link'
                activeClassName='link-selected'
              >
                Biznes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/health'
                className='link'
                activeClassName='link-selected'
              >
                Zdrowie
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/technology'
                className='link'
                activeClassName='link-selected'
              >
                Technologie
              </NavLink>
            </li>
            <li>
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
      </div>
    </header>
  );
}
