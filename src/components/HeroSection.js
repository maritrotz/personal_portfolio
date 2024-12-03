import React from 'react';
import {Button} from './Button'
import './HeroSection.css';

import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src='/Images/KtrotzAboutMe.JPG' className='homeVideo' />
        <h1>Learn More About Kamari</h1>
        <div className='hero-btns'>
           <Button className='btns' buttonStyle='btn--outline'
           buttonSize='btn--large'
           >
            Click Here
           </Button>
        </div>
    </div>
  )
}

export default HeroSection