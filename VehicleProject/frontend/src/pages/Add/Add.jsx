import "./../Add/Add.css";
import React, { useState } from "react";
import Navbar from "../../components/navbar.jsx";
import Dropdown from "../../components/Dropdown.jsx";
import Upload from "../../components/Upload.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Add = () => {
  return (
    <div className="addContainer">
      <Navbar />
      <div className="main">
        <div className="content">
          <div
            style={{
              color: "white",
              fontSize: 32,
              textShadow: "2px 2px 5px #000000",
            }}
          >
            Add a new post
          </div>
          <Dropdown onSelect={(value) => {}} tag="Vehicle" width={"100%"} />

          <div>Details</div>
          <div>State</div>
          <div
            style={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>State</div>
            <Dropdown onSelect={(value) => {}} width={"48%"} />
          </div>
          <div
            style={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>Imported</div>
            <Dropdown onSelect={(value) => {}} width={"48%"} />
          </div>
          <div>General information</div>
          <div>
            <div>VIN</div>
            <input type="text" placeholder="ex: 1FTPW14V88FC22108" id="" />
          </div>
          <div>
            <div>KM</div>
            <input type="text" placeholder="ex: 180 000" id="" />
          </div>
          <div>
            <div>Date</div>
            <input type="number" name="" id="" />/
            <input type="number" name="" id="" />/
            <input type="number" name="" id="" />
          </div>
          <div>Tehnical details</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              gap: 20,
            }}
          >
            <div style={{ width: "48%" }}>
              <div>Year</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Model</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>HP</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Number of doors</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Version</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Chassie type</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Brand</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Fuel</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Capacity</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Gearbox</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Generation</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div>Color</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
          </div>
          <div>
            Photos
            <div>
              <Upload />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Add;
