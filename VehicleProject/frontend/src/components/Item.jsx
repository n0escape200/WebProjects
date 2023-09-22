import { useEffect, useRef } from "react";
import "./Item.css";
const Item = (style) => {
  const viewStyle = useRef();

  useEffect(() => {
    if (style) {
    }
  }, [style]);
  return (
    <div ref={viewStyle} className="itemContainer1">
      <img src="https://i.imgur.com/LYeYqEJ.jpeg" alt="" />
      <div className="description">
        <div>2020</div>
        <div>8600km</div>
        <div>Diesel</div>
        <div>2 925 cm3</div>
        <div>72 000 eur</div>
      </div>
    </div>
  );
};

export default Item;
