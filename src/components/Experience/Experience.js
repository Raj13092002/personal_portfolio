import React, {useEffect} from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => { 
    useEffect(() => {
        AOS.init({duration: 400});
    }, []);

    return (
        <section id='experience'>
            <h2>My Skills</h2>

            <div className='container experience_container'>
                <div className='experience_card' data-aos="fade-up">
                    <h3> Tech Stack </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Python</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Machine Learning</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>C++</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>SQL</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card' data-aos="fade-up">
                    <h3> CS Core</h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>DBMS</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Computer Network</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Operating system</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>{`OOPS (C++)`}</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card' data-aos="fade-up">
                    <h3> Data science</h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>ML Algorithm</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>MYSQL</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Deep Learning (NLP)</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>BI tools</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card' data-aos="fade-up">
                    <h3> Data analyst </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Excel</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Tablue/Powerbi</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Data preprocessing</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>MySQL</h5>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience