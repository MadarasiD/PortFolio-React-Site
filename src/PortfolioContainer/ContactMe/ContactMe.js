import React from 'react'
import './ContactMe.css'
import imgBack from '../../assets/ContactMe/mailz.jpeg'
import load from '../../assets/ContactMe/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import { TypeAnimation } from 'react-type-animation';

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='main-container' id={props.id|| ''}>
        <ScreenHeading title={'Contact Me'} subHeading={'contact me'} />

       <div className='central-form'>
        <div className="col">

        <h2>
                                <TypeAnimation
                                    sequence={[
                                    'Frontend Developer 💻', // Types 'Frontend Developer'
                                    2000, // Waits 1s
                                    'HTML ✅', // Deletes 'Frontend Developer' and types 'HTML'
                                    2000, // Waits 2s
                                    'CSS ✅',
                                    2000,
                                    'JAVASCRIPT ✅',
                                    2000,
                                    'REACT ✅',
                                    2000,
                                    () => {
            
                                    }
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '2em' }}
                                    />

                            </h2>


        </div>
       </div>


    </div>
  )
}
