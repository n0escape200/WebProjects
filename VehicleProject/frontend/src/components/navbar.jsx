import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./navbar.css";

const navbar = () => {
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState(false);

  const location = useLocation();

  const logIn = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const info = {
      username: username,
      password: password,
      withCredentials: true,
    };

    await axios
      .post("http://localhost:5500/api_V1.0/auth/login", info, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("first");
        console.log(err);
      });
  };

  return (
    <div className="NavBarContainer">
      <div className="container">
        <div className="left">
          <span id="title">Automotive.ro</span>
        </div>
        <div className="right">
          <span id="text">
            New cars
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#fa9e00" }}
            />
          </span>
          <span id="text">Favourites (0)</span>
          <div id="icon">
            <FontAwesomeIcon
              onClick={() => {
                setAuth(!auth);
              }}
              icon={faUser}
            />
          </div>
          {String(location.pathname).toLowerCase() != "/add" && (
            <span className="sellBtn" id="text">
              + Sell now
            </span>
          )}
          {auth && (
            <>
              <div className="auth">
                {!form ? (
                  <>
                    <div className="authLabel">
                      <div>Username</div>
                      <input type="text" name="" id="username" />
                    </div>
                    <div className="authLabel">
                      <div>Password</div>
                      <input type="password" name="" id="password" />
                    </div>
                    <input
                      style={{ marginTop: 20 }}
                      type="button"
                      value="LogIn"
                      id="login"
                      onClick={() => {
                        logIn();
                      }}
                    />
                    <div>
                      No account yet?
                      <div id="reg" onClick={() => setForm(true)}>
                        Register
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="register"></div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default navbar;
