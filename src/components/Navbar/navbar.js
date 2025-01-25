import React from 'react'
import styles from './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Logo'>
        <img src="./pictures/logo.png" alt=""className='logo'/>
      </div>
      <div className='Projects'>
      <a>Projects</a>   <a>Contact</a>
      </div>
      {/* <div className='Contact'>
      <a>Contact</a>
      </div> */}
    </div>
  )
}

export default Navbar