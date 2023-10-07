import React, { useEffect, useState } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faGear,
  faMotorcycle,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown.jsx";
import { carBrands } from "../data/models.jsx";

const Filter = () => {
  const [currentFilter, setCurrentFilter] = useState([
    ["Cars", 1],
    ["Trucks", 0],
    ["Parts", 0],
    ["Motorcycles", 0],
  ]);
  const changeCurrentFilter = (string) => {
    const array = [];
    for (let i = 0; i < currentFilter.length; i++) {
      const element = currentFilter[i];
      array.push(element);
      if (array[i][0] != string) {
        array[i][1] = 0;
      } else {
        array[i][1] = 1;
      }
    }
    setCurrentFilter(array);
  };
  useEffect(() => {
    for (let i = 0; i < currentFilter.length; i++) {
      const element = currentFilter[i];
      document.getElementById(element[0] + "Emojie").style.color = "#a2c3b6";
      document.getElementById(element[0] + "Label").style.color = "#a2c3b6";

      if (element[1] == 1) {
        document.getElementById(element[0] + "Emojie").style.color = "white";
        document.getElementById(element[0] + "Label").style.color = "white";
      }
    }
  }, [currentFilter]);

  const renderFilters = (string) => {
    switch (string) {
      case "Cars":
        return (
          <div className="filterContainer">
            <div className="filterLabel">
              <div id="labelText">Brand</div>
              <Dropdown onSelect={(value) => {}} options={carBrands} />
            </div>

            <div className="filterLabel">
              <div id="labelText">Model</div>
              <Dropdown onSelect={(value) => {}} options={["Car9"]} />
            </div>
          </div>
        );
      case "Parts":
        return (
          <div className="filterContainer">
            <div className="filterLabel">
              <div id="labelText">Vehicle type</div>
              <Dropdown onSelect={(value) => {}} options={["Car69", "Car2"]} />
            </div>

            <div className="filterLabel">
              <div id="labelText">Brand</div>
              <Dropdown onSelect={(value) => {}} options={["Car9"]} />
            </div>
            <div className="filterLabel">
              <div id="labelText">Type</div>
              <Dropdown onSelect={(value) => {}} options={["Car9"]} />
            </div>
          </div>
        );
      case "Trucks":
        return (
          <div className="filterContainer">
            <div className="filterLabel">
              <div id="labelText">Work type</div>
              <Dropdown onSelect={(value) => {}} options={["Car69", "Car2"]} />
            </div>

            <div className="filterLabel">
              <div id="labelText">Brand</div>
              <Dropdown onSelect={(value) => {}} options={["Car9"]} />
            </div>
            <div className="filterLabel">
              <div id="labelText">Fuel</div>
              <Dropdown onSelect={(value) => {}} options={["Car9"]} />
            </div>
          </div>
        );

      case "Motorcycles":
        return <>Motorcycles</>;
    }
  };
  return (
    <div className="FilterContainer">
      <div className="containerSearch">
        <div className="top">
          <div
            onClick={() => {
              changeCurrentFilter("Cars");
            }}
            className="topLabel"
            id="CarsTop"
          >
            <FontAwesomeIcon
              icon={faCarSide}
              flip="horizontal"
              size="2xl"
              style={{ color: "black" }}
              id="CarsEmojie"
            />
            <span id="CarsLabel">Cars</span>
          </div>
          <div className="spacer"></div>
          <div
            onClick={() => {
              changeCurrentFilter("Parts");
            }}
            className="topLabel"
            id="PartsTop"
          >
            <FontAwesomeIcon
              icon={faGear}
              size="2xl"
              style={{ color: "#000000" }}
              id="PartsEmojie"
            />
            <span id="PartsLabel">Parts</span>
          </div>
          <div className="spacer"></div>
          <div
            onClick={() => {
              changeCurrentFilter("Trucks");
            }}
            className="topLabel"
            id="TrucksTop"
          >
            <FontAwesomeIcon
              icon={faTruckMoving}
              flip="horizontal"
              size="2xl"
              style={{ color: "#000000" }}
              id="TrucksEmojie"
            />
            <span id="TrucksLabel">Trucks</span>
          </div>
          <div className="spacer"></div>
          <div
            onClick={() => {
              changeCurrentFilter("Motorcycles");
            }}
            className="topLabel"
            id="MotorcyclesTop"
          >
            <FontAwesomeIcon
              icon={faMotorcycle}
              flip="horizontal"
              size="2xl"
              style={{ color: "#000000" }}
              id="MotorcyclesEmojie"
            />
            <span id="MotorcyclesLabel">Motorcycles</span>
          </div>
        </div>
        <div className="middle">
          <div className="middleLabel">
            {currentFilter.map(([string, value], index) => {
              return (
                <div key={index}>{value === 1 && renderFilters(string)}</div>
              );
            })}
            <div className="filterButton">Search (312)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
