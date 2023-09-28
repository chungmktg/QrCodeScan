// Import React and React Hooks
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./PhoneScreen.css";

// Define a custom component called PhoneScreen
export default function PhoneScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const qrData = useSelector((state: RootState) => state.qrReducer.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleClick()
  };

  // Define a function to handle the button click
  function handleClick() {
    // Call the API to send the phone number and the QR data
    fetch("https://example.com/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        qrData: qrData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data
        console.log(data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }

  // Return the JSX elements to render the phone screen
  return (
    <div className="PhoneScreen">
      <h1>Phone Number</h1>
      <a>Qr Id: {qrData}</a>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
