import React from "react";
import { Link } from "react-router-dom";
import event from "../../components/assets/img/events1.webp";
import { ResourceItem2 } from "../Types";


const EventsList: React.FC< ResourceItem2> = ({
  location,
  name,
  organization_name,
  date,
}) => {
  const date1 = new Date(date);

  // Extract year, month, and day
  const year = date1.getFullYear();
  const month = date1.toLocaleString("default", { month: "long" }); // Months are 0-based, so add 1
  const day = date1.getDate();
  const hours = date1.getHours();
  const minutes = date1.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return (
    <div className="events">
      <div className="events--foto">
        <Link to={"/detalmerop"}>
          {" "}
          <img src={event} alt="img" />
        </Link>
        <div className="events--foto__text">
          <h4>
            {day} {month} {year}{" "}
            <span>
              {formattedHours}:{formattedMinutes}
            </span>
          </h4>
          <h1>{name}</h1>

          <div className="events--foto__text--par">
            <div className="events--foto__text--par__kor1">
              <h6>Организатор</h6>
              <h2>{organization_name}</h2>
            </div>
            <div className="events--foto__text--par__kor2">
              <h6>Когда</h6>
              <h2>{location}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
