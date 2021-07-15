import React from 'react';
import Nav from '../navigation/Nav';

import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Site Name</h1>
    <Nav />
  </header>
);

export default Header;