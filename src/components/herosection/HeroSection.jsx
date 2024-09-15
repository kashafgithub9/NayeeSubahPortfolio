import React from 'react'
import './herosection.css'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";

import picture from '../../websitedesignimages/websitepic.jpg'

import Buttons from '../Buttons';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';






const HeroSection = () => {

  const heroSectionIconData = [
    {
      icon: <IoLogoInstagram />,
      link: 'https://www.instagram.com/kashaf.bro/',
      color: "#E1306C"
    },
    {
      icon: <BiLogoGmail />,
      link: 'https://myaccount.google.com/?pli=1',
      color: "#0A66C2"
    },
    {
      icon: <BsGithub />,
      link: 'https://github.com/kashafgithub9/kashafgithub9',
      color: "#1DA1F2"
    }
  ]





  return (
    <div className='herosection-main-container' id='#'>

      <div className='herosection-icon-container' >
        {heroSectionIconData.map((muzammil, index) => {
          return (
        <a href= {muzammil.link} className={`icon-container-hover-${index}`}>{muzammil.icon}</a>
          )
        })}
      </div>

      <div className='herosection-name-container'>
        <div className='herosection-name-container-top'>

          <div className='name-part'>
            <h1>Kashaf.</h1>
            <span className='hand-icon'><GiHand /></span>
          </div>


          <h2>Frontend Developer</h2>
          <p>Front-End Developer,I make UI/UX Designs which will blow your mind.I can create Your Imaginations.</p>
        </div>

        <Buttons btnTitle={"Say Hello"} btnIcon={<FaTelegramPlane />} />
        
      </div>

      <div className='herosection-image-container'>
        <img src={picture} />
      </div>

    </div>
  )
}

export default HeroSection