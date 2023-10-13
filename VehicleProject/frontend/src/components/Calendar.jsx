import React, { useEffect, useState } from "react";
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
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [lastDay, setLastDay] = useState(31);

  useEffect(() => {
    setDay(getCurrentDate()[0]);
    setMonth(getCurrentDate()[1].toUpperCase());
    setYear(getCurrentDate()[2]);
  }, []);

  return (
    <div className="calendarContainer">
      <div className="main">
        <div className="top">
          <div>{year}</div>
        </div>
        <div style={{ display: "inline-flex", gap: 10 }} className="middle">
          <div>{"<"}</div>
          <div>{month}</div>
          <div>{">"}</div>
        </div>
        <div className="bottom">
          {Array.from({ length: lastDay }, (_, i) => {
            return <div>{i + 1}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
