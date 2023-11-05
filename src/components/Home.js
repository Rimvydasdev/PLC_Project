import React from 'react'
import Solutions from './Solutions'
import Contacts from './Contacts'
import About from './About'
import './styles/Styles.css'

function Home() {
    return (
        <div className='home-container'>
            <div className="background-container">
                <About />
            </div>
            <div className="background-container">
                <Solutions />
            </div>
            <div className="background-container">
                <Contacts />
            </div>
        </div>
    )
}

export default Home
