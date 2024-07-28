import React from 'react';
import './intro.modules.css';
import bg from '../../assets/IMG_20230203_142853-01-removebg-preview.png';
import btnImg from '../../assets/briefcase.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Dinker</span><br />Frontend Developer</span>
                <p className="introPara">I am a skilled Frontend Developer with experience<br/> in creating visually appealing and user-friendly websites.</p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className='btnImg' /> Get in Touch
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
