// Import React and React Hooks
import { useState } from "react";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from "../../store";
import "./PhoneScreen.css";
import { submitPhoneNumber } from "../../service/ApiService";

// Define a custom component called PhoneScreen
export default function PhoneScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const voucherId = useSelector((state: RootState) => state.qrReducer.value)

  const notifySuccess = () => toast("Success");
  const notifyError = () => toast("Something error");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const requestData = {
      voucherId: voucherId,
      phone_country_code: countryCode,
      phone_number: phoneNumber
    }
    submitPhoneNumber(requestData, notifySuccess, notifyError)
  };

  const handleOnChange = (value: any, data: any, event: any, formattedValue: any) => {
    setPhoneNumber(value)
    setcountryCode(data?.dialCode)
  }

  // Return the JSX elements to render the phone screen
  return (
    <div className="PhoneScreen">
      <ToastContainer />
      <h1>Input Phone Number</h1>
      <form onSubmit={handleSubmit}>
          <PhoneInput
            dropdownClass=""
            country={"us"}
            value={phoneNumber}
            onChange={handleOnChange}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
