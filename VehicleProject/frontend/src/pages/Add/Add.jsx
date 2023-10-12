import "./../Add/Add.css";
import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar.jsx";
import Dropdown from "../../components/Dropdown.jsx";
import Upload from "../../components/Upload.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../../components/Calendar.jsx";
import { faCalendar, faCamera } from "@fortawesome/free-solid-svg-icons";

const Add = () => {
  const [date, setDate] = useState(["Year", "Month", "Day"]);
  const [openDate, setOpenDate] = useState(false);
  const dateRef = useRef();
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

          <div
            style={{
              fontSize: 32,
              marginTop: 20,
              color: "#313e56",
              textShadow: "2px 2px 10px #FFFFFF",
            }}
            id="labelText"
          >
            Details
          </div>

          <div
            style={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-between",
              margin: "20px 0 20px 0",
            }}
          >
            <div id="labelText">State</div>
            <Dropdown
              options={["new", "used", "damaged"]}
              onSelect={(value) => {}}
              width={"300px"}
            />
          </div>
          <div
            style={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div id="labelText">Imported</div>
            <Dropdown
              options={["yes", "no"]}
              onSelect={(value) => {}}
              width={"300px"}
            />
          </div>
          <div id="delimination"></div>

          <div
            style={{
              fontSize: 32,
              marginTop: 20,
              color: "#313e56",
              textShadow: "2px 2px 10px #FFFFFF",
            }}
            id="labelText"
          >
            General information
          </div>
          <div>
            <div id="labelText">VIN</div>
            <input type="text" placeholder="ex: 1FTPW14V88FC22108" id="" />
          </div>
          <div>
            <div id="labelText">KM</div>
            <input type="text" placeholder="ex: 180 000" id="" />
          </div>
          <div>
            <div id="labelText">Date</div>
            <Calendar />
            <div
              style={{
                color: "white",
                fontSize: 21,
                display: "inline-flex",
                gap: 5,
                fontWeight: 600,
              }}
            >
              {date[2]}
              <div>/</div>
              {date[1]}
              <div>/</div>
              {date[0]}
              <FontAwesomeIcon
                icon={faCalendar}
                onMouseOver={(event) => {
                  const item = event.target.style;
                  item.color = "rgb(49, 62, 86)";
                  item.cursor = "pointer";
                  item.scale = 1.2;
                  item.transition = "0.2s";
                }}
                onMouseLeave={(event) => {
                  const item = event.target.style;
                  item.color = "white";
                  item.scale = 1;
                }}
                onClick={() => {
                  setOpenDate(true);
                }}
              />
            </div>
          </div>
          <div
            style={{
              fontSize: 32,
              marginTop: 20,
              color: "#313e56",
              textShadow: "2px 2px 10px #FFFFFF",
            }}
            id="labelText"
          >
            Tehnical details
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              gap: 20,
            }}
          >
            <div style={{ width: "48%" }}>
              <div id="labelText">Year</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Model</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">HP</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Number of doors</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Version</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Chassie type</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Brand</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Fuel</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Capacity</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Gearbox</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Generation</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
            <div style={{ width: "48%" }}>
              <div id="labelText">Color</div>
              <Dropdown onSelect={(value) => {}} width={"100%"} />
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 32,
                marginTop: 20,
                color: "#313e56",
                textShadow: "2px 2px 10px #FFFFFF",
              }}
              id="labelText"
            >
              Photos
            </div>
            <div>
              <Upload />
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <div
              style={{
                fontSize: 32,
                marginTop: 20,
                color: "#313e56",
                textShadow: "2px 2px 10px #FFFFFF",
              }}
              id="labelText"
            >
              Description
            </div>
            <textarea
              style={{ padding: 20 }}
              name=""
              id=""
              cols="95"
              rows="10"
            ></textarea>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label id="labelText">Price</label>
              <input type="number" name="" id="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label id="labelText">Currency</label>
              <Dropdown onSelect={(value) => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
