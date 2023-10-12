import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlus } from "@fortawesome/free-solid-svg-icons";
import Photo from "./photo.jsx";
import Dropdown from "./Dropdown";
import "./Upload.css";
import photo from "./photo.jsx";

const Upload = () => {
  const fileRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  const removePhoto = (url) => {
    const updatedPhotos = photos.filter((photo) => photo != url);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="uploadContainer">
      <div style={{ display: "inline-flex" }}>
        <div>{photos.length}/20</div>
        <FontAwesomeIcon icon={faCamera} />
      </div>

      <div className="fileInput">
        <input
          ref={fileRef}
          type="file"
          hidden
          onChange={(event) => {
            setPhotos([...photos, URL.createObjectURL(event.target.files[0])]);
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 15,
            alignItems: "center",
          }}
        >
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

          {photos.map((photoUrl, index) => (
            <Photo
              selected={(value) => {
                if (value) {
                  removePhoto(photoUrl);
                }
              }}
              source={photoUrl}
              key={index}
            />
          ))}
          {photos.length != 0 && photos.length < 20 && (
            <>
              <div
                onClick={() => {
                  fileRef.current.click();
                }}
                style={{
                  fontSize: 70,
                  color: "#313e56",
                  width: 135,
                  textAlign: "center",
                  border: "0.1em dashed #313e56",
                }}
                id="plus"
              >
                +
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
