import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faGear,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown.jsx";

const Filter = () => {
  return (
    <div className="FilterContainer">
      <div className="container">
        <div className="top">
          <div className="topLabel">
            <FontAwesomeIcon
              icon={faCarSide}
              flip="horizontal"
              size="2xl"
              style={{ color: "black" }}
            />
            <span>Cars</span>
          </div>
          <div className="spacer"></div>
          <div className="topLabel">
            <FontAwesomeIcon
              icon={faGear}
              size="2xl"
              style={{ color: "#000000" }}
            />
            <span>Parts</span>
          </div>
          <div className="spacer"></div>
          <div className="topLabel">
            <FontAwesomeIcon
              icon={faTruckMoving}
              flip="horizontal"
              size="2xl"
              style={{ color: "#000000" }}
            />
            <span>Trucks</span>
          </div>
          <div className="spacer"></div>
          <div className="topLabel">
            <span>OtherCategories</span>
          </div>
        </div>
        <div className="middle">
          <div className="middleLabel">
            <Dropdown
              options={[
                "Suv",
                "Sedan",
                "Mini",
                "Truck",
                "Semi",
                "Mama",
                "Sedan",
                "Mini",
                "Truck",
                "Semi",
                "Mama",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
