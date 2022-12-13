import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';
import './AboutMe.css'

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {

    if(screen.fadeScreen !== props.id)
    return
    Animation.animations.fadeInScreen(props.id)

  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    
    description: 'Frontend Developer',
    highlights: {
      bullets:[
          "Frontend Developer",
          "HTML",
          "CSS",
          "Bootstrap",
          "SASS / SCSS",
          "Javascript",
          "GIT",
          "Node.js",
          "React",
          "Hosting - Firebase",
          "Seo - search engine optimization",
      ],
      heading: "Learned skills"
          
    }

  }

  const renderHighlight = () => {
    return (

      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (

        <div className='highlight' key={i}>
            <div className="highlight-blob"></div>
            <span> {value} </span>
        </div>

      ))

    )
  }


  return (
    <div className='aboutme-container screen-container' id={props.id || ''}>
        <div className="about-me-parent">

            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />

            <div className="about-me-card">
                <div className="about-me-profile"></div>
                    <div className="about-me-details">
                      <span className='about-me-description'> {SCREEN_CONSTSANTS.description} </span>

                      <div className="about-me-highlights">
                        <div className="highlight-heading">
                            {SCREEN_CONSTSANTS.highlights.heading}
                        </div>

                        {renderHighlight()}
                      </div>

                    <div className="about-me-options">
                    <button className='btn primary-btn'>
                                    {' '}
                                    Let's work together{' '}
                                </button>

                                <a href="resume.pdf" download='resume.pdf'>
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                    </div>

                    </div>
                
            </div>

        </div>
    </div>
  )
}
