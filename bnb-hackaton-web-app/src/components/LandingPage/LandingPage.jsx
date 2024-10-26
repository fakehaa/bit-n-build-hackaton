import React from 'react'
import './LandingPage.css'
import video from '../../assets/background-vid.mp4'
import logo from '../../assets/star-logo.png'

const LandingPage = () => {
return (
    <div className="landing-page">
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
                <h2 className="logo-text">STARTEAM ENTERPRISES</h2>
            </div>
    </div>
    <div className="video-background">
        <video autoPlay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
        </video>
    </div>
    <div className="overlay">
        <div className="content">
            <p><small>October 26, 2024, Za'abel Park 4:00 PM GST</small></p>
            <h1>Annual Tournament</h1>
            <p>Join us again this year for our exciting starteam annual tournnanet</p>
            <p className="slogan">Together we are stronger! Teamwork is the dream work!</p>
            <a href="#register" className="btn">Register</a>


        </div>
    </div>
    </div>
    )
}

export default LandingPage
