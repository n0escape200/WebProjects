import React, { useEffect, useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState();
  const [year, setYear] = useState();
  const [lastDay, setLastDay] = useState(31);
  const [currentDay, setCurrentDay] = useState();

  useEffect(() => {
    setIndex(getMonthIndex());
    setYear(getCurrentDate()[2]);
    setCurrentDay(getCurrentDate()[0]);
  }, []);

  useEffect(() => {
    const item = document.getElementById(year);
    if (item) {
      item.style.background = "#313e56";
      item.style.color = "white";
    }
  }, [visible, year]);

  useEffect(() => {
    const item = document.getElementById(currentDay);
    if (item) {
      item.style.background = "#313e56";
    }
  }, [currentDay]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getCurrentDate = () => {
    const array = Date().split(" ");
    const DMY_array = [array[2], array[1], array[3]]; //Array has in this order Day-Month-Year
    return DMY_array;
  };

  const years = [];
  for (let i = getCurrentDate()[2]; i >= 1910; i--) {
    years.push(i);
  }

  const getMonthIndex = () => {
    const month = getCurrentDate()[1].toLowerCase();
    for (let i = 0; i < months.length; i++) {
      if (months[i].toLowerCase() == month) {
        return i + 1;
      }
    }
  };

  return (
    <>
      <div className="calendarContainer">
        <div className="main">
          <div className="top">
            <span
              onMouseOver={(event) => {
                event.target.style.color = "#a2c3b6";
                event.target.style.cursor = "pointer";
              }}
              onMouseLeave={(event) => {
                event.target.style.color = "white";
              }}
              onClick={() => {
                setIndex(index - 1);
                if (index == 0) {
                  setIndex(11);
                }
              }}
              style={{ marginRight: 20 }}
            >
              {"<"}
            </span>
            <span>{months[index]}</span>
            <span
              onMouseOver={(event) => {
                event.target.style.color = "#a2c3b6";
                event.target.style.cursor = "pointer";
              }}
              onMouseLeave={(event) => {
                event.target.style.color = "white";
              }}
              onClick={() => {
                setIndex(index + 1);
                if (index == 11) {
                  setIndex(0);
                }
              }}
              style={{ marginLeft: 20 }}
            >
              {">"}
            </span>
          </div>
          <div className="middle">
            <div style={{ position: "relative" }}>
              <span
                onMouseOver={(event) => {
                  event.target.style.color = "#b1624e";
                  event.target.style.cursor = "pointer";
                }}
                onMouseLeave={(event) => {
                  event.target.style.color = "white";
                }}
                onClick={() => {
                  setVisible(!visible);
                }}
                style={{ fontSize: 15, transition: "0.2s" }}
              >
                {year}
              </span>
              {visible && (
                <div id="yearDropdown">
                  {years.map((value, index) => {
                    return (
                      <div
                        id={value}
                        key={index}
                        style={{
                          border: "0.01em solid black",
                          padding: "5px",
                        }}
                        onMouseOver={(event) => {
                          event.target.className = "yearHover";
                          event.target.style.cursor = "pointer";
                        }}
                        onMouseLeave={(event) => {
                          event.target.className = "";
                        }}
                        onClick={(event) => {
                          setYear(event.target.textContent);
                          setVisible(false);
                        }}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="bottom">
            {Array.from({ length: lastDay }, (_, index) => {
              return (
                <div
                  id={index + 1}
                  className="currentDay"
                  style={{
                    background: "#a2c3b6",
                    padding: 5,
                    fontSize: 13,
                    borderRadius: 10,
                    minWidth: 15,
                    textAlign: "center",
                    color: "white",
                  }}
                  key={index + 1}
                  onClick={(event) => {
                    const prevItem = document.getElementById(currentDay);
                    if (prevItem) {
                      prevItem.style.background = "#a2c3b6";
                    }
                    event.target.style.background = "#313e56";
                    setCurrentDay(event.target.textContent);
                  }}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
