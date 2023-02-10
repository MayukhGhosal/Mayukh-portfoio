import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/Img.jpeg'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <>
     <div className = "Navbar">
     <Link to='/'>
     <div style={{
      display: 'flex',
     }}>
      
     <img src={img} className='image' />
      <p className='pTag'>Mayukh Ghosal</p>
      
      </div>
      </Link>

      <Link to='/contact'>
      <p className='pTag'>Contact</p>
      </Link>

      <Link to='/education'>
      <p className='pTag'>Education</p>
      </Link>
      <Link to='/skills'>
      <p className='pTag'>Skills</p>
      </Link>
      <Link to='/about'>
      <p className='pTag'>About</p>
      </Link>
      <Link to='/'>
      <p className='pTag'>Home</p>
      </Link>
     </div>
    </>
  )
}

export default Navbar
