import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cssBattle  from './cssb.svg';
import Udemy from './udemy.png';
import Fmentor from './Fmentor.svg';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css'



export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                

                <div className="profile-details-name">
                        <span className='primary-text'>
                            {' '}
                            Welcome to my website,<br /> my name is <br /> <span className='high-text'>Dániel Madarasi</span> 
                        </span>
                </div>

                <div className="profile-details-role">
                        <span className="primary-text">
                            {' '}

                            <h1>
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

                            </h1>


                        </span>
                </div>

                    <div className="profile-options">
                                <button className='btn primary-btn'>
                                    {' '}
                                    Let's work together{' '}
                                </button>

                                <a href="resume.pdf" download='resume.pdf'>
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                    </div>

                    <div className="colz">

                    <div classname="colz-icon">

                    <a href="https://www.facebook.com/daniel.madarasi.1/" target="_blank">
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

                   
                </div>

            </div>

                    <div className="profile-pic">
                        <div className="profile-pic-bg">

                        </div>
                    </div>

        </div>
    </div>
  )
}
