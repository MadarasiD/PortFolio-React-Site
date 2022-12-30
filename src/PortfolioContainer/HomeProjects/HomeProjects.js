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

        const options = {

            loop: true,
            margin: 0,
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0:{
                    items: 1,  
                },
                768:{
                    items: 1,  
                },
                1000:{
                    items: 3,  
                },
            }

        }
    

  return (
    <div>
        
        

        <section className="projects-section" id={props.id || ''}>
        <ScreenHeading
        title={'HomeProjects'}
        subHeading={'My self-made hobby projects'}
        />
            <div className="container">
                <div className="row">
                    <OwlCarousel className='owl-carousel' id='projects-carousel' {...options}>

                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        
                                        Login Form
                                        
                                    </p>
                                </div>
                                <div className="project-info">
                                    <img src={require('../../assets/Projects/LoginForm.jpg')} alt="Login Form" />
                                    <a href="https://12-login-form.vercel.app/" target='_blank'>click to see</a>
                                    <h5>This is a login interface</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                      
                                        Parallax
                                        
                                    </p>
                                </div>
                                <div className="project-info">
                                    <img src={require('../../assets/Projects/Parallax.jpg')} alt="Login Form" />
                                    <a href="https://parallax-sable.vercel.app/" target='_blank'>click to see</a>
                                    <h5>Multi-layer rendering, where layers in the background move more slowly for the viewer than those in the foreground, creating a three-dimensional effect</h5>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        
                                        Javascript Dark Theme
                                        
                                    </p>
                                </div>
                                <div className="project-info">
                                    <img src={require('../../assets/Projects/darktheme.jpg')} alt="Login Form" />
                                    <a href="https://dark-theme-javascript.vercel.app/" target='_blank'>click to see</a>
                                    <h5>If you click on the mark in the middle, the background will be dark and the font color will be light</h5>
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
