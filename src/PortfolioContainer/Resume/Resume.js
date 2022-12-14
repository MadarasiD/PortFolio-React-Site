import React, {useState} from 'react';
import './Resume.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';
import { duration } from '@mui/material';

export default function Resume(props) {

    const [ selectedBulletIndex, setselectedBulletIndex] = useState(0);
    const [ carousalOffsetStyle, setcarousalOffsetStyle ] = useState({});

    let fadeInScreenHandler = (screen) => {

        if(screen.fadeScreen !== props.id)
        return
        Animation.animations.fadeInScreen(props.id)
    
      }
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

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

    ];

    const resumeDetails = [

        <div className="resume-screen-container">
            <ResumeHeading heading={'Apáczai Csere János primary school'} fromDate={'2002'} toDate={'2014'}/>
        </div>,
        <div className="resume-screen-container">
            <ResumeHeading heading={'Madarasi'} subHeading={'Frontend Developer'} fromDate={'2022'} toDate={'2022'}/>
        </div>,
        <div className='experience-description'>
            <span className="resume-description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore! 1
            </span>
        </div>,

        <div className="experience-description">
            <span className="resume-description-text">
                Experience - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione velit alias id nulla ipsa! Maxime quasi quidem qui rerum earum. 2
            </span>
            <br />
            <span className='resume-description-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, deserunt et saepe maiores dolorum deleniti necessitatibus nostrum corporis sed? Vel quas praesentium blanditiis ipsum sed quis, enim numquam accusantium! 3
            </span>
            <br />
            <span className='resume-description-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, deserunt et saepe maiores dolorum deleniti necessitatibus nostrum corporis sed? Vel quas praesentium blanditiis ipsum sed quis, enim numquam accusantium! 4
            </span>
        </div>,
        <div className="resume-screen-container programming-skills-container" key='programming-skills'>
            {programmingSkillDetails.map((skill, index)=> (
                <div className="skill-parent" key="index">
                    <div className="heading-bullet"></div>
                    <span> {skill.skill} </span>
                    <div className="skill-percentage">
                        <div style={{width: skill.ratingPercentage + "%"}} className='active-precentage'>

                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading 
                    key={index}
                    heading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />
            ))}
        </div>,

        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading='Teaching'
                description="lorem5"

            />
        </div>

    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {

            style: {transform: 'translateY('+ index * offsetHeight * -1 +'px)'},
            
        }
        setcarousalOffsetStyle(newCarousalOffset);
        setselectedBulletIndex(index);
    };

    const getBullets = ()=> {

    }

  return (
    <div className='resume-container screen-container' id={props.id || ''}>

        <div className="resume-content">

                <ScreenHeading title={'Resume'} subHeading={'My biographical description'} />

        </div>

    </div>
  )
}
