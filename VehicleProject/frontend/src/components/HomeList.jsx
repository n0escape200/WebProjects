import React, { useState } from "react";
import "./HomeList.css";
import Item from "../components/Item.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
const HomeList = () => {
  const [view, setView] = useState(false);
  return (
    <div className="homelistContainer">
      <div className="listContainer">
        <div className="top">
          <FontAwesomeIcon
            icon={faTableCells}
            onClick={() => {
              setView(false);
              if (view == false) {
              }
            }}
            size="2xl"
            id="viewIcons"
          />
          <FontAwesomeIcon
            icon={faList}
            onClick={() => {
              setView(true);
            }}
            size="2xl"
            id="viewIcons"
          />
        </div>
        <div className="bottom">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default HomeList;
