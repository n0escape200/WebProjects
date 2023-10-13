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

const Calendar = () => {
  //*
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [lastDay, setLastDay] = useState(31);

  useEffect(() => {
    setDay(getCurrentDate()[0]);
    setMonth(getCurrentDate()[1].toUpperCase());
    setYear(getCurrentDate()[2]);
  }, []);

  const [yearTab, setYearTab] = useState(false);

  const yearRef = Array(105).fill(useRef(null));

  useEffect(() => {
    for (let i = 0; i < yearRef.length; i++) {
      const ref = yearRef[i];
      if (ref.current.value) {
      }
    }
  }, [year]);

  return (
    <div className="calendarContainer">
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
                console.log(i);
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
          <div>{"<"}</div>
          <div>{month}</div>
          <div>{">"}</div>
        </div>
        <div className="bottom">
          {Array.from({ length: lastDay }, (_, i) => {
            return <div key={i}>{i + 1}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
