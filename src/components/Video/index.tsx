import React from 'react';

import video1 from "../assets/img/video1.webp"
import video2 from "../assets/img/video3.webp"
import video3 from "../assets/img/video2.webp"
import video4 from "../assets/img/video4.webp"
import { Link } from 'react-router-dom';




const Video = () => {
    return (
        <div id='video'>
            <div className="container">
          <div className="btn">
          <button >Добавить видео</button>
          </div>

          <div className="text">
         <h1>Все видео</h1>
          </div>
                <div className="video">
                  
               <div className="video--img1">
          <Link to={"/detalvideo"}>    <img src={video1} alt="img" /></Link>
               <div className="video--img1__text1">
                <h1>ChatGPT —<br />
                 революция или <br />
                  мода? Как нейросети <br />
                  могут помочь в <br />
                   работе</h1>
                   
                <div className="video--img1__text1--par">
                    <div className="video--img1__text1--par__kor">
                    <h6>Организатор</h6>
                    <h2>
                        Kolesa Group
                    </h2>


                    </div>
                    <div className="video--img1__text1--par__kor2">
                    <h6>Когда</h6>
                    <h2>
                        12сентябрь 2023
                    </h2>

                    
                    </div>

                </div>
               </div>
               </div>


               <div className="video--img1">
             <Link to={"/detalvideo"}>  <img src={video3} alt="img" /></Link>
               <div className="video--img1__text1">
                <h1>Кибирд (Keybeard) <br />
                 #43 – Синдром <br />
                  самозванца в IT 2023 <br />
                   (feat. Даниил <br />
                    Вартанов)</h1>
                <div className="video--img1__text1--par">
                    <div className="video--img1__text1--par__kor">
                    <h6>Организатор</h6>
                    <h2>
                        Mad Devs
                    </h2>


                    </div>
                    <div className="video--img1__text1--par__kor2">
                    <h6>Когда</h6>
                    <h2>
                        30 августа 2023
                    </h2>

                    
                    </div>

                </div>
               </div>
               </div>


               <div className="video--img1">
           <Link to={"/detalvideo"}>    <img src={video2} alt="img" /></Link>
               <div className="video--img1__text1">
                <h1>Развивайся или <br />
                 проиграешь: грейды <br />
                  и менторство как <br />
                   инструменты <br />
                    карьерного роста</h1>
                <div className="video--img1__text1--par">
                    <div className="video--img1__text1--par__kor">
                    <h6>Организатор</h6>
                    <h2>
                        Kolesa Group
                    </h2>


                    </div>
                    <div className="video--img1__text1--par__kor2">
                    <h6>Когда</h6>
                    <h2>
                        31 июля 2023
                    </h2>

                    
                    </div>

                </div>
               </div>
               </div>


               <div className="video--img1">
             <Link to={"/detalvideo"}>  <img src={video4} alt="img" /></Link>
               <div className="video--img1__text1">
                <h1>Глазами CTO: как <br />
                 устроены команды <br />
                  разработки в Kolesa <br />
                   Group и Beeline <br />
                    Казахстан</h1>
                <div className="video--img1__text1--par">
                    <div className="video--img1__text1--par__kor">
                    <h6>Организатор</h6>
                    <h2>
                        Kolesa Group
                    </h2>

                    </div>
                    <div className="video--img1__text1--par__kor2">
                    <h6>Когда</h6>
                    <h2>
                        14 июля 2023
                    </h2>

                    
                    </div>

                </div>
               </div>
               </div>
                </div>
            </div>

        </div>
    );
};

export default Video;