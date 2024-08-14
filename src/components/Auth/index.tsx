import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const loginApi = "http://3.38.98.134/auth/login";
const sighUpApi = "http://3.38.98.134/auth/signup";

const Auth = () => {
  const nav = useNavigate();
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirm, setConfirm] = React.useState<string>("");
  const [isLoginTab, setIsLoginTab] = React.useState<boolean>(true);

  const apiUrl = isLoginTab ? loginApi : sighUpApi
  const {login} = useAuth({url: apiUrl})
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please, fill the  fields!");
      return;
    }
    if (!isLoginTab && password !== confirm) {
      alert("Password do not match");
      return;
    }
    const res: any = await login(userName, password)
    if(res?.success ){
      Cookies.set('authtoken', res.token);
      nav('/')
    } else {
      alert(res.message)
    }
  };

  return (
    <div id="auth">
      <div className="container">
        <div className="auth">
          <form onSubmit={handleSubmit}>
            <h1>{isLoginTab ? "Login" : "Sign Up"}</h1>
            <div className="auth--content">
              <input
                type="text"
                placeholder="Email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLoginTab && (
                <input
                  value={confirm}
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              )}
              <button>{isLoginTab ? "Login" : "Sign Up"}</button>

              {isLoginTab ? (
                <div className="auth--content__register">
                  <p>Do not have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(false);
                    }}
                  >
                    SignUp
                  </button>
                </div>
              ) : (
                <div className="auth--content__register">
                  <p>Already have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(true);
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;