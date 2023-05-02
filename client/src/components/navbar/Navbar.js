import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../../assets/images/logo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#">Graveyard</a></p>
    <p><a href="#">Mausoleum</a></p>
    <p><a href="#">Forest</a></p>
  </>
);

const Navbar = () => {

  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/main');
  };


  return (
    <div className='skullz__navbar'>
      <div className='skullz__navbar-links'>
        <div className='skullz__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='skullz__navbar-title'>
          <p><a onClick={handleButtonClick}>SKULLZ GAMZ</a></p>
        </div>
        <div className='skullz__navbar-links_container'>
          <Menu />
        </div>
        <div className='skullz__navbar-links-connect-wallet'>
          <button type='button'>CONNECT WALLET</button>
        </div>
      </div>
    </div>

  );

};

export default Navbar;
