import React from 'react';
import linkedin from './images/Linkedin.png';
import resume from './images/resume.png';
import github from './images/github.png';
import dev from './images/devlogo.png';

function Footer() {
  return (
    <div className='contact' id='footer'> 
      <div className='contact-text'>
        <h1 className='contact-me'> contact me</h1>
        <h4 className='email'> emilyfernschild@gmail.com</h4>
      </div>
      <div className='contact-links'>
        <a href='https://www.linkedin.com/in/emily-fernschild/'>
          <img className='contact-logo' src={linkedin} alt='linkedIn'/>
        </a>
        <a href='https://github.com/EmilyFernschild'>
          <img className='contact-logo' src={github} alt='github'/>
        </a>
        <a href='https://dev.to/emilyfernschild'>
          <img className='contact-logo' id='dev' src={dev} alt='blog'/>
        </a>
        {/* replace when resume done */}
        <a href='https://docs.google.com/document/d/1rXTmuq1IzS_YdQo68_BuS34OluqSgxjgdzu0Wvpomfw/edit'>
          <img className='contact-logo' src={resume} alt='resume'/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
