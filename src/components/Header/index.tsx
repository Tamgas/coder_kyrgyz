import React, { useState } from "react";
import logoHeader from "../assets/img/Logo-header.svg";
import logoHeader1 from "../assets/img/Logo-header.svg";
import { RiLoginCircleLine } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logoHeader} alt="img" />
          <div className="header--nav">
            <NavLink to="/вакансии" className={({ isActive }) => isActive ? "active" : ""}>Вакансии</NavLink>
            <NavLink to="/мероприятия" className={({ isActive }) => isActive ? "active" : ""}>Мероприятия</NavLink>
            <NavLink to="/видео" className={({ isActive }) => isActive ? "active" : ""}>Видео</NavLink>
            <NavLink to="/организации" className={({ isActive }) => isActive ? "active" : ""}>Организации</NavLink>
            <NavLink to="/cooбщество" className={({ isActive }) => isActive ? "active" : ""}>Сообщество</NavLink>
          </div>

          <h1 onClick={() => setModalOpen(true)}><TfiMenu /></h1>
          {isModalOpen && (
            <div className="header--modal">
              <div className="header--modal__content">
                <div className="header--modal__content--img">
                  <img src={logoHeader1} alt="img" style={{
                    width: "90px"
                  }} />
                  <span onClick={() => setModalOpen(false)}>x</span>
                </div>
                <NavLink to="/вакансии" className={({ isActive }) => isActive ? "active" : ""}>Вакансии</NavLink>
                <NavLink to="/мероприятия" className={({ isActive }) => isActive ? "active" : ""}>Мероприятия</NavLink>
                <NavLink to="/видео" className={({ isActive }) => isActive ? "active" : ""}>Видео</NavLink>
                <NavLink to="/организации" className={({ isActive }) => isActive ? "active" : ""}>Организации</NavLink>
                <NavLink to="/cooбщество" className={({ isActive }) => isActive ? "active" : ""}>Сообщество</NavLink>
              </div>
            </div>
          )}
          <div className="header--login">
            <div className="header--login__btn">
              <span>
                <RiLoginCircleLine />
              </span>
            </div>
            <div className="header--login__btn2">
              <span>Войти</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
