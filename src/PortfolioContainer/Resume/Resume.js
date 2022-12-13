import React, {useState} from 'react';
import './Resume.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import { duration } from '@mui/material';

export default function Resume(props) {

    const [ selectedBulletIndex, setselectedBulletIndex] = useState(0);
    const [ carousalOffsetStyle, setcarousalOffsetStyle ] = useState({});

    const ResumeHeading = (props) => {
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
                    <span> {props.heading ? props.heading : ''} </span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + '_' + props.toDate}
                        </div>
                    ): (

                        <div></div>

                    )}
                </div>

                <div className="resume-sub-heading">
                    <span> {props.subHeading ? props.subHeading : ''} </span>
                </div>

                <div className="resume-heading-description">
                    <span> {props.description ? props.description : ''} </span>
                </div>

            </div>
        </div>
    }

    const resumeBullets = [

        {label: 'Education', logoSrc: 'education.svg'},
        {label: 'Work History', logoSrc: 'work-history.svg'},
        {label: 'Programming Skills', logoSrc: 'programming-skills.svg'},
        {label: 'Projects', logoSrc: 'projects.svg'},
        {label: 'Interests', logoSrc: 'interests.svg'},


    ];

    const programmingSkillDetails = [

        {skill: 'HTML', ratingPercentage: 70},
        {skill: 'CSS', ratingPercentage: 70},
        {skill: 'Bootstrap', ratingPercentage: 70},
        {skill: 'SASS / SCSS', ratingPercentage: 70},
        {skill: 'Javascript', ratingPercentage: 70},


    ];

    const projectDetails = [

        {
            title: 'Personal Portfolio Website',
            duration: { fromDate: '2020', toDate: '2021'},
            description: 'My portfolio website where I can introduce myself and present my projects in one place',
            subHeading: 'Technologies Used: React JS'
        }

    ]

    let fadeInScreenHandler = (screen) => {

        if(screen.fadeScreen !== props.id)
        return
        Animation.animations.fadeInScreen(props.id)
    
      }
    
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='resume-container screen-container' id={props.id || ''}>

        <div className="resume-content">

                <ScreenHeading title={'Resume'} subHeading={'My biographical description'} />

        </div>

    </div>
  )
}
