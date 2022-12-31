import React, { useState } from 'react'
import './ContactMe.css'
import imgBack from '../../assets/ContactMe/mailz.jpeg'
import load from '../../assets/ContactMe/load2.gif'
import plane from '../../assets/ContactMe/plane.png'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import { TypeAnimation } from 'react-type-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cssBattle  from '../Home/Profile/cssb.svg';
import Udemy from '../Home/Profile/udemy.png';
import Fmentor from '../Home/Profile/Fmentor.svg';


export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ banner, setBanner ] = useState('');
    const [ bool, setBool ] = useState(false);


    const handleName = (e)=> {

      setName(e.target.value);

    }
    const handleEmail = (e)=> {

      setEmail(e.target.value);

    }
    const handleMessage = (e)=> {

      setMessage(e.target.value);

    }

    console.log(name);

  return (
    <div className='main-container' id={props.id|| ''}>
        <ScreenHeading title={'Contact Me'} subHeading={'contact me'} className='screenhead'/>

       <div className='central-form'>
        <div className="col">

        <h2>
             <TypeAnimation
                  sequence={[
                  'Get In Touch ✉️',
                  1000, 
                                   
                  () => {
            
                   }
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '2em' }}
                                    />

         </h2>

         <a href="https://www.facebook.com/daniel.madarasi.1/"  target="_blank">
                        <FontAwesomeIcon icon={faFacebook} style={{width: "30px", color: '#fff', margin: '20px 25px 8px 0'}} classname="font-icon"/>
                    </a>

                    <a href="https://www.linkedin.com/in/d%C3%A1niel-madarasi-a8b5661b2/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} classname="font-icon" style={{color: '#fff',margin: '20px 25px 8px 0'}}/>
                    </a>

                    <a href="https://github.com/MadarasiD" target="_blank">
                        <FontAwesomeIcon icon={faGithub} classname="font-icon" style={{color: '#fff',margin: '20px 25px 8px 0'}}/>
                    </a>

                    <a href="https://cssbattle.dev/player/p2yKgsM6Q4WIjoIJqYFVXT0D4O43" target="_blank">
                    <img src={cssBattle} alt="" style={{width: "35px", color: '#fff',margin: '20px 25px 8px 0'}} classname="font-icon"/>
                    </a>

                    <a href="https://www.udemy.com/user/daniel-madarasi/" target="_blank">
                    <img src={Udemy} alt="" style={{width: "22px",margin: '20px 25px 8px 0'}} classname="font-icon"/>
                    </a>

                    <a href="https://www.frontendmentor.io/profile/MadarasiD" target="_blank">
                    <img src={Fmentor} alt="" style={{width: "25px", background: "#fff", borderRadius: "100px",margin: '20px 25px 8px 0'}} classname="font-icon"/>
                    </a>



        </div>

                <div className="back-form">
                  <div className="img-back">
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt="image not found" style={{width: '100%', opacity: '0.5'}}/>
                  </div>
                

                <form>

                  <p>{banner}</p>

                  <label htmlFor="name">Name</label>
                  <input type="text" onChange={handleName} value={name}/>

                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={handleEmail} value={email}/>

                  <label htmlFor="message">Message</label>
                  <textarea type="text" onChange={handleMessage} value={message}/>


                  <div className="send-btn">
                    <button type='submit'>

                        send <img src={plane} />

                    </button>
                  </div>

                </form>

                </div>

       </div>


    </div>
  )
}
