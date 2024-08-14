import React from 'react';
import { Link } from 'react-router-dom';

const  Organizations = () => {
    return (
        <div id='organizations'>
            <div className="organizations">
                
            </div>
            <div className="bloc">
         <Link to={"/newDetalOrg"}>
         <div className="text-nav">
                        <h4>Компaния <span>OcOO "Грин Телеком <br /> Сервис" (O!Dengi)</span></h4>
                        <h4>Вакансии<span>519</span></h4>
                        <h4>Мероприятия <span>1</span></h4>
                        <h4>видео<span>0</span></h4>
                    </div>
         </Link>
                   <div className="image">
                   <img data-v-7ad410c8="" src="https://devkg.com/images/organizations/dbbbb77228b5c8b9b905267da3208e0d.png" alt='img'/>
                   </div>                  
                </div>
     
                <div className="bloc2">
                <Link to={"/detalorganiz"}>
                <div className="text-nav2">
                    <h4>Компaния <span>MBank</span></h4>
                        <h4>Вакансии<span>158</span></h4>
                        <h4>мероприятия <span>82</span></h4>
                        <h4>видео <span>0</span></h4>
                    </div>
                </Link>
                    <div className="image2">:
                    <img data-v-7ad410c8="" src="data:image/jpeg;base64,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" alt="img"/>
                    </div>
                </div>  
                <div className="bloc">
         <Link to={"/newDetalOrg"}>
         <div className="text-nav">
                        <h4>Компaния <span>OcOO "Грин Телеком <br /> Сервис" (O!Dengi)</span></h4>
                        <h4>Вакансии<span>519</span></h4>
                        <h4>Мероприятия <span>1</span></h4>
                        <h4>видео<span>0</span></h4>
                    </div>
         </Link>
                   <div className="image">
                   <img data-v-7ad410c8="" src="https://devkg.com/images/organizations/dbbbb77228b5c8b9b905267da3208e0d.png" alt='img'/>
                   </div>                  
                </div>
                <div className="bloc2">
                <Link to={"/detalorganiz"}>
                <div className="text-nav2">
                    <h4>Компaния <span>MBank</span></h4>
                        <h4>Вакансии<span>158</span></h4>
                        <h4>мероприятия <span>82</span></h4>
                        <h4>видео <span>0</span></h4>
                    </div>
                </Link>
                    <div className="image2">:   
                    <img data-v-7ad410c8="" src="data:image/jpeg;base64,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" alt="img"/>
                    </div>
                </div>                           
                
        </div>
        
    );
};

export default Organizations;