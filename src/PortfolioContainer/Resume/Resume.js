import React, {useState} from 'react';
import './Resume.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';

export default function Resume(props) {

    const [ selectedBulletIndex, setselectedBulletIndex] = useState(0);
    const [ carousalOffsetStyle, setcarousalOffsetStyle ] = useState({});

    let fadeInScreenHandler = (screen) => {

        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    
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

        { label: "Education", logoSrc: "edu.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, deserunt et saepe maiores dolorum deleniti necessitatibus nostrum corporis sed? Vel quas praesentium blanditiis ipsum sed quis, enim numquam accusantium! 3 lorem150
            </span>
            <br />
            <span className='resume-description-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque voluptates, fugiat sed, vitae error suscipit unde aliquam impedit ex consequuntur expedita earum accusamus ipsam! lorem150
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, deserunt et saepe maiores dolorum deleniti necessitatibus nostrum corporis sed? Vel quas praesentium blanditiis ipsum sed quis, enim numquam accusantium! 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia asperiores cupiditate magni animi enim vitae distinctio iusto. Cupiditate pariatur ullam reprehenderit distinctio veritatis alias a ducimus dignissimos et totam architecto eos aliquam vitae libero fuga placeat, aut dicta iste! Nemo voluptate delectus esse soluta blanditiis? Minima corporis culpa laudantium optio neque odio error aperiam, ea nulla at provident unde dolorum numquam rerum illum ducimus sint dolores ex, voluptates doloribus eaque hic, omnis explicabo. Quasi ex tempore delectus nulla dolorum sed cumque provident voluptatum, amet praesentium excepturi voluptates repudiandae, nisi repellendus iure explicabo! Harum odit veniam reprehenderit expedita, laborum incidunt quas nesciunt natus magnam, ullam similique eius. Dignissimos dolorem pariatur esse corrupti modi quidem, quos aliquam itaque voluptatum quis id adipisci saepe, repellat corporis inventore alias quam officia facilis harum architecto qui similique neque illum. Reprehenderit ducimus quos ullam recusandae unde tempora distinctio consequatur veritatis praesentium consequuntur quis optio aliquam consectetur quam ea ad, voluptatum vitae quidem vel pariatur ipsum iste cum voluptatibus. Quibusdam eveniet corporis aspernatur blanditiis vero possimus necessitatibus dolor perferendis sint eligendi doloribus, sunt culpa quas, dolore ipsam minima odit laborum quasi asperiores fugit eaque nobis. Hic incidunt rerum odit perferendis quos sapiente repellendus. Inventore, quos corrupti.
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
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
          };
        setcarousalOffsetStyle(newCarousalOffset);
        setselectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
              alt="logo"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    

    const getResumeScreen = () => {

        return (

            <div className="resume-details-carousal" style={carousalOffsetStyle.style}>
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>

        )

    }

  return (
    <div className='resume-container screen-container' id={props.id || ''}>

        <div className="resume-content">

                <ScreenHeading title={'Resume'} subHeading={'My biographical description'} />

                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons">

                            </div>

                            <div className="bullets"> {getBullets()} </div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreen()}</div>

                </div>

        </div>

    </div>
  )
}
