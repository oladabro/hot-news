import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';
import { FaReact } from 'react-icons/fa';

export default function Header() {
  const text = `Najważniejsze
  Wiadomości\nZ Polski`;

  return (
    <header>
      <div className='container'>
        <div>
          <NavLink className='link' activeClassName='link-selected' to='/'>
            <FaReact className='react-icon' />
            {text}
          </NavLink>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
