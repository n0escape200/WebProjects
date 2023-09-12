import React from "react";
import Navbar from "../../components/navbar.jsx";
import Filter from "../../components/Filter.jsx";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="container">
        <div className="top">
          <Navbar />
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Home;
