import React from 'react';
import './Nav.css';
import NavItem from './navItem';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="Header-Container">
      <h1 className="Logo">
        <Link to="/">Wanderlust</Link>
      </h1>
      <nav>
        <NavItem />
      </nav>
    </header>
  );
}

export default Navbar;
