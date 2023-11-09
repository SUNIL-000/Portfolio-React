import React from 'react'
import "./Skill.css";
import icon1 from "../assest/html.png"
import icon2 from "../assest/css-3.png"
import icon3 from "../assest/atom.png"
import icon4 from "../assest/node-js.png"
import icon5 from "../assest/java.png"
import icon6 from "../assest/dsa.png"
import icon7 from "../assest/database.png"
import icon8 from "../assest/js.png"
import SkillComponent from '../component/SkillComponent';


const Skill = () => {
    const skilldata = [
        {
            src: icon1,
            name: "HTML"
        },
        {
            src: icon2,
            name: "CSS"
        },
        {
            src: icon3,
            name: "REACT JS"
        },
        {
            src: icon4,
            name: "NODE JS"
        },
        {
            src: icon5,
            name: "java"
        },
        {
            src: icon6,
            name: "DSA"
        },
        {
            src: icon7,
            name: "MONGODB"
        },
        {
            src: icon8,
            name: "JAVASCRIPT"
        },
    ]
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 skill-text my-2'>
                            <h1>SKILL</h1>
                            <p id="skill-desc">Here are some skill which I have been working with</p>
                            <div className='arr-div2'></div>
                        </div>
                    </div>
                    <div className='row skill-div'>

                        <SkillComponent data={skilldata} />

                    </div>


                </div>
            </section>

        </>
    )
}

export default Skill