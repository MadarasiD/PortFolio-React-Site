import React from 'react'
import './HomeProjects.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'

export default function HomeProjects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

  return (
    <div>
        
        <ScreenHeading
        title={'HomeProjects'}
        subHeading={'My self-made hobby projects'}
        />

        <section className="projects-section" id={props.id || ''}>
            <div className="container">
                <div className="row">
                    <OwlCarousel className='owl-carousel' id='projects-carousel'>
                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        <i className="fa fa-quote-left"/>
                                        tell us something about your project
                                        <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>

    </div>
  )
}
