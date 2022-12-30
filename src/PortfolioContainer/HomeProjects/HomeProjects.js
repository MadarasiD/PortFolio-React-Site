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
        
        <ScreenHeading
        title={'HomeProjects'}
        subHeading={'My self-made hobby projects'}
        />

        <section className="projects-section" id={props.id || ''}>
            <div className="container">
                <div className="row">
                    <OwlCarousel className='owl-carousel' id='projects-carousel' {...options}>

                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        <i className="fa fa-quote-left"/>
                                        what is the name of the project
                                        <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className="client-info">
                                    <img src={require('../../assets/Projects/LoginForm.jpg')} alt="Login Form" />
                                    <a href="https://12-login-form.vercel.app/" target='_blank'>click to see</a>
                                    <h5>tell us something about your project</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        <i className="fa fa-quote-left"/>
                                        what is the name of the project
                                        <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className="client-info">
                                    <img src={require('../../assets/Projects/LoginForm.jpg')} alt="Login Form" />
                                    <a href="https://12-login-form.vercel.app/" target='_blank'>click to see</a>
                                    <h5>tell us something about your project</h5>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-12">
                            <div className="project-item">
                                <div className="project-comment">
                                    <p>
                                        <i className="fa fa-quote-left"/>
                                        what is the name of the project
                                        <i className="fa fa-quote-right"/>
                                    </p>
                                </div>
                                <div className="client-info">
                                    <img src={require('../../assets/Projects/LoginForm.jpg')} alt="Login Form" />
                                    <a href="https://12-login-form.vercel.app/" target='_blank'>click to see</a>
                                    <h5>tell us something about your project</h5>
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
