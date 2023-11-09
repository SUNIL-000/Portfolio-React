import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa"
import sunil from "../assest/sunil.jpg"
import resume from "../assest/resume.pdf"

import "./About.css"
const About = () => {
  return (
    <>
      <section id="about">
        <div className='container mt-5 text-justify'>
       
          <div className='row'>
            <div className='col-md-4 center-div'>
              <div className='abt-img-div'>
                <img src={sunil} alt="" />
              </div>
            </div>
            <div className='col-md-6 about-text '>
              <h1>Hi! Iam Sunil Kumar</h1>
             
              <p>I am 20 year old, B.Sc ITM student studying in Ravenshaw University. I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things. The more, the better.</p>
              <a href={resume} download className='abt-btn'>MY RESUME</a>
              <div className='mt-3'>
                <a href="#home"><FaGithub className='social-icon' /></a>
                <a href="#home"><FaTwitter className='social-icon' /></a>
                <a href="#home"><FaLinkedin className='social-icon' /></a>
                <a href="#home"><FaFacebook className='social-icon' /></a>
               

              </div>
            </div>

          </div>
         

        </div>
      </section>
    </>
  )
}

export default About