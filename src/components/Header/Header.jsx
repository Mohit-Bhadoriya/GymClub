import React from 'react'
import './Header.css';
import Logo from '../../assets/Logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li><AnchorLink href='#Home' className='scroll'>Home</AnchorLink></li>
            <li><AnchorLink href='#programs' className='scroll'>Programs</AnchorLink></li>
            <li><AnchorLink href='#Reasons' className='scroll'>Why us</AnchorLink></li>
            <li><AnchorLink href='#Plans' className='scroll'>Plans</AnchorLink></li>
            <li><AnchorLink href='#Testimonilas' className='scroll'>Testimonilas</AnchorLink></li>
        </ul>
    </div>
  )
}
export default Header;