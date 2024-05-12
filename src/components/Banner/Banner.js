import React from 'react';
import { useState, useEffect } from "react";
// import headerImg from "../../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import CV from '../../assets/CV/Resume.pdf'
import 'animate.css';
import './Banner.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Data Analyst", "ML Engineer"];
    const period = 400;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <div className="banner_container" >
                <div className="banner_row">
                    <div className='banner_column'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <div className='Banner-h1'>
                                        <h2>{`Hi! I'm `} <h1>Raj Aryan</h1> <span className="txt-rotate" dataPeriod="400" data-rotate='["Data Analyst", "ML Engineer"]'><span className="fixd wrap">{text}</span></span></h2>
                                    </div>
                                    <p>Passionate about Data Analyst and Machine Learning Engineer with a strong work ethic and a passion for problem-solving, I possess natural leadership qualities that enable me to effectively lead teams. My expertise spans across various domains including Machine Learning, Artificial Intelligence, Deep Learning, Cloud Computing, Statistics, and Feature Engineering. I thrive on adapting to new technologies and staying ahead of the curve.</p>
                                    <a href={CV} download>
                                        <button>Download CV <ArrowRightCircle size={25} /></button>
                                    </a>
                                </div>}
                        </TrackVisibility>
                    </div>

                    {/* <div className='banner_column1'>
                        <div className="banner_img">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
