import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';

export default function (props) {
  return (
    <div className='aboutme-container screen-container'>
        <div className="about-me-parent">

            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        </div>
    </div>
  )
}
