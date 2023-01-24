import React from 'react'

function About() {
  return (
    <div className = 'about-container' id='about'>
      <div className='abt-head-container'>
        <h2 className='about-header'>Here's a little bit <span className='span'>about me!</span></h2>
      </div>
      <div className='about-me'>
        <p>I am a recent graduate from Flatiron School for Software Engineering. Previously, I graduated from Western New England University with a degree in Biomedical Engineering. My background in science landed me a job as a scientist at Tangen Biosciences.</p>
        <p>Now, I am pursuing a career in the biotech world as a Software Engineer. My goal is to one day meld my two passions of computer science and medical science into one!</p>
      </div>
    </div>
  )
}

export default About
