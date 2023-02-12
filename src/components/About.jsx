import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import './about.css'

const About = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row p-5 d-flex justify-content-center">
                    <div className="col-12 mb-3 text-center">
                        <h2>UI/UX DESIGNER</h2>
                        <h5>Alexander Bramanthos</h5>
                        <div className="jumbotron text-center">
                            <img src={img1} className="rounded-circle gam1"/>
                        </div>
                    </div>
                    <div className="col-12 mb-3 text-center">
                        <h2>Front End Developer</h2>
                        <h5>Ferry Ferdyansyah</h5>
                        <div className="jumbotron text-center">
                            <img src={img2} className="rounded-circle gam1" />
                        </div>
                    </div>
                    <div className="col-12 mb-5 text-center">
                        <h2>Back End Developer</h2>
                        <h5>Reinhardth Yeager</h5>
                        <div className="jumbotron text-center">
                            <img src={img3} className="rounded-circle gam1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About