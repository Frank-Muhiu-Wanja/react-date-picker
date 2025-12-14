import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select a date"
        dateFormat="yyyy/MM/dd"
        // maxDate={new Date()}
        filterDate={(date) => date.getDay() != 5}
        showYearDropdown
      />
    </div>
  );
}

export default ReactDatePicker;
