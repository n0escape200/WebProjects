import React, { useEffect, useRef, useState } from "react";
import "./HomeList.css";
import Item from "../components/Item.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
const HomeList = () => {
  const [view, setView] = useState(true);
  const [width, setWidth] = useState();
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    if (icon) {
      document.getElementById("viewIcons1").style.color = "#a1e3ff";
      document.getElementById("viewIcons2").style.color = "black";
    } else {
      document.getElementById("viewIcons1").style.color = "black";
      document.getElementById("viewIcons2").style.color = "#a1e3ff";
    }
  }, [icon]);
  const widthRef = useRef();
  useEffect(() => {
    setWidth(widthRef.current.clientWidth);
  }, [view]);

  const nrOfItems = Math.floor(width / 242);
  return (
    <div className="homelistContainer">
      <div className="listContainer">
        <div className="top">
          <FontAwesomeIcon
            icon={faTableCells}
            onClick={() => {
              setView(true);
              setIcon(true);
            }}
            size="2xl"
            id="viewIcons1"
          />
          <FontAwesomeIcon
            icon={faList}
            onClick={() => {
              setView(false);
              setIcon(false);
              console.log(view);
            }}
            size="2xl"
            id="viewIcons2"
          />
        </div>
        <div ref={widthRef} className="bottom">
          <div className="daily">✦NEW DAILY VEHICLES</div>
          {Array.from({ length: nrOfItems }, (_, index) => {
            return <Item key={index} view={view} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeList;
