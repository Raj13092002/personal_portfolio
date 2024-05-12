import React, { useEffect } from 'react'
import './project_3fr.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import P1_Back from '../../assets/img/chat_bot.jpeg';
import P2_Back from '../../assets/img/movie recommendation.webp';
import P3_Back from '../../assets/img/big mart sales.jpg';
import P4_Back from '../../assets/img/car_price_prediction.jpg';
import P5_Back from '../../assets/img/facial_reco.jpg';
import P6_Back from '../../assets/img/nigreai food price.jpg';


const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);

    return (
        <section id='project'>
            <h2>My Projects</h2>

            <div className='container project_container'>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P1_Back} alt='iNotePad'></img>
                            <h3>chat bot</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>Chat-bot</h1>
                            <p>its a chatbot that is design by the dialog flow frame work </p>
                            <a href='https://drive.google.com/drive/folders/1tCZcQYoGNz2OSA2LnD8ppF1GdSqVHPq0?usp=drive_link' target='_blank' rel="noopener noreferrer" className='btn-project'>Google drive</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P2_Back} alt='NewsApp'></img>
                            <h3>Movie recommendation</h3>
                        </div>
                        <div class="flip-card-back">
                            <h2>Movie recommendation system</h2>
                            <p>topredict the movie on the basisi of the selected movies</p>
                            <a href='https://github.com/Raj13092002/Data-science-projects/tree/main/movie%20recommendations' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P3_Back} alt='File-Compressor'></img>
                            <h3>Big_Mart sales prediction</h3>
                        </div>
                        <div class="flip-card-back">
                            <h2>Big_Mart sales </h2>
                            <p>This project is used to predict the sales of the Big mart company</p>
                            <a href='https://github.com/Raj13092002/Data-science-projects/blob/main/big%20mart%20sales%20pridiction(major%20projects).zip' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P4_Back} alt='Portfolio'></img>
                            <h3>Car price prediction</h3>
                        </div>
                        <div class="flip-card-back">
                            <h2>Car price prediction</h2>
                            <p>By this project we have to predict the car prices on the basisi of market</p>
                        <a href='https://github.com/Raj13092002/Data-science-projects/tree/main/16_CarPricePrediction_RANDOMFOREST' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P5_Back} alt='Portfolio'></img>
                            <h3>Facial recognition</h3>
                        </div>
                        <div class="flip-card-back">
                            <h2>Facial recognition</h2>
                            <p>By the project we have to Do the attewndence by using Facial recognition and there have a chatbot to help the new user</p>
                        <a href='https://github.com/Ayush-7130/Chat-App' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P6_Back} alt='Portfolio'></img>
                            <h3>nigeria fod price prediction</h3>
                        </div>
                        <div class="flip-card-back">
                            <h2>Nigeria chapter</h2>
                            <p>By this project we predict the price of the food in nigeria </p>
                        <a href='https://dagshub.com/Raj13092002/KanoNigeriaChapter_FoodPrices' target='_blank' rel="noopener noreferrer" className='btn-project'>DagHub</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Project