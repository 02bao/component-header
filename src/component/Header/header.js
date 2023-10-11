import React from 'react';
import Logo from './Logo/logo';
import Navigation from './Navigation/navigation';

import Cart from './Cart/cart';
import './header.css';
import Research from './Research/research';

function Header() {
  return (
    <div className="header">
      <Logo/>
      <Navigation/>
      <Research/>
      <Cart/>
    </div>
  );
}

export default Header;
