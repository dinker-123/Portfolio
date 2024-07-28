import React from 'react';
import "./projects.css";
import EcomerceImg from '../../assets/Screenshot 2024-07-24 145602.png';
import ChatBox from '../../assets/Screenshot 2024-07-25 000802.png';

const Projects = () => {
    return (
        <div id="projects" className="container">
            <h1 className='title'>Projects</h1>
            <div className="containerProject1">
                <a href="https://ecommerce-site-lyart.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    <img className='imageProject' src={EcomerceImg} alt='Ecommerce Website' />
                </a>
                <div className="projectContent">
                <h3 className='projectTitle'>Ecommerce Website</h3>
                    <p className='projectDetail'>
                        Developed secure login system using React<br />
                        Implemented dynamic price range filter<br />
                        Organized products into categories for men,<br />
                        women, and other subcategories<br />
                        Integrated fully functional shopping cart system<br />
                        Designed responsive website layout for optimal user experience
                    </p>
                </div>
            </div>
            <div className="containerProject2">
                <a href="https://chat-box-frontend-three.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    <img className='imageProject' src={ChatBox} alt='Ecommerce Website' />
                </a>
                <div className="projectContent">
                <h3 className='projectTitle'>Chat-Box</h3>
                    <p className='projectDetail'>
                    I developed a real-time chat box application using Socket.io for communication, with a React.js UI and a Node.js backend. The app features chat input, emoji support, and a user ID section for personalized interaction. This project highlights my ability to integrate technologies to create a responsive and user-friendly chat application.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
