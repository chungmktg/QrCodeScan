import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQrValue } from "./../../redux/QrReducer";
import "./QrScreen.css";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function launchQRCode(cameraId: any) {
    const html5QrCode = new Html5Qrcode(/* element id */ "reader", false);
    html5QrCode
      .start(
        { facingMode: "environment" },
        {
          fps: 5, // Optional, frame per seconds for qr code scanning
          qrbox: { width: 300, height: 300 }, // Optional, if you want bounded box UI
        },
        (decodedText, decodedResult) => {
          dispatch(updateQrValue(decodedText));
          navigate(`/phone`);
        },
        (errorMessage) => {
          // parse error, ignore it.
        }
      )
      .catch((err) => {
        // Start failed, handle it.
      });

    return () => {
      html5QrCode.stop();
    };
  }

  useEffect(() => {
    // This method will trigger user permissions
    Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          launchQRCode(cameraId);
        }
      })
      .catch((err) => {
        console.warn(`QR error = ${err}`);
      });
  }, [navigate]);

  // Return the JSX elements to render the QR screen
  return (
    <div className="QrScreen">
      <h1>QR Screen</h1>
      <div id="reader"></div>
      <p id="title">Scan for queueing, table menus, and ordering</p>
      <p>
        Inside a participating store? Look for <br />
        the QR code to queue or view the <br />
        menu and order
      </p>
    </div>
  );
}
