import React from "react";

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = () => {
    const array = Date().split(" ");
    const actualDate = [array[1], array[2], array[3]];
    return actualDate;
  };
  return (
    <div className="calendarContainer">
      <div className="main"></div>
    </div>
  );
};

export default Calendar;
