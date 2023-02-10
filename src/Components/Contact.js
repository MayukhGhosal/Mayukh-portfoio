import React,{useState} from 'react'
import Navbar from './Navbar'
import '../Styles/Contact.css'


function Contact() {
  const [text,setText] = useState()

  const changeHandler = (event) => {
    let value = event.target.value
    // console.log(value)
    setText(value) 
  }
  const handleClick =() => {
    
  }
  return (
    <>
      <Navbar /> 
      <textarea className='textarea' onChange={changeHandler}>{text}</textarea>
      <br></br>
      <button className='cntc' onClick={handleClick}>Email me</button>
    </>
  )
}

export default Contact
