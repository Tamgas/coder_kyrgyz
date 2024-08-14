import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { isUserLogeddin } from "../../utils";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false);
  const nav = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const loggedIn = isUserLogeddin()
    setIsLoggedIn(loggedIn)
  }, [isLoggedIn, setIsLoggedIn, location.pathname])

  const logout = () => {
    Cookies.remove("authtoken");
    setIsLoggedIn(false)
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <svg
            onClick={() => nav("/")}
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="38"
            fill="none"
          >
            <path
              fill="#000"
              d="M29.31 0h-9.437v9.5h9.437V0zM54.16 12.785v16.507h-3.028v-1.386c-.825 1.069-2.123 1.702-3.814 1.702-3.106 0-5.701-2.73-5.701-6.214 0-3.484 2.595-6.215 5.701-6.215 1.691 0 2.989.673 3.814 1.702v-6.096h3.028zm-2.988 10.609c0-1.98-1.377-3.325-3.264-3.325-1.848 0-3.224 1.346-3.224 3.325s1.376 3.325 3.224 3.325c1.848 0 3.264-1.346 3.264-3.325zM62.614 27.115c1.061 0 2.005-.515 2.398-1.188l2.988-.04c-.707 2.375-2.791 3.721-5.426 3.721-3.814 0-6.29-2.73-6.29-6.214 0-3.484 2.516-6.215 6.212-6.215 3.46 0 5.819 2.771 5.819 6.215 0 .435-.04.831-.118 1.266h-8.768c.432 1.663 1.69 2.455 3.185 2.455zm2.752-4.87c-.354-1.701-1.573-2.374-2.831-2.374-1.612 0-2.713.87-3.067 2.375h5.898zM80.307 17.496l-4.285 11.796h-3.067l-4.247-11.796h3.224l2.595 8.035 2.596-8.035h3.184zM88.84 29.292l-4.09-5.344v5.344h-3.027V12.785h3.028v9.896l3.853-5.185h3.5l-4.444 5.819 4.68 5.977h-3.5zM105 17.496v11.242c0 3.879-3.067 5.62-6.016 5.62-3.027 0-5.82-1.662-5.82-4.71h3.028c0 1.03.983 2.019 2.792 2.019 1.887 0 3.028-1.03 3.028-2.89V27.51c-.826 1.109-2.124 1.782-3.893 1.782-3.106 0-5.701-2.692-5.701-6.057 0-3.325 2.595-6.056 5.701-6.056 1.77 0 3.028.673 3.893 1.781v-1.464H105zm-2.949 5.7c0-1.86-1.376-3.206-3.264-3.206-1.887 0-3.263 1.345-3.263 3.206 0 1.9 1.376 3.246 3.263 3.246 1.888 0 3.264-1.346 3.264-3.246z"
            />
            <path
              stroke="#000"
              strokeWidth="9.48"
              d="M19.88 14.26H5.7v18.99h14.2a4.7 4.7 0 0 0 4.7-4.7V19"
            />
          </svg>
          <div className="header--menu" onClick={() => setMenu(true)}>
            <TbMenu2 />
          </div>
          <nav className="header--nav">
            <NavLink to={"/vacancy"}>Вакансии</NavLink>
            <NavLink to={"/events"}>Мероприятия</NavLink>
            <NavLink to={"/video"}>Видео</NavLink>
            <NavLink to={"/organization"}>Организации</NavLink>
            <NavLink to={"/community"}>Сообщество</NavLink>
          </nav>
          {isLoggedIn ? (
            <div className="header--btn" onClick={logout}>
              <span>
                <AiOutlineLogin />
              </span>
              <button>Logout</button>
            </div>
          ) : (
            <div className="header--btn" onClick={() => nav("/auth")}>
              <span>
                <AiOutlineLogin />
              </span>
              <button>Войти</button>
            </div>
          )}
        </div>
      </div>
      {menu && (
        <div className="menu">
          <div className="menu--logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="38"
              fill="none"
            >
              <path
                fill="#000"
                d="M29.31 0h-9.437v9.5h9.437V0zM54.16 12.785v16.507h-3.028v-1.386c-.825 1.069-2.123 1.702-3.814 1.702-3.106 0-5.701-2.73-5.701-6.214 0-3.484 2.595-6.215 5.701-6.215 1.691 0 2.989.673 3.814 1.702v-6.096h3.028zm-2.988 10.609c0-1.98-1.377-3.325-3.264-3.325-1.848 0-3.224 1.346-3.224 3.325s1.376 3.325 3.224 3.325c1.848 0 3.264-1.346 3.264-3.325zM62.614 27.115c1.061 0 2.005-.515 2.398-1.188l2.988-.04c-.707 2.375-2.791 3.721-5.426 3.721-3.814 0-6.29-2.73-6.29-6.214 0-3.484 2.516-6.215 6.212-6.215 3.46 0 5.819 2.771 5.819 6.215 0 .435-.04.831-.118 1.266h-8.768c.432 1.663 1.69 2.455 3.185 2.455zm2.752-4.87c-.354-1.701-1.573-2.374-2.831-2.374-1.612 0-2.713.87-3.067 2.375h5.898zM80.307 17.496l-4.285 11.796h-3.067l-4.247-11.796h3.224l2.595 8.035 2.596-8.035h3.184zM88.84 29.292l-4.09-5.344v5.344h-3.027V12.785h3.028v9.896l3.853-5.185h3.5l-4.444 5.819 4.68 5.977h-3.5zM105 17.496v11.242c0 3.879-3.067 5.62-6.016 5.62-3.027 0-5.82-1.662-5.82-4.71h3.028c0 1.03.983 2.019 2.792 2.019 1.887 0 3.028-1.03 3.028-2.89V27.51c-.826 1.109-2.124 1.782-3.893 1.782-3.106 0-5.701-2.692-5.701-6.057 0-3.325 2.595-6.056 5.701-6.056 1.77 0 3.028.673 3.893 1.781v-1.464H105zm-2.949 5.7c0-1.86-1.376-3.206-3.264-3.206-1.887 0-3.263 1.345-3.263 3.206 0 1.9 1.376 3.246 3.263 3.246 1.888 0 3.264-1.346 3.264-3.246z"
              />
              <path
                stroke="#000"
                strokeWidth="9.48"
                d="M19.88 14.26H5.7v18.99h14.2a4.7 4.7 0 0 0 4.7-4.7V19"
              />
            </svg>
            <span onClick={() => setMenu(false)}>
              <IoCloseSharp />
            </span>
          </div>
          <nav className="menu--nav">
            <NavLink to={"/"}>Вакансии</NavLink>
            <NavLink to={"/events"}>Мероприятия</NavLink>
            <NavLink to={"/video"}>Видео</NavLink>
            <NavLink to={"/organization"}>Организации</NavLink>
            <NavLink to={"/community"}>Сообщество</NavLink>
          </nav>
        </div>
      )}
      {menu && <div className="bg" onClick={() => setMenu(false)}></div>}
    </div>
  );
};

export default Header;
