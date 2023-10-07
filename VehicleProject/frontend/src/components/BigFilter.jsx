import React from "react";
import Dropdown from "../components/Dropdown.jsx";
import DetailItem from "./DetailItem.jsx";
import "./BigFilter.css";

const BigFilter = () => {
  return (
    <div className="BigfilterContainer">
      <div className="filter">
        <div className="topFilter">
          <div
            style={{
              color: "#a2c3b6",
              fontSize: 42,
              padding: 10,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            Miata
          </div>
        </div>
        <div className="dropdowns">
          <Dropdown options={[]} onSelect={(value) => {}} tag="Brand" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Model" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Generation" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Chassis" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Fuel" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="From" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="To" />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Km limit" />
          <Dropdown
            options={[]}
            onSelect={(value) => {}}
            tag="Tehnical State"
          />
          <Dropdown options={[]} onSelect={(value) => {}} tag="Location" />
        </div>
        <div className="bottomFilter">
          <div style={{ fontSize: 21, color: "#b1624e", fontWeight: 600 }}>
            Current filter results (312)
          </div>
          <input id="filterSubmit" type="button" value="Submit" />
        </div>
      </div>
      <div className="results">
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
      </div>
    </div>
  );
};

export default BigFilter;
