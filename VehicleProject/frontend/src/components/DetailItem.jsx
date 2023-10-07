import React from "react";
import "./DetailItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faGasPump,
  faLocationDot,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

const DetailItem = () => {
  return (
    <div className="DetailItemContainer">
      <div className="content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hY0zhnie-vaJ3Ce_y5MZynG2jNCgY6WjUw&usqp=CAU"
          alt=""
        />
        <div className="details">
          <div className="left">
            <div id="name">Title of the fucking car</div>
            <div id="underDesc">
              2 826 cm3 • 129 CP • Title of the fucking car brah
            </div>
            <div id="promote">Promoted</div>
            <div id="kmFuel">
              <FontAwesomeIcon
                style={{ marginRight: 5 }}
                icon={faRoad}
                color="#a2c3b6"
              />
              236 583 KM{" "}
              <FontAwesomeIcon
                style={{ marginRight: 5 }}
                icon={faGasPump}
                color="#a2c3b6"
              />
              Diesel{" "}
              <FontAwesomeIcon
                style={{ marginRight: 5 }}
                icon={faCalendar}
                color="#a2c3b6"
              />
              1999
            </div>
            <div id="place">
              <FontAwesomeIcon
                style={{ marginRight: 5 }}
                icon={faLocationDot}
                color="#14DE5E"
              />
              Suceava(Radauti)
            </div>
            <div id="status">Updated 5h ago</div>
          </div>
          <div className="right">
            <div id="price">
              6 000 <div id="priceType">EUR</div>
            </div>
            <div className="contact">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
