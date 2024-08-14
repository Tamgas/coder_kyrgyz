import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Community = () => {
  return (
    <div id="community">
      <div className="container">
        <div className="community">Community</div>
        <div className="community">
          <div className="community--telegram">
            <h1>Наши ресурсы в Telegram</h1>
            <div className="community--telegram__blocks">
              <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>QA</p>
              </div><div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Motion KG</p>
              </div><div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Frontend developer</p>
              </div><div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Codding/PM</p>
              </div><div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Relocate & Remote</p>
              </div>
              <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>DevOps</p>
              </div>
              <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Mad devs</p>
              </div>
              <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>React Native KG</p>
              </div>
              <div className="community--telegram__blocks--block">
                <span>
                  <FaTelegramPlane />
                </span>
                <p>Кружок програмистов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   // </div>  
  );
};

export default Community;