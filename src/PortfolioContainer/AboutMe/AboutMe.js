import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';

export default function (props) {

  let fadeInScreenHandler = (screen) => {

    if(screen.fadeScreen !== props.id)
    return
    Animation.animations.fadeInScreen(props.id)

  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
    <div className='aboutme-container screen-container' id={props.id || ''}>
        <div className="about-me-parent">

            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        </div>
    </div>
  )
}
