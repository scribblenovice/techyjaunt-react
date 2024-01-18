import "./App.css";
import Homepage from "./homepage/Homepage";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import LaunchPad from "./launchpad/Launchpad";
import Checkout from "./checkout-page/Checkout";
// import { useLayoutEffect } from "react";
// import ReactPixel from "react-facebook-pixel";
import ThankYou from "./thank-you/ThankYou";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
function App() {
  // useLayoutEffect(() => {
  //   const options = {
  //     autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  //     debug: false, // enable logs
  //   };
  //   ReactPixel.init("219032204013009", options);
  //   ReactPixel.pageView(); // For tracking page view
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        <Route path="/launchpad" element={<LaunchPad />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/thank-you" element={<ProtectedRoute>
            <ThankYou />
          </ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
