import React from 'react'
import './Recommendation.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'

export default function Recommendation(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

  return (
    <div>
        
        <ScreenHeading
        title={'Recommendation'}
        subHeading={'What my clients have said about me'}
        />

        <section className="recommendation-section" id={props.id || ''}>

        </section>

    </div>
  )
}
