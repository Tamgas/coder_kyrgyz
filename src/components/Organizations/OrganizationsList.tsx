import React from "react";
import { Link } from "react-router-dom";
import { ResourceItem4 } from "../Types";

const OrganizationsList:React.FC<ResourceItem4> = ({
  name ,
  icon ,

  events_count,
  jobs_count ,
  meetups_count,

}) => {
  return (
    <div className="bloc2">
                <Link to={"/detalorganiz"}>
                <div className="text-nav2">
                    <h4>Компaния <span>{name}</span></h4>
                        <h4>Вакансии<span>{jobs_count}</span></h4>
                        <h4>мероприятия <span>{events_count}</span></h4>
                        <h4>видео <span>{meetups_count}</span></h4>
                    </div>
                </Link>
                    <div className="image2">:   
                    <img data-v-7ad410c8="" src={icon} alt="img"/>
                    </div>
                </div>  
  )
};

export default OrganizationsList;
