import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Upload.css";
const Upload = () => {
  const fileRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  return (
    <div className="uploadContainer">
      <div className="fileInput">
        <input
          ref={fileRef}
          type="file"
          hidden
          onChange={(event) => {
            setPhotos([...photos, URL.createObjectURL(event.target.files[0])]);
          }}
        />
        <div>
          {photos.length == 0 && (
            <div
              onClick={() => {
                fileRef.current.click();
              }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <div
                style={{
                  color: "white",
                  fontSize: 27,
                  letterSpacing: 1,
                  fontWeight: 600,
                  textShadow: "2px 2px 6px #000000",
                }}
              >
                Add photos
              </div>
            </div>
          )}

          {photos.map((index, value) => {
            return (
              <img id="previewImg" key={index} src={photos[value]} alt="" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Upload;
