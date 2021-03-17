import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <NavLink to='technology' activeStyle={{ color: 'red' }}>
                Technologie
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
