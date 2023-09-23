import React from "react";
import "./List.css";
import NavBar from "../../components/navbar.jsx";
import BigFilter from "../../components/BigFilter";

const List = () => {
  return (
    <div className="ListContainer">
      <NavBar />
      <BigFilter />
    </div>
  );
};

export default List;
