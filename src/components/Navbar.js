import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <div>
          <NavLink to='/'>Najważniejsze wiadomości z Polski</NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to='/business' activeStyle={{ color: 'red' }}>
                Biznes
              </NavLink>
            </li>
            <li>
              <NavLink to='/health' activeStyle={{ color: 'red' }}>
                Zdrowie
              </NavLink>
            </li>
            <li>
              <NavLink to='/technology' activeStyle={{ color: 'red' }}>
                Technologie
              </NavLink>
            </li>
            <li>
              <NavLink to='/articles-for-later' activeStyle={{ color: 'red' }}>
                Artykuły zapisane
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
