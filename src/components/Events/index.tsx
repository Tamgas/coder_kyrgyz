import React from "react";
import event from "../../components/assets/img/events1.webp";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        <div className="events">
          <div className="events--foto">
          <Link to={"/detalmerop"}>  <img src={event} alt="img" /></Link>
            <div className="events--foto__text">
              <h4>
                25 августа 2024 <span>17:00</span>
              </h4>
              <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>

              <div className="events--foto__text--par">
                <div className="events--foto__text--par__kor1">
                  <h6>Организатор</h6>
                  <h2>InkubasiaLAB</h2>
                </div>
                <div className="events--foto__text--par__kor2">
                  <h6>Когда</h6>
                  <h2>Коворкинг-резорт ololoAkJol</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
