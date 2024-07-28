import React from "react";
import'./skills.modules.css';
import Java from "../../assets/java.png";
import Html from "../../assets/html-5.png";
import Css from "../../assets/css-3.png";
import JavaScript from "../../assets/js.png";
import ReactJs from "../../assets/react.png";
import MySQL from "../../assets/mini.png"; 

const Skills =() =>{
    return (
        <section id="skills">
            <span className="skillsTitle"><h1>About me</h1></span>
            <span className="skillsDesc">Experienced in Java, C++, and OOPs, with a strong foundation in frontend technologies like
            HTML, CSS, JavaScript, React.js. Demonstrates extensive knowledge in Node.js for backend
            development. Committed to continuous learning and effective contribution in challenging
            roles. Good communication skills complemented by a quick   learning ability.
            </span>

            <span className="skillsTitle"><h1> My Skills</h1></span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Java} alt="Java" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2 className="skillsHeadline">Java</h2>
                        <p>I possess a solid knowledge of Java and have successfully completed a project in this language. Additionally, I have 9 months of certified coding experience, further enhancing my skills and expertise.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Html} alt="Html" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Html</h2>
                        <p>I have an in-depth knowledge of HTML and have completed a project that showcases my proficiency in this language. Additionally, my 9 months of certified coding experience have significantly honed my skills.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Css} alt="Css" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Css</h2>
                        <p>My expertise in CSS is demonstrated through a project I successfully completed. Furthermore, with 9 months of certified coding experience, my skills and capabilities have been greatly enhanced.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={JavaScript} alt="JavaScript" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                        <p>With a strong foundation in JavaScript, I have successfully completed a project that highlights my capabilities. Moreover, 9 months of certified coding experience have enhanced my skill set.</p>
                    </div>
                </div><div className="skillBar">
                    <img src={ReactJs} alt="ReactJs" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>ReactJs</h2>
                        <p>I possess extensive knowledge of React.js, as evidenced by a project I have successfully executed. Moreover, 9 months of certified coding experience have further developed my skills and expertise.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MySQL} alt="MySQL" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>MySQL</h2>
                        <p>I have a solid knowledge of MySQL and have successfully completed a project using this database system. Additionally, I possess certified coding experience, highlighting my skills and expertise.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;