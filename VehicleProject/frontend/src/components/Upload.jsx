import React, { useRef } from "react";
import "./Upload.css";
const Upload = () => {
  const fileRef = useRef(null);
  return (
    <div className="uploadContainer">
      <div className="main"></div>
      <input ref={fileRef} type="file" name="" id="" hidden />
      <div
        onClick={() => {
          fileRef.current.click();
        }}
        className="fileInput"
      >
        Select file
      </div>
    </div>
  );
};

export default Upload;
