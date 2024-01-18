import "./App.css";
import Homepage from "./homepage/Homepage";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import LaunchPad from "./launchpad/Launchpad";
import Checkout from "./checkout-page/Checkout";
import { useEffect } from "react";
// import ReactPixel from "react-facebook-pixel";
import ThankYou from "./thank-you/ThankYou";
import ProtectedRoute from "./globalcomponents/ProtectedRoutes";
import { landingPageEvent } from "./globalcomponents/SitePixel";
function App() {
  useEffect(() => {
    landingPageEvent();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Homepage />}></Route>
        <Route path="/launchpad" element={<LaunchPad />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/thank-you"
          element={
            <ProtectedRoute>
              <ThankYou />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
