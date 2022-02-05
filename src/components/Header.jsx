import React from 'react';
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
  return ( 
  <div className="header">
      <div className="logoContainer">
          <img src={punkLogo} alt="" className='punkLogo' />
      </div>

      <div className="searchBar">
        <div className='searchIconContainer'>
            <img src={searchIcon} alt="" />
        </div>
        <input placeholder='Collection, item or user...' className="searchInput" />
      </div>


      <div className='headerItems'>
        <p>About</p>
        <p>Marketplace</p>
      </div>


      <div className='headerActions'>
        <div className='themeSwitchContainer'>
            <img src={themeSwitchIcon} alt='' />
        </div>
      </div>


      <div className='loginButton'>
        <button class="btn-hover color-1">GET IN</button>
      </div>


  </div>);
};

export default Header;
