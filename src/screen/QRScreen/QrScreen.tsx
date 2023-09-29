import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQrValue } from "./../../redux/QrReducer";
import "./QrScreen.css";

export default function QrScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let config = {
      fps: 5,
      qrbox: 250,
      formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      facingMode: "environment"
    };
    let scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 5,
        qrbox: 250,
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      },
      false
    );
    scanner.render(onScanSuccess, onError);

    function onScanSuccess(results: any) {
      scanner.clear();
      dispatch(updateQrValue(results));
      navigate(`/phone`);
    }

    function onError(error: any) {
      console.warn(`QR error = ${error}`);
    }

    return () => {
      scanner.clear();
    };
  }, [navigate]);


  // Return the JSX elements to render the QR screen
  return (
    <div className="QrScreen">
      <h1>QR Screen</h1>
      <div id="reader"></div>
    </div>
  );
}
