import React, { useEffect, useRef, useState } from "react";
import "./Calendar.css";

const monthArray = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const getCurrentDate = () => {
  const date = Date().split(" ");
  const currentDate = [date[2], date[1], date[3]];
  return currentDate;
};

const Calendar = ({ active, onSelect }) => {
  //*
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [lastDay, setLastDay] = useState(31);

  useEffect(() => {
    onSelect([day, month, year]);
  }, [day, month, year]);

  useEffect(() => {
    setDay(getCurrentDate()[0]);
    setMonth(getCurrentDate()[1].toUpperCase());
    setYear(getCurrentDate()[2]);
  }, []);

  const [yearTab, setYearTab] = useState(false);
  const [monthTab, setMonthTab] = useState(false);

  const yearRef = Array.from({ length: 105 }, () => useRef(null));
  const monthRef = Array.from({ length: 12 }, () => useRef(null));
  const dayRef = Array.from({ length: lastDay }, () => useRef(null));

  useEffect(() => {
    for (let i = 0; i < yearRef.length; i++) {
      const ref = yearRef[i].current;
      if (ref != null) {
        if (ref.innerHTML == year) {
          ref.style.background = "#313e56";
          ref.style.color = "white";
        }
      }
    }
  }, [year, yearTab]);

  useEffect(() => {
    for (let i = 0; i < monthRef.length; i++) {
      const ref = monthRef[i].current;
      if (ref != null) {
        if (ref.innerHTML == month) {
          ref.style.background = "#313e56";
          ref.style.color = "white";
        }
      }
    }
  }, [month, monthTab]);

  useEffect(() => {
    for (let i = 0; i < dayRef.length; i++) {
      const ref = dayRef[i].current;
      if (ref != null) {
        ref.style.background = "white";
        ref.style.color = "#313e56";
        if (ref.innerHTML == day) {
          ref.style.background = "#a2c3b6";
          ref.style.color = "white";
        }
      }
    }
  }, [day]);

  return (
    <div className="calendarContainer">
      {active && (
        <div className="main">
          <div style={{ position: "relative" }} className="top">
            <div
              className="currentYear"
              onClick={() => {
                setYearTab(!yearTab);
              }}
            >
              {year}
            </div>
            {yearTab && (
              <div className="years">
                {Array.from({ length: 105 }, (_, i) => {
                  return (
                    <div
                      ref={yearRef[i]}
                      key={i}
                      onClick={(event) => {
                        setYear(event.target.textContent);
                        setYearTab(false);
                      }}
                      className="year"
                    >
                      {getCurrentDate()[2] - i}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div style={{ display: "inline-flex", gap: 10 }} className="middle">
            <div
              onClick={() => {
                setMonthTab(!monthTab);
              }}
              className="monthText"
            >
              {month}
            </div>

            {monthTab && (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexWrap: "wrap",
                  width: 280,
                  background: "white",
                  color: "#313e56",
                  gap: 10,
                  padding: 15,
                  justifyContent: "space-evenly",
                  bottom: 0,
                }}
              >
                {monthArray.map((value, i) => {
                  return (
                    <div
                      key={i}
                      ref={monthRef[i]}
                      style={{ border: "0.1em solid #313e56", padding: 3 }}
                      className="month"
                      onClick={(event) => {
                        setMonth(event.target.textContent);
                        setMonthTab(false);
                      }}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="bottom">
            {Array.from({ length: lastDay }, (_, i) => {
              return (
                <div
                  ref={dayRef[i]}
                  onClick={(event) => {
                    setDay(event.target.textContent);
                  }}
                  key={i}
                  className="day"
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
