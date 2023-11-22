import React from 'react'
import { useNavigate } from "react-router-dom";

import logo from '../../assets/Devices.png'
import './handleEmail.scss'

const HandleEmail = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    if (event.type ==='click' || event.key === 'Enter') {
      navigate(`/signup`)
    }
  }

  return (
    <div className="hero-container">
      <div className="hero">
      <img src={logo} />
        <h2 className='hero-section font-normal'>Step 1/3</h2>
        <h3 className='hero-title font-semibold'>Finish setting up your account</h3>
        <p className='hero-content font-normal'>Movix is personalized for you. 
        Create a password to watch on any device at any time.</p>
        <button onClick={handleSubmit} >Next</button>
      </div>
    </div>
  )
}

export default HandleEmail

