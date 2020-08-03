import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';



const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>CryptoDash</h1>
      <ul>
        <li><Link to="/CoinList">Coins</Link></li>
        <li><Link to="/News">News</Link></li>
     	</ul>
      <hr />
    </nav>
  );
};

export default NavBar;