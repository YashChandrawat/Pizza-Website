import React from "react";
import "./Form.css";
import reservationImg from "./form.png";

function Form() {
  return (
    <div className="reservation">
      <div className="left-part-form">
        <h2 className="form-h2">Reservation</h2>
        <h1 className="form-h1">Book Your Table Now!</h1>
        <div className="first-row">
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
        </div>
        <div className="second-row">
          <input type="number" required placeholder="Phone" />
          <input type="time" required placeholder="Time" />
        </div>
        <div className="third-row">
          <input type="date" required placeholder="Date" />
          <input type="text" required placeholder="Guest" />
        </div>

        <button className="btn-home">Book Here</button>
      </div>
      <div className="right-part-form">
        <img src={reservationImg} alt="" className="image-form" />
      </div>
    </div>
  );
}

export default Form;
