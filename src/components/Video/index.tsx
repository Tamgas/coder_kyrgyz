import React from "react";

import video1 from "../assets/img/video1.webp";
import video2 from "../assets/img/video3.webp";
import video3 from "../assets/img/video2.webp";
import video4 from "../assets/img/video4.webp";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import VideoList from "./VideoList";
import loading1 from "../../components/assets/img/loiding.svg";
import { ResourceItem3 } from "../Types";
import { CONSTANTS } from "../../constants/intex";

const Video = ({count =-1}) => {
  const { data, loading } = useFetch({
    url: `${CONSTANTS}/meetups`,
  });

  if (loading) {
    return (
      <div
        className="loading"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={loading1} alt="img" />
      </div>
    );
  }
  return (
    <div id="video">
      <div className="container">
        <div className="btn">
          <button>Добавить видео</button>
        </div>

        <div className="text">
          <h1>Все видео</h1>
        </div>
        <div className="video-card">
          {data &&
            data.slice(0,count).map((el: ResourceItem3, index: number) => {
              return (
                <VideoList
                  key={index}
                  title={el.title}
                  organization_name={el.organization_name}
                  cover={el.cover}
                  date={el.date}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Video;
