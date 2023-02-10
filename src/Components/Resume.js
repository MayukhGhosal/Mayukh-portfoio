import React from 'react'
import img6 from '../images/Resume.jpeg'
import '../Styles/Resume.css'
import Nav from '../Components/Navbar'
function Resume() {
  return (
    <>
    < Nav />
      <img className = 'cv1' src={img6}></img>
    </>
  )
}

export default Resume
