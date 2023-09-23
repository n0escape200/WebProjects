import React from "react";
import Dropdown from "../components/Dropdown.jsx";
import DetailItem from "./DetailItem.jsx";
import "./BigFilter.css";

const BigFilter = () => {
  return (
    <div className="BigfilterContainer">
      <div className="filter">
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
        <Dropdown options={[]} onSelect={(value) => {}} />
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
