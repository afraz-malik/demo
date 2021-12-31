import React from 'react'
import NavbarCss from './Navbar.module.scss'
const Navbar = () => {
  return (
    <div className={NavbarCss.navbar}>
      <div className={NavbarCss.search}>
        <input type="text" placeholder="Search" />
        <img alt="" src="images/search.png" />
      </div>
      <div className={NavbarCss.actions}>
        <img src="images/user.png" alt="" />
        <img src="images/message.png" alt="" />
        <img src="images/bell.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar
