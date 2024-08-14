import React from "react";
import { Link } from "react-router-dom";
import { ResourceItem3 } from "../Types";

const VideoList:React.FC<ResourceItem3> = ({
  title ,
  organization_name ,
  cover ,
  date ,

}) => {
  const date1 = new Date(date);

  const year = date1.getFullYear();
  const month = date1.toLocaleString("default", { month: "long" });
  const day = date1.getDate();
  return (
    <div className="video">
      <div className="video--img1">
        <Link to={"/detalvideo"}>
          {" "}
          <img src={cover} alt="img" />
        </Link>
        <div className="video--img1__text1">
          <h1>{title}</h1>

          <div className="video--img1__text1--par">
            <div className="video--img1__text1--par__kor">
              <h6>Организатор</h6>
              <h2>{organization_name}</h2>
            </div>
            <div className="video--img1__text1--par__kor2">
              <h6>Когда</h6>
              <h2>
                {day} {month} {year}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
