import React from "react";
import { Link } from "react-router-dom";
const FinishedAppointments = (props) => (
  <div className="table">
    <form className="tr">
      <span className="td">
        Booking date: {props.appointments.bookingDate}{" "}
      </span>
      <span className="td">
        Booking time {props.appointments.bookingStartTime}
      </span>
      <span className="td">Doctor name: xxxxxxx</span>
      <span className="td">
        <Link to={"/appointment/feedback/" + props.appointments.id}>
          <button
            className="btn"
            style={{ backgroundColor: "green", color: "white" }}
          >
            <span>Write Feedback</span>
          </button>
        </Link>
      </span>
    </form>
  </div>
);
export default FinishedAppointments;
