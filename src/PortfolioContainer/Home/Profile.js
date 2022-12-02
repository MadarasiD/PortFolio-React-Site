import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import  cssBattle    from '../Home/cssb.svg'



export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">

                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://cssbattle.dev/player/p2yKgsM6Q4WIjoIJqYFVXT0D4O43" target="_blank">
                    <img src={cssBattle} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
