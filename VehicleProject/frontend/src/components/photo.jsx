import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./photo.css";

const photo = ({ source, selected }) => {
  const [color, setColor] = useState("white");
  const hoverRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    selected(false);
  }, []);
  return (
    <div
      onMouseOver={() => {
        hoverRef.current.style.display = "flex";
        hoverRef.current.style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        hoverRef.current.style.display = "none";
      }}
      className="photoContainer"
    >
      <img src={source} alt="" />
      <div ref={hoverRef} className="overlay">
        <FontAwesomeIcon
          ref={iconRef}
          icon={faTrash}
          size="2xl"
          style={{ color: color, transition: "0.2s" }}
          onMouseOver={() => {
            setColor("#a2c3b6");
            iconRef.current.style.scale = 1.7;
          }}
          onMouseLeave={() => {
            setColor("white");
            iconRef.current.style.scale = 1;
          }}
          onClick={() => {
            selected(true);
          }}
        />
      </div>
    </div>
  );
};

export default photo;
