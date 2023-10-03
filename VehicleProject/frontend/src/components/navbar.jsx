import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const navbar = () => {
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState(false);
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
          <FontAwesomeIcon
            onClick={() => {
              setAuth(!auth);
            }}
            id="icon"
            icon={faUser}
          />
          <span className="sellBtn" id="text">
            + Sell now
          </span>
          {auth && (
            <>
              <div className="auth">
                {!form ? (
                  <>
                    <div className="authLabel">
                      <div>Username</div>
                      <input type="text" name="" id="" />
                    </div>
                    <div className="authLabel">
                      <div>Password</div>
                      <input type="text" name="" id="" />
                    </div>
                    <input
                      style={{ marginTop: 20 }}
                      type="button"
                      value="Login"
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
