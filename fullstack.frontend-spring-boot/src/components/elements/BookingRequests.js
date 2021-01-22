import React from "react";

// this is the aprove or deny buttons on the Doctor page for booking requests

const BookingRequests = (props) => (
  <div className="table">
    <form className="tr">
      <span className="td">
        Booking date: {props.appointments.bookingDate}{" "}
      </span>
      <span className="td">
        Booking time {props.appointments.bookingStartTime}
      </span>
      <span className="td">Patient name: xxxxxxx</span>
      <span className="td">
        <input
          type="submit"
          value="Deny"
          className="btn"
          style={{ backgroundColor: "red" }}
        />
        <input
          type="submit"
          value="Approve"
          className="btn"
          style={{ backgroundColor: "green" }}
        />
      </span>
    </form>
  </div>
);

export default BookingRequests;
