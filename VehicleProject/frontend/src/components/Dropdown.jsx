import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";

const Dropdown = ({
  options = [],
  onSelect,
  tag = "Select...",
  width = 175,
}) => {
  useEffect(() => {
    onSelect(null);
  }, []);
  const [visible, setVisible] = useState(false); //checks if the dropdown is visible or not
  const [search, setSearch] = useState(""); //storage for the input provided
  let [filteredArray, setFilteredArray] = useState([]); //storage for the array that's been filtered based on the input
  const clickRef = useRef(null); //used in checking the outside clicks
  const [topOption, setTopOption] = useState(tag); // storage for what the user will select or has selected

  /*This part of the code just keeps 
    track of the input from the user */
  const inputHandle = (event) => {
    setSearch(event.target.value);
  };

  /*This part of the code is responsible for filtering 
    the options from the array 'options' based on the 
    input provided by the user */
  useEffect(() => {
    const updatedFilteredArray = options.filter((option) =>
      option.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(updatedFilteredArray);
  }, [search]);

  //#region Click_Outside
  /*This part of the code is responsible for
    checking if the user clicked outside of 
    the dropdown */

  const handleClickOutside = (event) => {
    if (!clickRef.current.contains(event.target)) {
      setVisible(false);
      setSearch("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //endregion

  /*This function is responsible for changing
    the value (for now only the text) of the 
    label so the user can see what he selected*/
  const handleOptionClicked = (event) => {
    const value = event.target.textContent;
    setTopOption(value);
    setVisible(false);
    onSelect(value);
  };

  const minWidth = width < 175 ? 175 : width;

  return (
    <div
      style={{ width: minWidth }}
      value={topOption}
      ref={clickRef}
      className="dropdownContainer"
    >
      <div className="dropdown">
        {visible ? (
          <input
            className="optionInput"
            type="text"
            placeholder={topOption}
            onChange={inputHandle}
            id="topOption"
          />
        ) : (
          <div id="topOption">{topOption}</div>
        )}
        {visible ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            rotation={180}
            onClick={() => {
              setVisible(!visible);
              setFilteredArray(options);
            }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              setVisible(!visible);
              setSearch("");
            }}
            icon={faChevronUp}
          />
        )}
      </div>
      {visible && (
        <div className="menu" style={{ width: minWidth }}>
          {filteredArray.map((element, index) => {
            return (
              <span onClick={handleOptionClicked} id="option" key={index}>
                {element}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
