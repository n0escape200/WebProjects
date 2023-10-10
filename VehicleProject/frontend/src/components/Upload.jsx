import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Upload.css";
const Upload = () => {
  const fileRef = useRef(null);
  const [photo, setPhoto] = useState();

  return (
    <div className="uploadContainer">
      <div
        onClick={() => {
          fileRef.current.click();
        }}
        className="fileInput"
      >
        <input
          ref={fileRef}
          type="file"
          hidden
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        />
        <FontAwesomeIcon
          icon={faPlus}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <div
          style={{
            color: "white",
            fontSize: 32,
            letterSpacing: 1,
            fontWeight: 600,
            textShadow: "2px 2px 6px #000000",
          }}
        >
          Add photos
        </div>
      </div>
    </div>
  );
};

export default Upload;
