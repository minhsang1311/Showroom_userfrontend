import React from 'react';
import { Link } from 'react-router-dom';
import './css/slider.css';

const Header = () => {
  return (<>
   <div className='header-upper'>
        <div className='logo'><h1>CAR SHOWROOM</h1></div>
      </div>
      <nav className='menu col-5'>
<div className='header-upper-links d-flex align-items-center justify-content-evenly'>
<Link style={{ textDecoration: 'none'}} to='/'><h1>Home</h1></Link>
<Link style={{ textDecoration: 'none'}} to='/order'><h1>Order</h1></Link>
<Link style={{ textDecoration: 'none'}} to='/contact'><h1>Contact</h1></Link>
<Link style={{ textDecoration: 'none'}} to='/login'><h1>Login</h1></Link>
</div>
</nav>
</>
  )
}

export default Header;