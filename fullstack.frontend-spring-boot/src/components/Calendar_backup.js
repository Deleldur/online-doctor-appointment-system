import React, { useState } from "react";
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import axios from "axios";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import {
  addDays,
  getDay,
  setHours,
  isSameDay,
  formatISO,
  parseISO
} from "date-fns";
// import { parseJSON, parse } from "date-fns";
import eng from "date-fns/locale/en-GB";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calendar(props) {
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  registerLocale("en", eng);
  setDefaultLocale("en", eng);

  function onFormSubmit(e, props) {
    e.preventDefault();
    // a few consolelogs to see how the date string is formatted by default,
    // an how it needs to be formatted in allExcludeTimes.
    // Conclusion: ISO string
    //    currentDate: format(new Date(), "yyyy-MM-dd"),
    console.log("BOOKING REQUEST  std: " + format(startDate, "yyyy-MM-dd"));
    console.log("BOOKING REQUEST  std: " + format(startDate, "HH:mm"));
    console.log(props);
    // const newAppointment = {
    //   bookingStartTime: format(startDate, "HH:mm"),
    //   //      bookingEndTime: this.state.bookingEndTime,
    //   bookingDate: format(startDate, "yyyy-MM-dd"),
    //   doctorInformation: {
    //     doctorId: props.chosenDoctor.id,
    //     doctorFirstName: props.chosenDoctor.firstName,
    //     doctorLastName: props.chosenDoctor.lastName
    //   },
    //   patientInformation: {
    //     patientId: props.patientId,
    //     patientFirstName: props.patientFirstName,
    //     patientLastName: props.patientLastName
    //   },
    //   active: props.active,
    //   ailmentsDropDownValue: props.ailmentsDropDownValue
    // };
    // console.log(newAppointment);
    // console.log("BOOKING REQUEST  format iso: " + formatISO(startDate));
    // console.log(
    //   "BOOKING REQUEST  parse iso:  " + parseISO(formatISO(startDate))
    // );
  }

  const allExcludeTimes = [
    parseISO("2021-01-27T12:00:00.000Z"),
    parseISO("2021-01-281T13:00:00.000Z"),
    parseISO("2021-01-28T14:00:00.000Z"),
    parseISO("2021-01-29T15:00:00.000Z"),
    parseISO("2021-01-29T08:00:00.000Z")
  ];

  const getExcludeTimesForDate = (date) =>
    allExcludeTimes.filter((time) => isSameDay(date, time));

  const [excludeTimes, setExcludeTimes] = useState(
    getExcludeTimesForDate(startDate)
  );

  return (
    <div className="card text-center">
      <h3>Available appointments</h3>
      <form
        className="datepicker"
        name="appointmentSelect"
        onSubmit={props.onSubmit}
      >
        <DatePicker
          className="form-control"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setExcludeTimes(getExcludeTimesForDate(date));
            //console.log("SELECTED DAY: " + date);
          }}
          inline
          disabledKeyboardNavigation
          showWeekNumbers
          timeCaption="Available"
          showTimeSelect
          dateFormat="yyyy-MM-dd"
          timeFormat="HH:mm"
          minDate={new Date()}
          maxDate={addDays(new Date(), 30)}
          filterDate={isWeekday}
          minTime={setHours(new Date(), 8)}
          maxTime={setHours(new Date(), 16)}
          timeIntervals={60}
          filterTime={filterPassedTime}
          excludeTimes={excludeTimes}
        />
        <input type="submit" className="btn" value="Book appointment" />
      </form>
    </div>
  );
}
