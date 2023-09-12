import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const navbar = () => {
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
          <FontAwesomeIcon icon={faUser} />
          <span className="sellBtn" id="text">
            + Sell now
          </span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
