import React from "react";
import Dropdown from "../components/Dropdown.jsx";
import DetailItem from "./DetailItem.jsx";
import "./BigFilter.css";

const BigFilter = () => {
  return (
    <div className="BigfilterContainer">
      <div className="filter">
        <Dropdown options={[]} onSelect={(value) => {}} tag="Brand" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Model" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Generation" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Chassis" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Fuel" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="From" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="To" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Km limit" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Tehnical State" />
        <Dropdown options={[]} onSelect={(value) => {}} tag="Location" />
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
