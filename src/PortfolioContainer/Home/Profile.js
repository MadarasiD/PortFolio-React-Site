import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cssBattle  from '../Home/cssb.svg';
import Udemy from '../Home/udemy.svg';
import Fmentor from '../Home/Fmentor.svg'



export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">

                    <a href="https://www.facebook.com/daniel.madarasi.1/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a href="https://www.linkedin.com/in/d%C3%A1niel-madarasi-a8b5661b2/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="https://github.com/MadarasiD" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://cssbattle.dev/player/p2yKgsM6Q4WIjoIJqYFVXT0D4O43" target="_blank">
                    <img src={cssBattle} alt="" />
                    </a>

                    <a href="https://www.udemy.com/user/daniel-madarasi/" target="_blank">
                    <img src={Udemy} alt="" />
                    </a>

                    <a href="https://www.frontendmentor.io/profile/MadarasiD" target="_blank">
                    <img src={Fmentor} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
