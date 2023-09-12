import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faGear,
  faTruckMoving,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const dropdownClick = (event) => {
  //Showing the dropdown when clicking on the element
  const id = event.currentTarget.id;
  const element = document.getElementById("label" + id);
  if (element.classList.contains("dropdownHide")) {
    element.classList.remove("dropdownHide");
    element.classList.add("dropdownDisplay");
  } else {
    element.classList.add("dropdownHide");
    element.classList.remove("dropdownDisplay");
  }

  //Making the icon from an up-arrow to a down-arrow when the dropdown is visible and viceversa
  const iconContainer = document.getElementById(id);
  const icon = iconContainer.querySelector(".icon");
  if (icon.getAttribute("class") == "svg-inline--fa fa-chevron-up icon") {
    icon.setAttribute(
      "class",
      "svg-inline--fa fa-chevron-up fa-rotate-180 icon"
    );
  } else {
    icon.setAttribute("class", "svg-inline--fa fa-chevron-up icon");
  }
  document.addEventListener("click", (e) => {
    const clickedElement = e.target;
    console.log(clickedElement);
  });
};

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
            <span>Chassis</span>
            <div id="1" onClick={dropdownClick} className="label">
              <span className="dummieText">Select ...</span>
              <FontAwesomeIcon className="icon" icon={faChevronUp} />
            </div>
            <div id="label1" className="dropdown dropdownHide">
              <span>Sedan</span>
              <span>SUV</span>
              <span>Sedan</span>
              <span>SUV</span>
              <span>Sedan</span>
              <span>SUV</span>
            </div>
          </div>
          <div className="middleLabel">
            <span>Chassis</span>
            <div id="2" onClick={dropdownClick} className="label">
              <span className="dummieText">Select ...</span>
              <FontAwesomeIcon className="icon" icon={faChevronUp} />
            </div>
            <div id="label2" className="dropdown dropdownHide">
              <span>Sedan</span>
              <span>SUV</span>
              <span>Sedan</span>
              <span>SUV</span>
              <span>Sedan</span>
              <span>SUV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
