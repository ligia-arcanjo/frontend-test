import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Films</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </header>
  );
}

export default Header;
