import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

function Header() {
  return (
    <header>
      <img className="logo-ghibli" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo studio ghibli" />

      <div className="nav-component">
        <Link className="nav-link" to="/">Films</Link>
        <Link className="nav-link" to="/people">People</Link>
        <Link className="nav-link" to="/locations">Locations</Link>
      </div>
    </header>
  );
}

export default Header;
