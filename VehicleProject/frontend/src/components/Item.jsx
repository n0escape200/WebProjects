import { useEffect, useRef, useState } from "react";
import "./Item.css";
const Item = ({ view }) => {
  const widthRef = useRef();
  const state = view ? "itemContainer1" : "itemContainer2";
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(widthRef.current.clientWidth);
  }, [view]);
  const nrOfImg = Math.floor(width / 205);

  return (
    <div className={state}>
      <div ref={widthRef} className="images">
        {view ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hY0zhnie-vaJ3Ce_y5MZynG2jNCgY6WjUw&usqp=CAU"
            alt=""
          />
        ) : (
          Array.from({ length: nrOfImg }, (_, index) => {
            return (
              <img
                key={index}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hY0zhnie-vaJ3Ce_y5MZynG2jNCgY6WjUw&usqp=CAU"
                alt=""
              />
            );
          })
        )}
      </div>

      <div className="rightSide">
        <div className="description">
          <div id="head">The title of the fucking car</div>
          <div id="info">•2020</div>
          <div id="info">•8600 km</div>
          <div id="info">•Diesel</div>
          <div id="info">•2 925 cm3</div>
          <div id="info">•72 000 eur</div>
        </div>
        <div className="contact">Contact Seller</div>
      </div>
    </div>
  );
};

export default Item;
