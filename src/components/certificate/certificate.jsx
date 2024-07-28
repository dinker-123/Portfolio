import React from 'react';
import CertificateImage1 from '../../assets/88321750.png';
import CertificateImage2 from '../../assets/udemy-logo-0-1.png';
import './certificate.modules.css';

const Certificate = () => {
    return (
        <section id='Certificate'>
            <h2 className='certificateTitle'>Certificates</h2>
            <div className="certificateImgs">
                <div className="certificateImg">
                    <a href='https://certificate.codingninjas.com/verify/66b6513d33475e12' target="_blank"><img src={CertificateImage1} alt="Front End Certificate" /></a>
                    <h1>Java</h1>
                    <span className='spamTitle'>Career Camp | Data Structures in JAVA
                    </span>
                </div>
                <div className="certificateImg">
                    <a href='https://certificate.codingninjas.com/view/b7b0e6b7dcc1146e' target="_blank"><img src={CertificateImage1} alt="Back End Certificate" /></a>
                    <h1>Front End</h1>
                    <span className='spamTitle'>Career Camp | Front End | Full Stack Web Development</span>
                </div>
                <div className="certificateImg">
                <a href='https://certificate.codingninjas.com/view/f0e92b76f5eb0cf3' target="_blank"><img src={CertificateImage1} alt="Additional Certificate 1" /></a>
                    <h1>Back End</h1>
                    <span className='spamTitle'>Career Camp | Back End | Full Stack Web Development</span>
                </div>
                <div className="certificateImg">
                     <a href='https://www.udemy.com/certificate/UC-9fb2233c-616e-4c3c-9260-166380601583/' target="_blank"><img src={CertificateImage2} alt="Additional Certificate 4" /></a>
                    <h1>C++</h1>
                    <span className='spamTitle'>Learn C++ Programming - Beginner to Advance</span>
                </div>
            </div>
        </section>
    );
}

export default Certificate;
