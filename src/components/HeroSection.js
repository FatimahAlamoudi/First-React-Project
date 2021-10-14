import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection()
{
    return(
        <div className='hero-container'>
            <img src="./Images/pic.jpg"/>
            <h1>Ultimate Desserts</h1>
            <p>Discover our special desserts</p>
            <div className="hero-btns">
                <Button 
                className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button 
                className="btns"
                buttonStyle='btn--primary '
                buttonSize='btn--large'>
                    FIND MORE
                </Button>

            </div>
        </div>
    )
}

export default HeroSection