import React, {useState} from 'react';
import './Resume.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';

export default function Resume(props) {

    const [ selectedBulletIndex, setselectedBulletIndex] = useState(0);
    const [ carousalOffsetStyle, setcarousalOffsetStyle ] = useState({});

    let fadeInScreenHandler = (screen) => {

        if(screen.fadeScreen !== props.id)
        return
        Animation.animations.fadeInScreen(props.id)
    
      }
    
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='resume-container screen-container'>

        <div className="resume-content">

                <ScreenHeading title={'Resume'} subHeading={'My biographical description'} />

        </div>

    </div>
  )
}
